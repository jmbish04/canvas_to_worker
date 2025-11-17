import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Lightbulb, Palette, PlusSquare, Sparkles } from "lucide-react";

type EditorPanelProps = {
  isEmpty: boolean;
};

const EditorPanel = ({ isEmpty }: EditorPanelProps) => {
  return (
    <div className="flex flex-col gap-6 rounded-2xl bg-[#111827] p-6 h-full">
      {isEmpty ? (
        <div className="flex flex-col gap-4">
          <Input
            className="w-full bg-transparent text-white text-3xl font-black leading-tight tracking-[-0.03em] border-none p-0 focus:ring-0"
            placeholder="Untitled Template"
            type="text"
            defaultValue="New Hero Component"
          />
          <Input
            className="w-full bg-transparent text-[#9e9cba] text-base font-normal leading-normal border-none p-0 focus:ring-0"
            placeholder="Add a description for this template..."
            type="text"
            defaultValue="A sleek, modern hero section for a new marketing campaign."
          />
        </div>
      ) : (
        <div className="flex flex-wrap justify-between gap-3 items-start">
          <div className="flex flex-col gap-2">
            <p className="text-white text-3xl font-black leading-tight tracking-[-0.03em]">
              Hero Section v1.2
            </p>
            <p className="text-emerald-400 text-xs font-medium leading-normal bg-emerald-500/20 px-2 py-1 rounded-full w-fit">
              Last rendered: Just now
            </p>
          </div>
        </div>
      )}
      <div className="flex flex-col min-h-0 flex-1">
        <label className="flex flex-col h-full">
          <p className="text-white text-base font-medium leading-normal pb-2">
            Prompt Body
          </p>
          <Textarea
            className="flex w-full flex-1 resize-none overflow-auto rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#1d0bda] border-none bg-[#292839] placeholder:text-[#9e9cba] p-4 text-base font-normal leading-normal"
            placeholder="e.g., A hero section for a SaaS product with a title, subtitle, CTA button, and a product screenshot..."
            defaultValue={
              isEmpty
                ? "Create a full-width hero section with a dark gradient background. It should have a large, bold heading in a sans-serif font, followed by a smaller paragraph of descriptive text. Include a primary call-to-action button with a vibrant accent color."
                : ""
            }
          />
        </label>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-white text-base font-medium">AI Suggestions</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <button className="flex flex-col items-center gap-2 bg-[#292839] p-3 rounded-lg hover:bg-[#1d0bda]/30 transition-colors">
            <Lightbulb className="text-white" />
            <p className="text-white text-sm font-medium leading-normal text-center">
              Refine Tone
            </p>
          </button>
          <button className="flex flex-col items-center gap-2 bg-[#292839] p-3 rounded-lg hover:bg-[#1d0bda]/30 transition-colors">
            <Palette className="text-white" />
            <p className="text-white text-sm font-medium leading-normal text-center">
              Improve Palette
            </p>
          </button>
          <button className="flex flex-col items-center gap-2 bg-[#292839] p-3 rounded-lg hover:bg-[#1d0bda]/30 transition-colors">
            <PlusSquare className="text-white" />
            <p className="text-white text-sm font-medium leading-normal text-center">
              Add Section
            </p>
          </button>
          <button className="flex flex-col items-center gap-2 bg-[#292839] p-3 rounded-lg hover:bg-[#1d0bda]/30 transition-colors">
            <Sparkles className="text-white" />
            <p className="text-white text-sm font-medium leading-normal text-center">
              Modernize
            </p>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 justify-end items-center border-t border-white/10 pt-4 mt-auto">
        <Button
          variant="outline"
          className="bg-[#292839] text-white hover:bg-white/20"
        >
          Save Template
        </Button>
        <Button className="bg-[#1d0bda] text-white hover:opacity-90">
          Render Preview
        </Button>
      </div>
    </div>
  );
};

export default EditorPanel;
