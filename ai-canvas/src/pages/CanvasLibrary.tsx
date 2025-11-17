import { useState } from "react";
import CanvasLibraryHeader from "@/components/CanvasLibraryHeader";
import CanvasGrid from "@/components/CanvasGrid";
import ImageResizerModal from "@/components/ImageResizerModal";

const CanvasLibrary = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-7xl flex-1">
          <CanvasLibraryHeader />
          <main className="flex flex-col gap-8 mt-8">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                  Canvas Library
                </p>
                <p className="text-gray-400 text-base font-normal leading-normal">
                  Manage your AI-generated canvas deployments
                </p>
              </div>
            </div>
            <CanvasGrid openModal={() => setIsModalOpen(true)} />
          </main>
        </div>
      </div>
      <ImageResizerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default CanvasLibrary;
