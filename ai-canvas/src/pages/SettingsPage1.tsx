import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { X, PlusCircle, Save } from "lucide-react";
import { Link } from "react-router-dom";

const SettingsPage1 = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 flex flex-1 justify-center py-10 sm:py-16">
      <div className="layout-content-container flex flex-col w-full max-w-3xl flex-1 space-y-12">
        <header>
          <div className="flex flex-wrap gap-2 mb-4">
            <Link
              className="text-text-secondary-dark text-base font-medium leading-normal hover:text-primary"
              to="#"
            >
              Studio
            </Link>
            <span className="text-text-secondary-dark text-base font-medium leading-normal">
              /
            </span>
            <span className="text-text-main-dark text-base font-medium leading-normal">
              Settings
            </span>
          </div>
          <div className="flex flex-wrap justify-between gap-4">
            <div className="flex min-w-72 flex-col gap-2">
              <h1 className="text-white text-4xl lg:text-5xl font-extrabold font-heading tracking-tighter">
                Settings
              </h1>
              <p className="text-text-secondary-dark text-base lg:text-lg font-normal leading-normal">
                Manage settings for the Template Builder &amp; Preview Studio.
              </p>
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-8">
          {/* Card 1: Template Management */}
          <div className="bg-card-dark rounded-2xl p-6 md:p-8 border border-border-dark shadow-lg shadow-black/10">
            <h2 className="text-white text-xl md:text-2xl font-bold font-heading tracking-tight">
              Template Categories
            </h2>
            <p className="text-text-secondary-dark text-base mt-2 mb-6">
              Manage categories to organize and filter your UI templates.
            </p>
            <div className="flex flex-wrap gap-3 items-center">
              <div className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-4">
                <p className="text-primary text-sm font-medium">Landing</p>
                <button className="material-symbols-outlined text-primary/70 hover:text-primary text-base">
                  <X size={16} />
                </button>
              </div>
              <div className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-4">
                <p className="text-primary text-sm font-medium">Docs</p>
                <button className="material-symbols-outlined text-primary/70 hover:text-primary text-base">
                  <X size={16} />
                </button>
              </div>
              <div className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-4">
                <p className="text-primary text-sm font-medium">
                  Product Page
                </p>
                <button className="material-symbols-outlined text-primary/70 hover:text-primary text-base">
                  <X size={16} />
                </button>
              </div>
              <div className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-4">
                <p className="text-primary text-sm font-medium">About Us</p>
                <button className="material-symbols-outlined text-primary/70 hover:text-primary text-base">
                  <X size={16} />
                </button>
              </div>
              <div className="relative flex items-center">
                <Input
                  className="h-9 w-40 rounded-full border-border-dark bg-transparent pl-4 pr-10 text-sm focus:border-primary focus:ring-primary"
                  placeholder="Add new category..."
                  type="text"
                />
                <button className="material-symbols-outlined absolute right-2 text-text-secondary-dark hover:text-primary">
                  <PlusCircle size={16} />
                </button>
              </div>
            </div>
          </div>
          {/* Card 2: Preview Configuration */}
          <div className="bg-card-dark rounded-2xl p-6 md:p-8 border border-border-dark shadow-lg shadow-black/10">
            <h2 className="text-white text-xl md:text-2xl font-bold font-heading tracking-tight">
              Preview Defaults
            </h2>
            <p className="text-text-secondary-dark text-base mt-2 mb-6">
              Select a default data source to use when previewing your
              templates for consistency.
            </p>
            <div className="max-w-sm">
              <label
                className="block text-sm font-medium text-text-main-dark mb-2"
                htmlFor="preview-reference"
              >
                Default Preview Reference
              </label>
              <div className="relative">
                <Select>
                  <SelectTrigger className="w-full appearance-none rounded-lg border-border-dark bg-background-dark py-2.5 pl-4 pr-10 text-base focus:border-primary focus:ring-primary">
                    <SelectValue placeholder="Colby Consultants (Demo)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="colby">
                      Colby Consultants (Demo)
                    </SelectItem>
                    <SelectItem value="aperture">
                      Aperture Science Inc.
                    </SelectItem>
                    <SelectItem value="stark">Stark Industries</SelectItem>
                    <SelectItem value="wayne">Wayne Enterprises</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          {/* Card 3: AI Assistant */}
          <div className="bg-card-dark rounded-2xl p-6 md:p-8 border border-border-dark shadow-lg shadow-black/10 ring-1 ring-primary/30 shadow-glow-primary">
            <h2 className="text-white text-xl md:text-2xl font-bold font-heading tracking-tight">
              AI Assistant
            </h2>
            <p className="text-text-secondary-dark text-base mt-2 mb-6">
              Let the AI analyze new canvases to auto-suggest the most
              compatible templates.
            </p>
            <div className="flex items-center justify-between">
              <label
                className="text-base font-medium text-text-main-dark"
                htmlFor="ai-analysis"
              >
                Automatic AI Analysis on New Canvases
              </label>
              <Switch id="ai-analysis" defaultChecked />
            </div>
          </div>
          {/* Card 4: Deployment Integrations */}
          <div className="bg-card-dark rounded-2xl p-6 md:p-8 border border-border-dark shadow-lg shadow-black/10">
            <h2 className="text-white text-xl md:text-2xl font-bold font-heading tracking-tight">
              Auto-Deployment
            </h2>
            <p className="text-text-secondary-dark text-base mt-2 mb-6">
              Configure options to automatically deploy accepted template
              previews to your desired endpoint.
            </p>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <label
                    className="text-base font-medium text-text-main-dark"
                    htmlFor="deploy-jules"
                  >
                    Auto-deploy to Jules
                  </label>
                  <span className="text-sm text-text-secondary-dark">
                    Primary deployment target
                  </span>
                </div>
                <Switch id="deploy-jules" />
              </div>
              <hr className="border-border-dark" />
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <label
                    className="text-base font-medium text-text-main-dark"
                    htmlFor="deploy-api"
                  >
                    Auto-deploy to Core API
                  </label>
                  <span className="text-sm text-text-secondary-dark">
                    Alternative endpoint for custom integrations
                  </span>
                </div>
                <Switch id="deploy-api" defaultChecked />
              </div>
            </div>
          </div>
        </div>
        {/* Save Button */}
        <div className="pt-6 pb-2 sticky bottom-0 bg-background-dark/80 backdrop-blur-sm">
          <Button
            className="w-full md:w-auto md:float-right flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3 text-base font-bold text-white shadow-lg shadow-secondary/20 transition hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background-dark disabled:opacity-50 disabled:cursor-not-allowed"
            disabled
          >
            <Save size={16} />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage1;
