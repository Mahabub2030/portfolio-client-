"use client";

import { Button } from "@/components/ui/button";
import { Home, LogOut, PlusCircle } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Sidebar() {
  const session = useSession();
  return (
    <aside className="flex h-screen w-64 flex-col bg-gray-900 text-white shadow-lg">
      {/* Top navigation */}
      <nav className="flex-1 space-y-2 p-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors"
        >
          <Home className="h-4 w-4" />
          Home
        </Link>

        <Link
          href="/dashboard/create-blog"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors"
        >
          <PlusCircle className="h-4 w-4" />
          Create Blog
        </Link>

        <Link
          href="/dashboard/project"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors"
        >
          <PlusCircle className="h-4 w-4" />
          All Project
        </Link>
      </nav>

      {/* Bottom action */}
      <div className="p-4 border-t border-gray-700">
        {session?.status === "authenticated" && (
          <Button
            variant="destructive"
            className="w-full justify-start gap-2 cursor-pointer bg-red-100 hover:bg-red-300 transition-colors text-black"
            onClick={() => signOut()}
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        )}
      </div>
    </aside>
  );
}
