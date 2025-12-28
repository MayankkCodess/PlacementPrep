import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage.jsx";
import InterviewsPage from "./pages/InterviewsPage.jsx";
import MCQDisplay from "./pages/MCQDisplay";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/dashboard",
      element: <DashboardPage />,
    },
    {
      path: "/interviews",
      element: <InterviewsPage/>
    },
    {
      path:"/",
      element:<DashboardPage/>
    },
    {
      path:"/result",
      element:<MCQDisplay/>
    }
  ]);
  return (
    <>
    <RouterProvider router = {appRouter}/>
    </>
  );
}

export default App;
