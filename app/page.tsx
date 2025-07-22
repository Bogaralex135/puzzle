import Image from "next/image";
import Start from "@/components/Start";

export default function Home() {
  return (
    <div className="font-sans items-center max-h-fit">
      <main>
        <Image src={"/bosque.jpg"} alt={"bosque"} fill />
        <Start />
      </main>
    </div>
  );
}
