import { title } from "process";
import  z from "zod";

export const postSchema= z.object({
    title: z.string().min(3, "Title must be at least 3 characters").max(100),
    content: z.string().min(10, "Content must be at least 10 characters").max(5000),
    image: z.instanceof(File)

})