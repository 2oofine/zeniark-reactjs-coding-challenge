import Card from "@/components/atoms/Card";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <Card wide>
      <Image src={"/zeniark-logo.png"} alt="Zeniark Logo" width={200} height={200} />

      <div className="font-semibold mt-3 flex flex-col items-center gap-2">
        <h1 className="text-2xl">Welcome to Trivia Challenge!</h1>
        <h2 className="text-sm">You will be presented with 10 True or False questions.</h2>
      </div>

      <div className="bg-primary mt-7 py-2 px-10 rounded-md text-white">Can you score 10/10?</div>
      <Link href="/trivia" className="text-primary font-semibold underline text-2xl mt-7">
        LET&apos;S START!
      </Link>
    </Card>
  );
}
