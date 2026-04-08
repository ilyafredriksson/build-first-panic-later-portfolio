import { cookies, headers } from "next/headers";

export const getToken = async () => {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore
        .getAll()
        .map((c) => `${c.name}=${c.value}`)
        .join("; ");

    const headerStore = await headers();
    const protocol = headerStore.get("x-forwarded-proto") ?? "http";
    const host = headerStore.get("x-forwarded-host") ?? headerStore.get("host") ?? "localhost:3000";
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? `${protocol}://${host}`;

    try {
        const response = await fetch(`${baseUrl}/api/auth/convex/token`, {
            method: "GET",
            headers: {
                cookie: cookieHeader,
            },
            cache: "no-store",
        });

        if (!response.ok) {
            return null;
        }

        const data = await response.json();
        return typeof data?.token === "string" ? data.token : null;
    } catch {
        return null;
    }
};