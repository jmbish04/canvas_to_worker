import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Link as LinkIcon, Copy, ExternalLink } from "lucide-react";

type ImageResizerModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ImageResizerModal = ({ isOpen, onClose }: ImageResizerModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-5xl rounded-xl bg-[#1a1d2c] shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[90vh] p-0 border-none">
        {/* Close Button */}
        <Button
          size="icon"
          variant="ghost"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white transition-colors hover:bg-black/40"
        >
          <X size={20} />
        </Button>
        {/* Left Column: Preview Pane */}
        <div className="w-full md:w-2/3 bg-[#101322] p-4 md:p-6">
          <div
            className="w-full h-full aspect-video md:aspect-auto bg-center bg-no-repeat bg-cover rounded-lg"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNbENGgRLpgScpyCYIkASDvGBOG7J8v6hB5r857x_kz0kxR0kq9pxQDfIlSmWpNJ4zD0HKL7E9-g9DBWxe7VhQ29w2X6HLnRLZbquP1998P56kmu8splCNePaFfstEeUAaFKMVEpFI5jxxd8E2dbi0OTsQtULVYrs8h7QWpA4uglC41_GnSYcgOPxqaQVo3O-eElb_DcucMIMd10ORQg6e_oV1JBL244ONtMt2F63d8C3swrenS9ZHgkmIYc9wLqda9j2Dbyh5p0o')",
            }}
          ></div>
        </div>
        {/* Right Column: Information Sidebar */}
        <div className="w-full md:w-1/3 bg-[#202434] p-6 flex flex-col space-y-6 overflow-y-auto">
          <div className="flex flex-wrap justify-between gap-3">
            <p className="text-white text-3xl font-bold leading-tight tracking-[-0.03em]">
              Image Resizer API
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-4 bg-[#282b39] px-3 py-2.5 rounded-lg justify-between">
              <div className="flex items-center gap-3">
                <div className="text-slate-400 flex items-center justify-center shrink-0">
                  <LinkIcon />
                </div>
                <p className="text-white text-sm font-medium leading-normal flex-1 truncate">
                  https://image-resizer.workers.dev
                </p>
              </div>
              <button className="shrink-0 group">
                <div className="text-slate-400 flex size-7 items-center justify-center transition-colors group-hover:text-primary">
                  <Copy size={20} />
                </div>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-[30%_1fr] gap-x-4">
            <div className="col-span-2 grid grid-cols-subgrid border-t border-slate-200/10 py-4">
              <p className="text-[#9da1b9] text-sm font-normal leading-normal">
                Version ID
              </p>
              <p className="text-white text-sm font-medium leading-normal truncate">
                v1.2.3-a9b4cde
              </p>
            </div>
            <div className="col-span-2 grid grid-cols-subgrid border-t border-slate-200/10 py-4">
              <p className="text-[#9da1b9] text-sm font-normal leading-normal">
                Created
              </p>
              <p className="text-white text-sm font-medium leading-normal">
                Jan 15, 2024
              </p>
            </div>
            <div className="col-span-2 grid grid-cols-subgrid border-t border-b border-slate-200/10 py-4">
              <p className="text-[#9da1b9] text-sm font-normal leading-normal">
                Last Updated
              </p>
              <p className="text-white text-sm font-medium leading-normal">
                Mar 02, 2024
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-base font-semibold leading-tight tracking-[-0.015em]">
              Configurations / Bindings
            </h3>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                <span className="text-primary text-xs font-bold uppercase">
                  KV
                </span>
                <span className="text-primary/80 dark:text-primary/90 text-sm font-medium">
                  MY_ASSETS
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                <span className="text-primary text-xs font-bold uppercase">
                  D1
                </span>
                <span className="text-primary/80 dark:text-primary/90 text-sm font-medium">
                  production_db
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                <span className="text-primary text-xs font-bold uppercase">
                  DO
                </span>
                <span className="text-primary/80 dark:text-primary/90 text-sm font-medium">
                  ChatRoom
                </span>
              </div>
            </div>
          </div>
          <div className="pt-4 mt-auto">
            <Button className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 text-base font-semibold text-white transition-opacity hover:opacity-90">
              <span>Open Worker</span>
              <ExternalLink size={20} />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageResizerModal;
