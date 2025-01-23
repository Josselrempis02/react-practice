import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//
// import Hero from "./components/Hero";
// import HomeCards from "./components/HomeCards";
// import Joblistings from "./components/Joblistings";
// import ViewAllJobs from "./components/ViewAllJobs";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
