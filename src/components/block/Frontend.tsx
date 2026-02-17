// src/components/block/Frontend.tsx
import React from 'react';
import { Globe } from 'lucide-react';
// Adicionei o SiNextdotjs aqui na importação:
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import TechCard from './TechCard';

export default function Frontend() {
  return (
    <div className="bg-[#09090b] border border-[#27272a] p-6 rounded-2xl w-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-[#27272a] rounded-lg">
          <Globe size={20} className="text-zinc-300" />
        </div>
        <h2 className="text-lg font-bold text-zinc-100">Front-end</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <TechCard name="HTML" icon={SiHtml5} color="#E34F26" />
        <TechCard name="CSS" icon={SiCss3} color="#1572B6" />
        <TechCard name="JavaScript" icon={SiJavascript} color="#F7DF1E" />
        <TechCard name="Bootstrap" icon={SiBootstrap} color="#7952B3" />
        <TechCard name="Tailwind" icon={SiTailwindcss} color="#06B6D4" />
        
        {/* Olha o Next.js aqui! */}
        <TechCard name="Next.js" icon={SiNextdotjs} color="#ffffff" />
      </div>
    </div>
  );
}