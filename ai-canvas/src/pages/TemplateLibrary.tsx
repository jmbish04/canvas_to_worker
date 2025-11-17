import { useState } from "react";
import TemplateLibraryHeader from "@/components/TemplateLibraryHeader";
import TemplateGrid from "@/components/TemplateGrid";
import CreateNewTemplateModal from "@/components/CreateNewTemplateModal";

const TemplateLibrary = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="p-6 lg:p-10">
        <div className="mx-auto max-w-7xl">
<TemplateLibraryHeader openModal={() => setIsModalOpen(true)} />
          <TemplateGrid />
        </div>
      </div>
{isModalOpen && (
<CreateNewTemplateModal
         isOpen={isModalOpen}
         onClose={() => setIsModalOpen(false)}
       />
)}
    </>
  );
};

export default TemplateLibrary;
