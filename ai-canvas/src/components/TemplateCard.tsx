import {
  Eye,
  PlusSquare,
  FilePenLine,
  Copy,
  Trash2,
} from "lucide-react";

type TemplateCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  modified: string;
};

const TemplateCard = ({
  imageUrl,
  title,
  description,
  modified,
}: TemplateCardProps) => {
  return (
    <div className="group relative flex flex-col gap-4 rounded-2xl bg-[#1F2937] p-4 border border-[#334155] transition-all hover:shadow-[0_0_15px_0_rgba(79,70,229,0.4)] hover:-translate-y-1 hover:border-[#4F46E5]/50">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="flex flex-col">
        <p className="text-white text-base font-bold leading-normal">{title}</p>
        <p className="text-[#94a3b8] text-sm font-normal leading-normal">
          {description}
        </p>
        <p className="text-[#94a3b8] text-xs font-normal leading-normal mt-1">
          Modified: {modified}
        </p>
      </div>
      <div className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
          <Eye size={20} />
        </button>
        <button className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
          <PlusSquare size={20} />
        </button>
        <button className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
          <FilePenLine size={20} />
        </button>
        <button className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
          <Copy size={20} />
        </button>
        <button className="p-2 rounded-full bg-white/10 text-red-400 hover:bg-red-500/20 backdrop-blur-sm">
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default TemplateCard;
