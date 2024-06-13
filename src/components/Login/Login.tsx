'use client'

import { TonConnectButton } from "@tonconnect/ui-react";
import { useRouter } from 'next/navigation'


import { useTonConnect } from "@/hooks";

import { useEffect } from "react";


export const Login = () => {
    const { connected } = useTonConnect();
    const router = useRouter();

    useEffect(() => {
        if (connected) {
            router.push('/')
        }
    }, [connected])

    return (
        <TonConnectButton />
    );
}
