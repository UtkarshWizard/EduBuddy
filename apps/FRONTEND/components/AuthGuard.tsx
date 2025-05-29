"use client";

import { useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";
import axios from "axios";
import { BACKEND_URL } from "@/config";

interface AuthGuardProps {
  children: ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      try {
        await axios.get(`${BACKEND_URL}/`, { withCredentials: true });
      } catch (err) {
        router.push("/auth/signin");
      }
    }
    checkAuth();
  }, [router]);

  return <>{children}</>;
}
