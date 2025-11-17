import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Monitor, Tablet, Smartphone } from "lucide-react";

const Toolbar = () => {
  return (
    <header className="flex justify-between items-center gap-4 mb-6">
      <div className="flex items-center gap-4">
        <Select defaultValue="v4">
          <SelectTrigger className="w-48 bg-slate-800 border-slate-700 text-white">
            <SelectValue placeholder="Version" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="v4">Version 4 (Latest)</SelectItem>
            <SelectItem value="v3">Version 3</SelectItem>
            <SelectItem value="v2">Version 2</SelectItem>
            <SelectItem value="v1">Version 1</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex gap-1 p-1 bg-slate-800 rounded-lg">
          <Button size="icon" className="p-1.5 rounded-md bg-indigo-500 text-white">
            <Monitor size={16} />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="p-1.5 rounded-md text-gray-300 hover:bg-indigo-500/50"
          >
            <Tablet size={16} />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="p-1.5 rounded-md text-gray-300 hover:bg-indigo-500/50"
          >
            <Smartphone size={16} />
          </Button>
        </div>
      </div>
      <div className="flex flex-1 gap-3 justify-end">
        <Button
          variant="outline"
          className="bg-slate-800 text-white hover:bg-slate-700"
        >
          Run Tests
        </Button>
        <Button className="bg-indigo-500 text-white hover:bg-indigo-500/90">
          Deploy
        </Button>
      </div>
    </header>
  );
};

export default Toolbar;
