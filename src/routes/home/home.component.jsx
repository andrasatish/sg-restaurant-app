import { Outlet } from "react-router";
import Navigation from "../../components/navigation/navigation.component";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Home;
