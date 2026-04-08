"use client";

import { createBlogAction } from "@/app/action";
import { postSchema } from "@/app/schemas/blog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "convex/react";
import { Car, Loader2 } from "lucide-react";
import { useRouter } from "next/dist/client/components/navigation";
import { use, useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";


export default function CreateRoute() {
 const [isPending, startTransition] = useTransition();
 const router = useRouter();

    const form=useForm({
        resolver: zodResolver(postSchema as any),
        defaultValues:{
            title:"",
            content:"",
            image: undefined,
        }
    })

   function onSubmit(values: z.infer<typeof postSchema>){
        startTransition(async()=>{
        await createBlogAction(values);

        await fetch("/api/create-blog",{
            method:"POST",
        })


  
        })
   }

    return (
       <div className="py-12">
<div className="text-center mb-12">
    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl" >Create Post</h1>
    <p className="text-xl text-muted-foreground pt-4">Create your amazing blog and thoughts with the World</p>
</div>
<Card className="w-full max-w-xl mx-auto">
    <CardHeader>
        <CardTitle>Create Blog Article </CardTitle>
        <CardDescription>Start sharing your thoughts with the world</CardDescription>
    </CardHeader>
    <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className="gap-y-4">
                <Controller
                                            name="title"
                                            control={form.control}
                                            render={({ field, fieldState }) => (
                                                <Field>
                                                    <FieldLabel>Title</FieldLabel>
                                                    <Textarea aria-invalid={!!fieldState?.error} placeholder="Enter title" {...field} />
                                                    {fieldState?.error && (
                                                        <FieldError errors={[fieldState.error]} />
                                                    )}
                                                </Field>
                                            )}
                                        />
                                        <Controller
                                            name="content"
                                            control={form.control}
                                            render={({ field, fieldState }) => (
                                                <Field>
                                                    <FieldLabel>Content</FieldLabel>
                                                    <Input aria-invalid={!!fieldState?.error} placeholder="Enter content" {...field} />
                                                    {fieldState?.error && (
                                                        <FieldError errors={[fieldState.error]} />
                                                    )}
                                                </Field>
                                            )}
                                        />
                                        <Controller
                                            name="image"
                                            control={form.control}
                                            render={({ field, fieldState }) => (
                                                <Field>
                                                    <FieldLabel>Image</FieldLabel>
                                                    <Input 
                                                        aria-invalid={!!fieldState?.error} 
                                                        placeholder="Choose an image" 
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={(e) => {
                                                            const file = e.target.files?.[0];
                                                            if (file) {
                                                                field.onChange(file);
                                                            }
                                                        }}
                                                    />
                                                    {fieldState?.error && (
                                                        <FieldError errors={[fieldState.error]} />
                                                    )}
                                                </Field>
                                            )}
                                        />


                                        <Button disabled={isPending} type="submit" className="w-full">
                                            {isPending ? (
                                                <>
                                                    <Loader2 className="size-4 animate-spin" />
                                                    <span>Loading...</span>
                                                </>
                                            ) : (
                                                <span>Create Post</span>
                                            )}
                                        </Button>
          </FieldGroup>
        </form>
    </CardContent>
</Card>
       </div>
    );
}