import { AuroraText } from "@/components/magicui/aurora-text";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { RiBrain2Fill } from "react-icons/ri";

import { CgNotes } from "react-icons/cg";
import { LuBrain } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";

import { GoUpload } from "react-icons/go";
import { LuLightbulb } from "react-icons/lu";
import Link from "next/link";
import ThemeToggle from "@/components/Theme-toggle";

const cards = [
  {icon: <CgNotes color="#22c55e" size={48}/>, title: 'Resumos Inteligentes', text: 'Gere resumos automáticos em diferentes tamanhos: curto, médio e detalhado'},
  {icon: <LuBrain color="#22c55e" size={48}/>, title: 'Quizzes Personalizados', text: 'Teste seus conhecimentos com questões de múltipla escolha geradas automaticamente'},
  {icon: <IoBookOutline color="#22c55e" size={48}/>, title: 'Flashcards Interativos', text: 'Crie flashcards dinâmicos para memorização eficiente e revisão rápida'}
]

const works = [
  {icon: <GoUpload color="#fff" size={48}/>, title: '1. Faça Upload', text: 'Envie seu arquivo PDF diretamente para nossa plataforma'},
  {icon: <LuBrain color="#fff" size={48}/>, title: '2. IA Processa', text: 'Nossa inteligência artificial analisa e extrai o conteúdo essencial'},
  {icon: <LuLightbulb color="#fff" size={48}/>, title: '3. Estude', text: 'Acesse resumos, quizzes e flashcards personalizados instantaneamente'}
]


export default function Home() {
  return (
   <div>

    {/* Header */}
    <header className="sticky top-0 z-50 w-full border-b border-[#404040]/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="p-5 w-full flex items-center justify-between">
        <div className="flex items-center gap-1">
          <RiBrain2Fill color="var(--primary)" size={32} />
          <span className="text-2xl font-bold">Flaswise</span>
          <span className="bg-[#c5c5c5ff] text-[#737373] p-1 px-3 rounded-xl text-[12px]">v2</span>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href='/signin' className="border flex items-center justify-center rounded-lg px-5 py-1 w-30 h-10 cursor-pointer">Entrar</Link>
          <Link href='/signup' className="bg-[#22c55e] flex items-center justify-center hover:bg-[#166543] transition-colors duration-100 text-white h-10 rounded-lg px-5 py-1 w-30 cursor-pointer">Cadastrar</Link>
        </div>
      </div>
    </header>

    {/* Hero Section */}
    <section className=" w-full py-40 px-5 dark:bg-[#0f172a]">
      <h1 className="mb-6 text-6xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-center">
        Transforme seus{" "}
        <AuroraText colors={['#22c55e', '#28dd6aff', '#166534']}>
          PDFs
        </AuroraText>{" "}
        <br/>em conhecimento
      </h1>
      <h2 className="text-[#64748B] text-center font-regular text-xl">
        Gere resumos inteligentes, quizzes personalizados e flashcards interativos a <br/> partir de qualquer documento PDF. Estude de forma mais eficiente.
      </h2>
      <div className="w-full flex justify-center items-center gap-3 mt-10">
        <InteractiveHoverButton>Começar gratuitamente</InteractiveHoverButton>
      </div>
    </section>

    <section className="bg-[#F1F5F9] dark:bg-[#1E293B]/40 py-20 px-10 flex flex-col gap-10">
      <div className="w-full flex flex-col gap-3">
        <h1 className="text-center text-4xl font-bold">Recursos poderosos</h1>
        <h2 className="text-[#64748B] text-center font-regular text-xl">Tudo que você precisa para otimizar seus estudos em um só lugar</h2>
      </div>
      <div className="w-full flex items-center justify-between gap-5">
        {cards.map((item, index) => (
          <div key={index} className="flex flex-col bg-white rounded-xl p-5 gap-3 w-1/3 dark:bg-[#0f172a]">
            {item.icon}
            <span className="font-bold text-black text-xl dark:text-white">{item.title}</span>
            <span className="text-[#64748B] text-sm">{item.text}</span>
          </div>
        ))}
      </div>
    </section>

    <section className="py-40 px-10 flex flex-col gap-10 dark:bg-[#0f172a]">
      <div className="w-full flex flex-col gap-3">
        <h1 className="text-center text-4xl font-bold">Como funciona?</h1>
        <h2 className="text-[#64748B] text-center font-regular text-xl">Em apenas 3 passos simples, transforme seus documentos em material de estudo</h2>
      </div>

      <div className="w-full flex items-center justify-between gap-5">
        {works.map((item, index) => (
          <div key={index} className="flex flex-col items-center bg-transparent rounded-xl p-5 gap-3 w-1/3">
            <div className="p-3 bg-[#22c55e] w-fit rounded-full">
              {item.icon}
            </div>
            <span className="font-bold text-black text-xl dark:text-white">{item.title}</span>
            <span className="text-[#64748B] text-sm text-center">{item.text}</span>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-[#22c55e] py-40 px-10 flex flex-col items-center gap-10">
      <div className="w-full flex flex-col gap-3">
        <h1 className="text-center text-white text-4xl font-bold">Pronto para revolucionar seus estudos?</h1>
        <h2 className="text-[#fff]/80 text-center font-regular text-xl">Em apenas 3 passos simples, transforme seus documentos em material de estudo</h2>
      </div>
      <div>
        <button className="bg-white text-[#22c55e] w-[300px] py-2 rounded-xl cursor-pointer">Começar agora gratuitamente</button>
      </div>
    </section>

    <footer className="py-20 px-10 flex flex-col items-center gap-10 dark:bg-[#0f172a]">
      <p>© 2025 Flashwise. Todos os direitos reservados.</p>
    </footer>

   </div>
  );
}
