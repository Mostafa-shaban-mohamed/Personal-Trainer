import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Schedule } from "./components/Schedule";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/schedule',
    element: <Schedule />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;
