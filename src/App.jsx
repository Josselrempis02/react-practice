import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import Joblistings from "./components/Joblistings";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <Joblistings />
      <ViewAllJobs />
    </>
  );
};

export default App;
