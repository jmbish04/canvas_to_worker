import { Button } from "@/components/ui/button";
import { Edit, MessageSquare, Archive, Unarchive } from "lucide-react";
import { cn } from "@/lib/utils";

type CanvasCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  status: "Deployed" | "Draft" | "Archived";
  openModal?: () => void;
};

const CanvasCard = ({
  imageUrl,
  title,
  description,
  status,
  openModal,
}: CanvasCardProps) => {
  const statusStyles = {
    Deployed: "text-green-300 bg-green-900/50",
    Draft: "text-yellow-300 bg-yellow-900/50",
    Archived: "text-gray-300 bg-gray-700/50",
  };

  return (
    <div className="group relative flex flex-col gap-4 rounded-xl bg-white/5 p-4 aspect-[4/5] overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
      <div
        className="bg-cover bg-center rounded-lg flex-1"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="text-white text-base font-bold leading-tight line-clamp-1">
            {title}
          </p>
          <div
            className={cn(
              "text-xs font-medium px-2 py-0.5 rounded-full",
              statusStyles[status]
            )}
          >
            {status}
          </div>
        </div>
        <p className="text-gray-400 text-sm font-normal leading-normal line-clamp-2">
          {description}
        </p>
      </div>
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
        <Button
          size="icon"
          variant="ghost"
          onClick={openModal}
          className="bg-white/10 p-3 rounded-full text-white hover:bg-primary"
        >
          <Edit size={20} />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="bg-white/10 p-3 rounded-full text-white hover:bg-primary"
        >
          <MessageSquare size={20} />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="bg-white/10 p-3 rounded-full text-white hover:bg-primary"
        >
          {status === "Archived" ? (
            <Unarchive size={20} />
          ) : (
            <Archive size={20} />
          )}
        </Button>
      </div>
    </div>
  );
};

export default CanvasCard;
