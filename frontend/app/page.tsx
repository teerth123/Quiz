import Link from "next/dist/client/link";
import Dashboard from "./(main)/Dashboard/page";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <h1 className="">Landing Page</h1>
        <br />
        <Link href="/Dashboard">Go to Dashboard</Link>
      </div>
    </>
  );
}
