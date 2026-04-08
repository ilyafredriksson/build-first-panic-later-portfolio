"use client";

import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
    return (
        <nav className="w-full py-5 flex items-center justify-between">
            <div className="flex items-center gap-6">
               

                <div className="hidden items-center gap-2 sm:flex">
                    <Link className={buttonVariants({ variant: "ghost" })} href="#about">Om mig</Link>
                    
                    <Link className={buttonVariants({ variant: "ghost" })} href="#contact">Kontakt</Link>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <Link href="https://github.com/ilyafredriksson" target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline" })}>
                    GitHub
                </Link>
                <ThemeToggle />
            </div>
        </nav>
    );
}