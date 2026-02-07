import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage.jsx";
import InterviewsPage from "./pages/InterviewsPage.jsx";
import MCQDisplay from "./pages/MCQDisplay";
import Login from "./components/auth/Login.jsx";
import Signup from "./components/auth/Signup.jsx";
import DSAProblems from "./pages/DSAProblems.jsx";
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
      path:"/login",
      element:<Login/>
    },
    {
       path:"/signup",
      element:<Signup/>
    },{
      path:"/dsaproblems",
      element:<DSAProblems/>
    }
  ]);
  return (
    <>
    <RouterProvider router = {appRouter}/>
    </>
  );
}

export default App;
