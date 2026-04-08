"use server"

import z from "zod";
import { postSchema } from "./schemas/blog";
import {fetchMutation} from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { redirect } from "next/navigation";
import { getToken } from "@/lib/auth.server";
import { revalidatePath, updateTag } from "next/cache";

export async function createBlogAction(values: z.infer<typeof postSchema>) {

    const parsed=postSchema.safeParse(values);

    if(!parsed.success){
        throw new Error("Something wrong");
    }

    const token = await getToken();
    
    try {
        const imageUrl = await fetchMutation(api.posts.generateimageUploadUrl,{}, {token: token ?? undefined});

        const uploadResult = await fetch(imageUrl,{
            method: "POST",
            headers: {
                "Content-Type": parsed.data.image.type,
            },
            body: parsed.data.image,
        });
        
        if(!uploadResult.ok){
            throw new Error("Failed to upload image");
        }
        
        const {storageId: imageId} = await uploadResult.json();
        
        await fetchMutation(api.posts.createPost,{
            title:parsed.data.title,
            body:parsed.data.content,
            imageStorageId: imageId,
        },{token: token ?? undefined});

    } catch (error) {
        console.error("Error creating post:", error);
        throw new Error("Failed to create post");
    }
      updateTag("blog");
    return redirect("/blog");
}