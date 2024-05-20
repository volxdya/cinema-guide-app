
import Link from "next/link";

export default function Home() {
  return (
    <>
      {
        /* 
          Main page
        */
      }
      <h1>HELLO DANIL</h1>
      <Link href="/profile">profile</Link>
      <Link href="/genres">genres</Link>
    </>
  );
}
