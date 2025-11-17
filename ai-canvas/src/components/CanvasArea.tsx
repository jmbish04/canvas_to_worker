import { Button } from "@/components/ui/button";

const CanvasArea = () => {
  return (
    <div className="flex-1 flex items-center justify-center bg-slate-800/50 rounded-2xl p-4">
      <div className="flex flex-col items-center gap-6 rounded-2xl border-2 border-dashed border-slate-700 w-full h-full justify-center">
        <div className="flex max-w-[480px] flex-col items-center gap-2">
          <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center font-heading">
            Canvas Preview
          </p>
          <p className="text-gray-400 text-sm font-normal leading-normal max-w-[480px] text-center">
            Your rendered UI template will be displayed here. Start by
            describing a change in the Iteration Panel.
          </p>
        </div>
        <Button
          variant="outline"
          className="bg-slate-800 text-white hover:bg-slate-700"
        >
          Load Example
        </Button>
      </div>
    </div>
  );
};

export default CanvasArea;
