import { Metadata } from "next";
import BlogList from "@/components/web/BlogList";


export const metadata: Metadata = {
title: "Blog - Next.js Convex ",
description: "Read our latest articles, insights, and updates on Next.js and Convex. Stay informed with our expert-written blog posts covering a wide range of topics in web development.",
category: "Web Development",
authors:[{name: "Ilya Fredriksson"}],
keywords: ["Next.js", "Convex", "Web Development", "JavaScript", "React", "Programming", "Tech Blog"],
}

export default  function BlogPage() {  

   
   
    return (
     <div className="py-12">
        <div className="text-center pb-12">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Our Blog</h1>
            <p className="pt-4 max-w-2xl mx-auto text-xl text-muted-foreground">Insights, stories, and updates from our team.</p>
        </div>
      <BlogList />

     </div>
    )
}
