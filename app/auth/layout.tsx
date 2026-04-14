import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
    },
};


export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="absolute top-5 left-5">
                <Link href="/" className={buttonVariants({ variant: "outline" })}>
                <ArrowLeft className="size-4"/>
                Till startsidan
                </Link>

            </div>
             <div className="w-full max-w-md mx-auto ">
                {children}
             </div>
        </div>
    );
}