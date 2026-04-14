import type { Metadata } from "next";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function UsersPage() {
  return (
    <div className="container mx-auto p-8">
      <Card>
        <CardHeader>
          <CardTitle>Registered Users</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            To view user data, go to{" "}
            <a 
              href="https://dashboard.convex.dev/t/fredrikssonilya/next-js-project/hardy-hamster-460/data?table=betterAuth%2Faccount" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Convex Dashboard → Data → betterAuth → account
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
