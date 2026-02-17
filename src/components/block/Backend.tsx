// src/components/block/Backend.tsx
import React from 'react';
import { Server } from 'lucide-react';
import { SiSpring, SiDjango } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import TechCard from './TechCard'; 

export default function Backend() {
  return (
    <div className="bg-[#09090b] border border-[#27272a] p-6 rounded-2xl w-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-[#27272a] rounded-lg">
          <Server size={20} className="text-zinc-300" />
        </div>
        <h2 className="text-lg font-bold text-zinc-100">Back-end</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <TechCard name="Java" icon={FaJava} color="#007396" />
        <TechCard name="Spring" icon={SiSpring} color="#6DB33F" />
        <TechCard name="Django" icon={SiDjango} color="#092E20" />
      </div>
    </div>
  );
}