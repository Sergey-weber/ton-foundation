
'use client';
import { QueryClientProvider } from "@tanstack/react-query";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { LoginComponent } from "@/components";
import { tonClient } from "@/configs";

export default function Login() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <TonConnectUIProvider manifestUrl={tonClient.manifestUrl}>
                <QueryClientProvider client={tonClient.queryClient}>
                    <LoginComponent />
                </QueryClientProvider>
            </TonConnectUIProvider>
        </main>
    );
}
