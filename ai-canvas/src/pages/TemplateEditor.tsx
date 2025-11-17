import { useState } from "react";
import EditorPanel from "@/components/EditorPanel";
import PreviewPanel from "@/components/PreviewPanel";

const TemplateEditor = () => {
  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 overflow-y-auto h-screen">
      <EditorPanel isEmpty={isEmpty} />
      <PreviewPanel isEmpty={isEmpty} />
    </div>
  );
};

export default TemplateEditor;
