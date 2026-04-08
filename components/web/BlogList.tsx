"use client";

import { api } from "@/convex/_generated/api";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "convex/react";
import Image from "next/image";
import Link from "next/link";

export default function BlogList() {
  const data = useQuery(api.posts.getPosts);

  if (data === undefined) {
    return <SkeletonLoadingUI />;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data?.map((post) => (
        <Card key={post._id} className="pt-0">
          <div className="aspect-video w-full overflow-hidden">
            <Image
              src={post.imageUrl ?? `https://picsum.photos/seed/${post._id}/800/600`}
              alt={post.title}
              className="rounded-t-lg"
              width={800}
              height={600}
            />
          </div>
          <CardContent className="p-6">
            <Link href={`/blog/${post._id}`}>
              <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors cursor-pointer">
                {post.title}
              </h3>
            </Link>
            <p className="text-muted-foreground line-clamp-3">{post.body}</p>
          </CardContent>
          <CardFooter>
            <Link className={buttonVariants({ className: "w-full" })} href={`/blog/${post._id}`}>
              Read More
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

function SkeletonLoadingUI() {
  return (
    <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="flex flex-col space-y-3">
          <Skeleton className="h-48 w-full rounded-xl" />
          <div className="space-y-2 flex flex-col">
            <Skeleton className="h-6 w-3/4 rounded" />
            <Skeleton className="h-4 w-full rounded" />
            <Skeleton className="h-4 w-2/3 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
