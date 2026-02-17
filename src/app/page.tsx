import FrontEndBlock from "@/components/block/Frontend";
import BackEndBlock from "@/components/block/Backend";
import DatabaseBlock from "@/components/block/Dados";
import ToolsBlock from "@/components/block/Ferramentas";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000] p-8 flex flex-col justify-center items-center">
      <div className="max-w-5xl w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FrontEndBlock />
          <BackEndBlock />
          <DatabaseBlock />
          <ToolsBlock />
        </div>

      </div>
    </main>
  );
} 