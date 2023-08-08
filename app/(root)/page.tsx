// pages/example.tsx
import { UserButton } from "@clerk/nextjs";
import type { Metadata } from "next";

export default function Example() {
  return (
    <>
      <header>
        <UserButton afterSignOutUrl="/" />
      </header>
      <div>Your page's content can go here.</div>
    </>
  );
}
