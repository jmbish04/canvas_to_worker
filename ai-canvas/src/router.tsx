import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import CanvasLibrary from "./pages/CanvasLibrary";
import AIPromptsDashboard from "./pages/AIPromptsDashboard";
import TemplateLibrary from "./pages/TemplateLibrary";
import TemplateEditor from "./pages/TemplateEditor";
import SettingsPage1 from "./pages/SettingsPage1";
import SettingsPage2 from "./pages/SettingsPage2";

const Help = () => <div>Help Page</div>;
const Logout = () => <div>Logout Page</div>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/dashboard", element: <CanvasLibrary /> },
      { path: "/canvas", element: <AIPromptsDashboard /> },
      { path: "/templates", element: <TemplateLibrary /> },
      { path: "/editor", element: <TemplateEditor /> },
      { path: "/settings/studio", element: <SettingsPage1 /> },
      { path: "/settings/dashboard", element: <SettingsPage2 /> },
      { path: "/help", element: <Help /> },
      { path: "/logout", element: <Logout /> },
    ],
  },
]);

export default router;
