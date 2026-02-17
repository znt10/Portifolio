// src/components/block/TechCard.tsx
import React from 'react';

// 1. Criamos a interface para definir os tipos
interface TechCardProps {
  icon: React.ElementType; 
  name: string;
  color: string;
}

// 2. Aplicamos a interface nas propriedades (props)
export default function TechCard({ icon: Icon, name, color }: TechCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-4 bg-[#18181b] border border-[#27272a] rounded-xl hover:bg-[#27272a] hover:border-[#3f3f46] transition-all cursor-pointer">
      <Icon size={32} style={{ color: color }} />
      <span className="text-xs font-medium text-zinc-400">{name}</span>
    </div>
  );
}