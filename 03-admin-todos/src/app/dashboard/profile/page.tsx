"use client";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
    const { data: session } = useSession();
    return <div>
        <h1 className="capitalize font-bold text-lg"> Profile Information</h1>
        <hr />
        <div className="flex flex-col gap-1 py-1">
            <span className="font-bold">
                ID: {session?.user?.id || "N/A"}
            </span>
            <span className="capitalize font-bold">
                Roles: {session?.user?.roles?.join(", ") || "No roles assigned"}
            </span>
            <span>
                {session?.user?.name || "User"}
            </span>
            <span>
                {session?.user?.email || "user@example.com"}
            </span>
            <span>
                {session?.user?.image || "https://via.placeholder.com/150"}
            </span>

        </div>
    </div>;
}