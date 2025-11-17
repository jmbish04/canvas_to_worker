import { Button } from "@/components/ui/button";
import {
  RefreshCw,
  Camera,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Monitor,
  Tablet,
  Smartphone,
} from "lucide-react";

type PreviewPanelProps = {
  isEmpty: boolean;
};

const PreviewPanel = ({ isEmpty }: PreviewPanelProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-[#111827] p-6 h-full">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex gap-2 bg-[#292839] p-1 rounded-lg">
          <Button
            size="sm"
            className="px-3 py-1 text-sm font-medium rounded-md bg-[#1d0bda] text-white"
          >
            <Monitor className="mr-2 h-4 w-4" />
            Desktop
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="px-3 py-1 text-sm font-medium rounded-md text-gray-400 hover:bg-white/10"
          >
            <Tablet className="mr-2 h-4 w-4" />
            Tablet
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="px-3 py-1 text-sm font-medium rounded-md text-gray-400 hover:bg-white/10"
          >
            <Smartphone className="mr-2 h-4 w-4" />
            Mobile
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            className="p-2 rounded-lg bg-[#292839] hover:bg-white/20 transition-colors text-white"
          >
            <RefreshCw size={16} />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="p-2 rounded-lg bg-[#292839] hover:bg-white/20 transition-colors text-white"
          >
            <Camera size={16} />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="p-2 rounded-lg bg-[#292839] hover:bg-white/20 transition-colors text-white"
          >
            <ExternalLink size={16} />
          </Button>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center bg-[#0d121c] rounded-lg border border-white/10 overflow-hidden relative">
        {isEmpty ? (
          <div className="text-center text-gray-400 p-8">
            <span className="material-symbols-outlined text-5xl">auto_awesome</span>
            <p className="mt-2 text-sm font-medium">Ready to create magic?</p>
            <p className="mt-1 text-xs text-gray-500">
              Your AI-generated UI will appear here. Click 'Render Preview' to get
              started.
            </p>
          </div>
        ) : (
          <div className="text-center text-gray-400">
            <span className="material-symbols-outlined text-5xl">
              space_dashboard
            </span>
            <p className="mt-2 text-sm font-medium">
              Write a prompt and click 'Render Preview' to begin.
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <p className="text-white text-base font-medium">Variants</p>
          <p className="text-sm text-gray-400">
            {isEmpty ? "Not yet generated" : "Variant 1 / 3"}
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 h-12">
          {isEmpty ? (
            <p className="text-sm text-gray-500">
              Render a preview to see AI-generated variants.
            </p>
          ) : (
            <>
              <Button
                size="icon"
                variant="ghost"
                className="p-2 rounded-full bg-[#292839] hover:bg-white/20 transition-colors text-white"
              >
                <ChevronLeft />
              </Button>
              <div
                className="w-20 h-12 bg-cover bg-center rounded-lg border-2 border-[#1d0bda] shadow-[0_0_15px_1px_rgba(29,11,218,0.3)]"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuArWzZHbssdrZvdx26JUiewdClz-GNcQvImj03v4MqwVXNr4BiaWClL8DCLfTXBVDPMYiwkIEW-cQaaXpuD6dVFvAYXpL6iCWbe4j8Kf6lzAHv-jXSsdtVbVn08-a6LC_555Yr68ycmm7J9jiIUA7zqX4zYgTqnS3TtXgZLsMKH53oNKyxSO5kDlrSbiGkk_Y1LgLFClmH0ejGGMXKfYXKXTa8bxbKAaZEv98h8lBnv8tWr3G6ZEIovuLuxFv64bzrw8cNLuX2aOzs')",
                }}
              ></div>
              <div
                className="w-20 h-12 bg-cover bg-center rounded-lg border-2 border-transparent opacity-50 hover:opacity-100"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAzvkFomGEqRgsIIFDkSBxQbLlMseAawI19lDTPgVaKMYsuVV4CxKzt-P15DR5l9jDakKb8GgHYe1Qu6dgG7ng5dKVD3pd5sGaCjk6-qVstn38uDsoRlFK6fawpJnUncPmkZxJ16w0kDQCDky4sA9OpQ0KTPPEyuadTeWKuMXLrOIzcegeDfmVuAL5CX0KSegqamANAANIrESMxfqcqW4iFDlR4pMc9XLAikrHHE53IdZbRZ_UF0FcT0Q8x6HOFcfe_xNCAbGUwvpk')",
                }}
              ></div>
              <div
                className="w-20 h-12 bg-cover bg-center rounded-lg border-2 border-transparent opacity-50 hover:opacity-100"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDE4Rxipe4Kvyg3wXwR9Ex7xR2-0aXPYwle3aEj7SZHeSzAz-qtEkVw03lwPur8WzNNQmjLww-ygn738RMvATfbI77vFMYjD7lLDBf-ZNPMu4N1lND_ciyyGuPBFiTRYP6RV2SnaQlWLvkCtCFNqUhduxFdZ472ffm43-caVNMCPo87q6R4iUdWSflrukbC8aU9yh9IWJuctTJNo8QZQpP7tRbE6htJc945PBNkYkPA6wDV-Rn7e95wt8qDO5eoUprfLQ_YAalXrkY')",
                }}
              ></div>
              <Button
                size="icon"
                variant="ghost"
                className="p-2 rounded-full bg-[#292839] hover:bg-white/20 transition-colors text-white"
              >
                <ChevronRight />
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewPanel;
