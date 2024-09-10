import { routerType } from "../types/router.types";
import { Intro } from "./Intro/Intro";
import { Home } from "./Home/Home";

const pagesData: routerType[] = [
  {
    path: "intro",
    element: <Intro />,
    title: "intro",
  },
  {
    path: "",
    element: <Home />,
    title: "Home",
  },
];

export default pagesData;
