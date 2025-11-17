import Toolbar from "@/components/Toolbar";
import CanvasArea from "@/components/CanvasArea";
import IterationPanel from "@/components/IterationPanel";

const AIPromptsDashboard = () => {
  return (
    <div className="flex flex-1">
      <main className="flex-1 flex flex-col p-6">
        <Toolbar />
        <CanvasArea />
      </main>
      <IterationPanel />
    </div>
  );
};

export default AIPromptsDashboard;
