import { templates } from "@/data/templates";
import TemplateCard from "./TemplateCard";

const TemplateGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {templates.map((template) => (
        <TemplateCard key={template.title} {...template} />
      ))}
    </div>
  );
};

export default TemplateGrid;
