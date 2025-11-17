import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  AutoAwesome,
  Send,
  Save,
  RocketLaunch,
  Bolt,
  TaskAlt,
} from "lucide-react";

const IterationPanel = () => {
  return (
    <aside className="w-[380px] flex-shrink-0 bg-slate-800 border-l border-slate-700 flex flex-col">
      <header className="p-4 border-b border-gray-700">
        <h2 className="font-heading font-bold text-white">Iteration Panel</h2>
        <p className="text-sm text-gray-400">Editing: Product Card v4</p>
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* AI Message */}
        <div className="flex gap-3">
          <div className="size-8 rounded-full bg-indigo-500 flex-shrink-0 items-center justify-center flex">
            <AutoAwesome size={18} />
          </div>
          <div className="bg-gray-700/50 rounded-lg rounded-tl-none p-3 max-w-[85%]">
            <p className="text-sm text-gray-300">
              I'm ready to refine Product Card v4. What would you like to
              change?
            </p>
          </div>
        </div>
        {/* User Message */}
        <div className="flex justify-end">
          <div className="bg-indigo-500 rounded-lg rounded-br-none p-3 max-w-[85%]">
            <p className="text-sm text-white">Make headers pop</p>
          </div>
        </div>
        {/* AI Thinking */}
        <div className="flex gap-3">
          <div className="size-8 rounded-full bg-indigo-500 flex-shrink-0 items-center justify-center flex animate-spin">
            <Bolt size={18} />
          </div>
          <div className="bg-gray-700/50 rounded-lg rounded-tl-none p-3 max-w-[85%]">
            <p className="text-sm text-gray-400 italic">Applying changes...</p>
          </div>
        </div>
        {/* AI Response with Action */}
        <div className="flex gap-3">
          <div className="size-8 rounded-full bg-emerald-500 flex-shrink-0 items-center justify-center flex">
            <TaskAlt size={18} />
          </div>
          <div className="bg-gray-700/50 rounded-lg rounded-tl-none p-3 max-w-[85%] space-y-3">
            <p className="text-sm text-gray-300">
              Done. I've increased the font weight and size for all H1 and H2
              tags. How does it look?
            </p>
            <Button className="w-full bg-emerald-500 text-white hover:bg-emerald-500/90 shadow-glow-emerald">
              <Save size={16} className="mr-2" />
              Save as New Version
            </Button>
          </div>
        </div>
      </div>
      <footer className="p-4 border-t border-gray-700 space-y-3">
        <div
          className="flex overflow-x-auto gap-2 pb-2 -mx-4 px-4"
          style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}
        >
          <Button
            variant="ghost"
            className="flex-shrink-0 text-nowrap rounded-full bg-gray-700/60 px-3 py-1.5 text-xs text-gray-300 hover:bg-indigo-500"
          >
            Make headers pop
          </Button>
          <Button
            variant="ghost"
            className="flex-shrink-0 text-nowrap rounded-full bg-gray-700/60 px-3 py-1.5 text-xs text-gray-300 hover:bg-indigo-500"
          >
            Increase contrast
          </Button>
          <Button
            variant="ghost"
            className="flex-shrink-0 text-nowrap rounded-full bg-gray-700/60 px-3 py-1.5 text-xs text-gray-300 hover:bg-indigo-500"
          >
            Convert markdown bold to HTML
          </Button>
          <Button
            variant="ghost"
            className="flex-shrink-0 text-nowrap rounded-full bg-gray-700/60 px-3 py-1.5 text-xs text-gray-300 hover:bg-indigo-500"
          >
            Improve spacing
          </Button>
        </div>
        <div className="relative">
          <Textarea
            className="w-full resize-none rounded-lg bg-gray-900/50 border-gray-700 placeholder:text-gray-500 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Describe a change, e.g., 'make the main title larger...'"
            rows={3}
          />
          <Button
            size="icon"
            className="absolute bottom-2.5 right-2.5 flex items-center justify-center size-8 rounded-md bg-indigo-500 text-white hover:bg-indigo-500/90"
          >
            <Send size={16} />
          </Button>
        </div>
      </footer>
    </aside>
  );
};

export default IterationPanel;
