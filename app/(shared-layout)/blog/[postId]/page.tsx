import  Link  from "next/link";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { fetchQuery, preloadQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Separator } from "@/components/ui/separator";
import CommentSection from "@/components/web/CommentSection";
import { Metadata } from "next";
import { PostPresence } from "@/components/web/PostPresence";

interface PostIdRouteProps {
    params: Promise<{
        postId: Id<"posts">;
    }>;
}

export async function generateMetadata({ params }: PostIdRouteProps): Promise<Metadata> {
    const { postId } = await params;
    const post = await fetchQuery(api.posts.getPostById, { postId });
    if (!post) {
        return {
            title: "Post not found",
        };
    }
    return {
        title: post.title,
        description: post.body.slice(0, 160), // Use the first 160 characters of the post body as the description
    };
}





export default async function PostIdRoute({ params }: PostIdRouteProps) {

   const { postId } = await params;

   const [post, preloadedComments] = await Promise.all([
        fetchQuery(api.posts.getPostById, { postId }),
        preloadQuery(api.comments.getCommentsByPostId, { postId }),
    ]);


    if(!post){
        return (
            <div>
                <h1 className="text-6xl font-extrabold text-red-500 py-20">
                    Post not found
                </h1>
            </div>
        );
    }
    return (
        <div className="max-w-3xl mx-auto py-8 px-4 animate-fade-in duration-500 relative">
            <Link className={buttonVariants({ variant: "outline",className:"mb-4" })} href="/blog">
            <ArrowLeft className="size-4"/>
            Back to Blog
            </Link>

            <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden shadow-sm">
                <Image src={post.imageUrl ?? `https://picsum.photos/seed/${post._id}/800/600`}  
                alt={post.title} fill 
                className="object-cover hover: scale-105 transition-transform duration-500"/>
            
               

            </div>
             <div className="space-y-4 flex flex-col">
                <h1 className="text-4xl font-bold tracking-tight text-foreground">{post.title}</h1>
                <div className="flex items-center gap-2">
                     <p className="text-sm text-muted-foreground"> Posted on:{""} {new Date(post._creationTime).toLocaleDateString("sv-SE")} </p>
                    <PostPresence roomId={post._id} />
                </div>
             </div>
                <div className="mt-6 text-lg leading-8 text-foreground">

                    <Separator className="my-8"/>


                    <p className="text-lg leading-relaxed text-foreground/90 whitespace-pre-wrap">{post.body}</p>

                    <Separator className="my-8"/>
                    <CommentSection preloadedComments={preloadedComments}/>

                </div>
        </div>
    );
}