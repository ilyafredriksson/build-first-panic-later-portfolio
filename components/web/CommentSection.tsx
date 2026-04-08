"use client";

import { Loader2, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Card, CardHeader } from "../ui/card";
import { CardContent } from "../ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import commentSchema from "@/app/schemas/comment";
import { Field, FieldError } from "../ui/field";
import { FieldLabel } from "../ui/field";

import { Controller } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useTransition } from "react";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";
import { Preloaded, useConvexAuth, useMutation, usePreloadedQuery, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Separator } from "../ui/separator";
import { da } from "zod/v4/locales";





type CommentFormData = {
    body: string;
    postId: Id<"posts">;
};

export default function CommentSection(props: {
  preloadedComments: Preloaded<typeof api.comments.getCommentsByPostId>;
}) {
    const params = useParams<{ postId: Id<"posts"> }>();
    const data = usePreloadedQuery(props.preloadedComments);
    const [isPending, startTransition] = useTransition();

    const createComment =useMutation(api.comments.createComment);
    const session = authClient.useSession();
    const { isAuthenticated: isConvexAuthenticated, isLoading: isConvexAuthLoading } = useConvexAuth();
    const isAuthenticated = !!session.data?.user;

    const form = useForm<CommentFormData>({
        resolver: zodResolver(commentSchema() as any),
        defaultValues: {
            body: "",
            postId: params.postId,
        }
    });

    const onSubmit = async (data: CommentFormData) => {
        if (!isAuthenticated) {
            toast.error("Du måste logga in för att kommentera");
            return;
        }

        if (isConvexAuthLoading || !isConvexAuthenticated) {
            toast.error("Sessionen synkroniseras fortfarande. Vänta ett ögonblick och försök igen.");
            return;
        }

        startTransition(async () => {
            try {
                await createComment(data);
                form.reset({ body: "", postId: params.postId });

                toast.success("Kommentaren är publicerad");
            } catch (error: any) {
                const message = String(error?.message || "");
                if (message.toLowerCase().includes("unauthorized")) {
                    toast.error("Kommentarssessionen är inte redo ännu. Ladda om sidan och försök igen.");
                    return;
                }
                toast.error("Kunde inte publicera kommentaren");
            }
        });
    };

      if (data === undefined) {
        return <p>Loading...</p>
    }
    return (
        <Card>
            <CardHeader className="flex flex-row items-center gap-2 border-b " >
                <MessageSquare className="size-5"/>
                <h2 className="text-xl font-fontbold">{data.length} Comments</h2>

            </CardHeader>
            <CardContent className="space-y-8">
                {!isAuthenticated && !session.isPending && (
                    <p className="mb-4 text-sm text-muted-foreground">
                        Du är inte inloggad. <Link href="/auth/login" className="underline">Logga in</Link> för att kommentera.
                    </p>
                )}
                {isAuthenticated && isConvexAuthLoading && (
                    <p className="mb-4 text-sm text-muted-foreground">
                        Förbereder kommentarsession...
                    </p>
                )}
                <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                       <Controller
                                            name="body"
                                            control={form.control}
                                            render={({ field, fieldState }) => (
                                                <Field>
                                                    <FieldLabel>Write your comment and pray not to be grilled</FieldLabel>
                                                    <Textarea aria-invalid={!!fieldState?.error} placeholder="Share your thoughts..." disabled={!isAuthenticated || isPending || isConvexAuthLoading || !isConvexAuthenticated} {...field} />
                                                    {fieldState?.error && (
                                                        <FieldError errors={[fieldState.error]} />
                                                    )}
                                                </Field>
                                            )}
                                        />

                                        
                                        <Button disabled={isPending || !isAuthenticated || session.isPending || isConvexAuthLoading || !isConvexAuthenticated} type="submit" className="w-full">
                                            {isPending ? (
                                                <>
                                                    <Loader2 className="size-4 animate-spin" />
                                                    <span>Loading...</span>
                                                </>
                                            ) : (
                                                <span>Post comment</span>
                                            )}
                                        </Button>


                </form>
                {data?.length > 0 ? <Separator/> : (
                    <p className="text-sm text-muted-foreground">No comments yet. Be the first to comment!</p>
                )}
                <section className="space-y-6">
                    {data?.map((comment) => (
                        <div key={comment._id} className="flex gap-4">
                            <Avatar className="size-10 shrink-0">
                                <img src={`https://avatar.vercel.sh/${comment.authorName}`}
                                alt={comment.authorName}
                                />
                                <AvatarFallback>
                                    {comment.authorName.slice(0, 2).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 space-y-1">
                                <div className="flex items-center justify-between">
                                <p className="text-sm font-semibold">{comment.authorName}</p>
                                <p className="text-xs text-muted-foreground">{new Date(comment._creationTime).toLocaleDateString("en-US")}</p>
                                </div>
                               <p className="text-sm text-foreground/90 whitespace-pre-wrap leading-relaxed">{comment.body}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </CardContent>
        </Card>
    );
}


