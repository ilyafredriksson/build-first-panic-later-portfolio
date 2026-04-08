import { mutation, query } from "./_generated/server"
import { ConvexError, v } from "convex/values";
import { authComponent } from "./auth";
import { ConvexClient } from "convex/browser";


export const getCommentsByPostId =query ({
    args:{
        postId:  v.id("posts"),
    },
    handler:async (ctx,args) => {
        const data =await ctx.db.query("comments").filter((q)=>q.eq(q.field('postId'),args.postId))
        .order("desc").collect();
        return data;
    }
})


export const createComment = mutation({
    args:{
        body: v.string(),
        postId: v.id("posts"),
    },
    handler: async (ctx,args) => {
         const user = await authComponent.safeGetAuthUser(ctx);
             if(!user){
               throw new ConvexError("Unauthorized");
             }
            
        return await ctx.db.insert("comments",{
            body: args.body,
            postId: args.postId,
            authorId: user._id,
            authorName: user.name,
        });
    }
})



