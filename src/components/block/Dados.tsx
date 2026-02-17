// src/components/block/Dados.tsx

import { Database } from 'lucide-react';
import { SiOracle, SiMysql, SiPostgresql, SiSqlite, SiMongodb} from 'react-icons/si';
import TechCard from './TechCard';

export default function Dados() {
  return (
    <div className="bg-[#09090b] border border-[#27272a] p-6 rounded-2xl w-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-[#27272a] rounded-lg">
          <Database size={20} className="text-zinc-300" />
        </div>
        <h2 className="text-lg font-bold text-zinc-100">Banco de Dados</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <TechCard name="MySQL" icon={SiMysql} color="#4479A1" />
        <TechCard name="Postgre" icon={SiPostgresql} color="#336791" />
        <TechCard name="MongoDB" icon={SiMongodb} color="#47A248" />
      </div>
    </div>
  );
}