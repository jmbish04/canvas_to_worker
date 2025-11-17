import { canvases } from "@/data/canvases";
import CanvasCard from "./CanvasCard";

type CanvasGridProps = {
  openModal: () => void;
};

const CanvasGrid = ({ openModal }: CanvasGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {canvases.map((canvas, index) => (
        <CanvasCard
          key={canvas.title}
          {...canvas}
          openModal={index === 0 ? openModal : undefined}
        />
      ))}
    </div>
  );
};

export default CanvasGrid;
