import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Settings, Bell } from "lucide-react";
import { Link } from "react-router-dom";

const CanvasLibraryHeader = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-4 py-3">
      <div className="flex items-center gap-4 text-white">
        <div className="size-6 text-primary">
          <svg
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          Canvas Control
        </h2>
      </div>
      <div className="flex flex-1 justify-end items-center gap-4">
        <div className="hidden md:flex relative flex-1 max-w-sm">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <Input
            className="w-full rounded-xl border-none bg-white/5 pl-11 pr-4 py-2.5 text-base text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary"
            placeholder="Search canvases..."
            type="text"
          />
        </div>
        <Button className="bg-primary text-white text-sm font-bold gap-2">
          <Plus size={16} />
          <span className="truncate hidden sm:inline">New Canvas</span>
        </Button>
        <div className="flex gap-2">
          <Button
            size="icon"
            variant="ghost"
            className="bg-white/5 text-white hover:bg-white/10"
          >
            <Settings size={20} />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="bg-white/5 text-white hover:bg-white/10"
          >
            <Bell size={20} />
          </Button>
        </div>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCDggXZPgpbBiFVQZNNWzXJjklhswMzMjKQN3lgm7b59hW-5R55tyb_34NmpDFrioT1dcDNot5lbEXjiIufS1DeGpPSRF1D9PPOPJ6A-m-NJJWG8lXB8SF-ldZbZIToIFuZvOjJJO0CSCun4czvACWmw1BPqzGmCkshWk8c4aoOu_EOExKJxxSTgQwJDREHmJk4XLumv2qkE1NB-Oi4g9MGX5kdSny2kVm96ht58yt0Ntu4uEl3Zc8SSY5h4r9qTCiLB6mAF4n_ZZM')",
          }}
        ></div>
      </div>
    </header>
  );
};

export default CanvasLibraryHeader;
