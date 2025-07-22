import { Input } from "@/components/ui/input"
import Image from "next/image";

export default function Question({question="", answer="", title=""}) {
  return <div className="flex flex-col gap-4 p-6 bg-slate-500/70">
    <h1 className="text-4xl font-bold text-slate-100">{title}</h1>
    <Image src={'/arbol.png'} alt={'arbol magico'} width={600} height={600} className="mx-auto"/>
    <h2 className="text-2xl font-bold text-slate-100">{question}</h2>
    <Input type="text" className="text-2xl font-bold text-slate-100 placeholder:text-slate-100" placeholder="Respuesta..."/>
  </div>;
}