import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { DarkMode, Delete } from "lucide-react";
import { Link } from "react-router-dom";

const SettingsPage2 = () => {
  return (
    <main className="flex-1 p-6 lg:p-10">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-wrap justify-between gap-3 mb-10">
          <div className="flex min-w-72 flex-col gap-2">
            <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
              Settings
            </p>
            <p className="text-gray-500 dark:text-[#9da1b9] text-base font-normal leading-normal">
              Manage your dashboard and integration settings.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          {/* Appearance Card */}
          <section>
            <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4">
              Appearance
            </h2>
            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-4">
              <div className="flex items-center justify-between gap-4 min-h-14">
                <div className="flex items-center gap-4">
                  <div className="text-gray-500 dark:text-white flex items-center justify-center rounded-lg bg-gray-100 dark:bg-white/10 shrink-0 size-10">
                    <DarkMode />
                  </div>
                  <p className="text-gray-800 dark:text-white text-base font-medium leading-normal flex-1 truncate">
                    Theme
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>Light</span>
                  <Switch defaultChecked />
                  <span>Dark</span>
                </div>
              </div>
            </div>
          </section>
          {/* Environment Variables Card */}
          <section>
            <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4">
              Environment Variables
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
              These variables are available to all your workers and functions.
            </p>
            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl">
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        API_KEY
                      </p>
                      <p className="text-sm text-gray-400 dark:text-gray-500 font-mono">
                        ••••••••••••••••••••••••
                      </p>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="flex items-center justify-center size-9 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-red-500 transition-colors"
                    >
                      <Delete size={20} />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        DATABASE_URL
                      </p>
                      <p className="text-sm text-gray-400 dark:text-gray-500 font-mono">
                        ••••••••••••••••••••••••
                      </p>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="flex items-center justify-center size-9 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-red-500 transition-colors"
                    >
                      <Delete size={20} />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 dark:border-white/10 p-4 flex justify-end">
                <Button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors">
                  Add Variable
                </Button>
              </div>
            </div>
          </section>
          {/* Linked Accounts Card */}
          <section>
            <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4">
              Linked Accounts
            </h2>
            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-4 divide-y divide-gray-200 dark:divide-white/10">
              <div className="flex items-center justify-between gap-4 py-3">
                <div className="flex items-center gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCKnLP-md7rL86wwa3XXDmf9iLxuW1yW9rOPHqZrMdhHTbIi8UtkJtlUm-1qkmu6MQ42gJHiY1oTgkrSRwFCT2N1I6CaO3lfCZmO8QcRuZRGSPlKofgUWMqO9JN8wW1W1NvTz4KRTWX8B1L-v5o2DxiYReFaR-e9cBbGZu-OJTX4OhCqcty8GXxuVAGGPs86ww9Yh427GVkwL9qpqIe1mHtG2ZkOYcuj5FAXKu_NUyC1xSWUbyE3UpcSVs1E222kbF-tMHCGJ-2Vdg')",
                    }}
                  ></div>
                  <p className="text-gray-800 dark:text-white text-base font-medium leading-normal flex-1 truncate">
                    GitHub
                  </p>
                </div>
                <Button
                  variant="destructive"
                  className="px-4 py-2 bg-red-500/10 text-red-500 text-sm font-medium rounded-lg hover:bg-red-500/20 transition-colors"
                >
                  Disconnect
                </Button>
              </div>
              <div className="flex items-center justify-between gap-4 py-3">
                <div className="flex items-center gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB52Jt6lf6-OmPIJmqP479ozzQurL_mgKCQW15PrxpoZ-f7B5YClg_gvadbmOzZwH7-dU-XRhkA3DrNd0uuVl5alzqIlLvjuSk-KpjaonztC-Vqd3Ey0GZxdBg9dAC-aEosFE4w-mAS9kBaWRS25dS86vMqzkdusvpiHZJ7le5m7yZqjP5L-SvTBPnv2jal_LiXdLRoFNaS3BPv9CV06PxWcMS3pknUtTz4VCqoIWycHU9Q2Kk7omLsoCn5IN44pEIu71HSw73bWdk')",
                    }}
                  ></div>
                  <p className="text-gray-800 dark:text-white text-base font-medium leading-normal flex-1 truncate">
                    Jules
                  </p>
                </div>
                <Button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors">
                  Connect
                </Button>
              </div>
              <div className="flex items-center justify-between gap-4 py-3">
                <div className="flex items-center gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDETn8rGUI2WE7BJME9MkfTAMtUL69tWSw3q5EFw26mCynan7h_UUE7SJOfLFO5Dpv_uhgRVbf4c0FXgUfMR4Y8iYrcFSPBR6vWbeuKlbN_80aIgDaL8qIWZvZwhTeuM9vMpPHhfffe-hcdnNH2PJZRfJYxPi77aWI1NU76p2n3QFyorrLUh6iAnv-YfyiHbsCTJ9tz-uPaI1FUnqqPm6rnBfwAphmDpetJFcyxmIZYMpZDKbI8ZOBj26EuNrjSfk3VXlQZCwBap90')",
                    }}
                  ></div>
                  <p className="text-gray-800 dark:text-white text-base font-medium leading-normal flex-1 truncate">
                    Cloudflare
                  </p>
                </div>
                <Button
                  variant="destructive"
                  className="px-4 py-2 bg-red-500/10 text-red-500 text-sm font-medium rounded-lg hover:bg-red-500/20 transition-colors"
                >
                  Disconnect
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default SettingsPage2;
