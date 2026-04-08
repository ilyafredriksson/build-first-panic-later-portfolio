import z from "zod";
import { Id } from "@/convex/_generated/dataModel";

export default function commentSchema() {
    return z.object({
        body: z.string().min(1, "Comment body cannot be empty"),
        postId: z.custom<Id<"posts">>(),
    });
}