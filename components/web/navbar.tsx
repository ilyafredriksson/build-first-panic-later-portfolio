"use client";

import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import SearchInput from "./SearchInput";

export function Navbar() {
    const { isAuthenticated, setAuthenticated } = useAuth();
    const router = useRouter();
    
    return (
       
        <nav className="w-full py-5 flex items-center justify-between">
            <div className="flex items-center gap-8">
                <Link href="/">
                <h1 className="text-2xl font-bold">
                    Next<span className="text-primary">Pro</span>
                </h1>
                </Link>

                <div className="flex items-center gap-2">
                    <Link className={buttonVariants({variant:"ghost"})} href="/">Home </Link>
                    <Link className={buttonVariants({variant:"ghost"})} href="/blog">Blog </Link>
                    <Link className={buttonVariants({variant:"ghost"})} href="/create">Create </Link>
                </div>
            </div>
        
            <div className="flex items-center gap-2">
                <div className="hidden md:block mr-2">
                    <SearchInput />
                </div>
                {isAuthenticated ? (
                    <Button onClick={async ()=> {
                        await authClient.signOut();
                        setAuthenticated(false);
                        toast.success("Logged out successfully");
                        router.push("/");
                    }}>Logout</Button>
                ) : (
                    <>
                        <Link className={buttonVariants()} href="/auth/login">Login </Link>
                        <Link className={buttonVariants({variant: "outline"})} href="/auth/signup">Sign up </Link>
                    </>
                )}
                <ThemeToggle />
            </div>
        </nav>
    );
}