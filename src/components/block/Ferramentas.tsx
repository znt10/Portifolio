// src/components/block/Ferramentas.tsx
import React from 'react';
import { Wrench } from 'lucide-react';
import { SiJetbrains,SiGithub, SiDocker, SiAmazonwebservices } from 'react-icons/si';
import TechCard from './TechCard';

export default function Ferramentas() {
  return (
    <div className="bg-[#09090b] border border-[#27272a] p-6 rounded-2xl w-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-[#27272a] rounded-lg">
          <Wrench size={20} className="text-zinc-300" />
        </div>
        <h2 className="text-lg font-bold text-zinc-100">Ferramentas</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <TechCard name="Jetbrains IDE's" icon={SiJetbrains} color="#ffffff" /> 
        <TechCard name="Git / Github" icon={SiGithub} color="#ffffff" />
        <TechCard name="Docker" icon={SiDocker} color="#2496ED" />
        <TechCard name="AWS" icon={SiAmazonwebservices} color="#FF9900" />
      </div>
    </div>
  );
}