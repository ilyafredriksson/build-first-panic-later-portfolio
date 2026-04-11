"use client";

import { LoginSchema } from "@/app/schemas/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/lib/auth-context";


export default function LoginPage() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const { setAuthenticated } = useAuth();
    
    const form = useForm<z.infer<typeof LoginSchema>>({
        mode: "onTouched",
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });
    async function onSubmit(data: z.infer<typeof LoginSchema>) {
        startTransition(async () => {
            try {
                const result = await authClient.signIn.email({
                    email: data.email,
                    password: data.password,
                });
                
                if (result.error) {
                    toast.error(result.error.message || "Login failed");
                } else {
                    setAuthenticated(true);
                    toast.success("Logged in successfully!");
                    router.push("/");
                }
            } catch (error: unknown) {
                const message = error instanceof Error ? error.message : "An unexpected error occurred";
                toast.error(message);
            }
        });
    }
    return (
        <Card>
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Login to get started</CardDescription>    
                </CardHeader>
                <CardContent>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                                     <FieldGroup className="gap-y-4">
                                      
                                         <Controller
                                            name="email"
                                            control={form.control}
                                            render={({ field, fieldState }) => (
                                                <Field>
                                                    <FieldLabel>Email</FieldLabel>
                                                    <Input aria-invalid={!!fieldState?.error} placeholder="john.doe@example.com" type="email" {...field} />
                                                    {fieldState?.error && (
                                                        <FieldError errors={[fieldState.error]} />
                                                    )}
                                                </Field>
                                            )}
                                        />
                                         <Controller
                                            name="password"
                                            control={form.control}
                                            render={({ field, fieldState }) => (
                                                <Field>
                                                    <FieldLabel>Password</FieldLabel>
                                                    <Input aria-invalid={!!fieldState?.error} placeholder="********" type="password" {...field} />
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
                                                <span>Login</span>
                                            )}
                                        </Button>
                                     </FieldGroup>
                    </form>
                </CardContent> 

        </Card>
    );
}
