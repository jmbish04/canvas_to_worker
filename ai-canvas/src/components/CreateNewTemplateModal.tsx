import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type CreateNewTemplateModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CreateNewTemplateModal = ({
  isOpen,
  onClose,
}: CreateNewTemplateModalProps) => {
  const currentStep = 1;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-slate-900/80 ring-1 ring-white/10 backdrop-blur-md">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
          <div className="h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
          <div className="h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl"></div>
        </div>
        <div className="relative p-6 sm:p-8 lg:p-10">
          <div className="space-y-2">
            <h1 className="font-display text-3xl font-bold tracking-tight text-white">
              Create a New Template
            </h1>
            <p className="text-gray-400">
              Step {currentStep} of 3: Define the core template details.
            </p>
          </div>
          <div className="mt-8 space-y-6">
            <div>
              <label
                className="block text-sm font-medium text-gray-300"
                htmlFor="template-name"
              >
                Template Name
              </label>
              <div className="mt-2">
                <Input
                  className="block w-full rounded-md border-0 bg-white/5 p-3 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm"
                  id="template-name"
                  placeholder="e.g., 'Product Showcase Card'"
                  type="text"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-300"
                htmlFor="description"
              >
                Description
              </label>
              <div className="mt-2">
                <Textarea
                  className="block w-full resize-y rounded-md border-0 bg-white/5 p-3 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm"
                  id="description"
                  placeholder="A short description of what this template is for."
                  rows={3}
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-300"
                htmlFor="prompt"
              >
                Initial Prompt
              </label>
              <div className="mt-2">
                <Textarea
                  className="block w-full resize-y rounded-md border-0 bg-white/5 p-3 font-mono text-sm text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  id="prompt"
                  placeholder="Your initial structured prompt here..."
                  rows={4}
                />
              </div>
              <p className="mt-2 text-xs text-gray-500">
                This can be refined later in the editor.
              </p>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-end gap-x-4 border-t border-white/10 pt-6">
            <Button
              variant="ghost"
              className="rounded-md px-4 py-2 text-sm font-semibold text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
              type="button"
            >
              Cancel
            </Button>
            <Button
              className="rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-emerald-500/30 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
              type="button"
            >
              Next: Configure Style
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNewTemplateModal;
