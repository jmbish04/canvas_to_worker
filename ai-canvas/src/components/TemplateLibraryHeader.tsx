import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type TemplateLibraryHeaderProps = {
  openModal: () => void;
};

const TemplateLibraryHeader = ({ openModal }: TemplateLibraryHeaderProps) => {
  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-white text-3xl md:text-4xl font-bold font-heading">
          Template Library
        </h1>
        <p className="text-[#94a3b8] text-base">
          Configure and test reusable AI prompt-to-UI templates.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8]" size={20} />
          <Input
            className="w-full rounded-lg border-[#334155] bg-[#1F2937] pl-11 pr-4 py-2.5 text-sm text-white placeholder:text-[#94a3b8] focus:border-[#4F46E5] focus:ring-[#4F46E5]"
            placeholder="Search templates..."
            type="text"
          />
        </div>
        <Button
          onClick={openModal}
          className="flex-shrink-0 bg-[#10B981] text-white text-sm font-bold leading-normal tracking-wide hover:bg-[#10B981]/90 transition-colors h-11 px-4"
        >
          New Template
        </Button>
      </div>
    </header>
  );
};

export default TemplateLibraryHeader;
