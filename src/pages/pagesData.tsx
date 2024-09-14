import { routerType } from "../types/router.types";
import { Intro } from "./Intro/Intro.tsx";
import { Home } from "./Home/Home.tsx";

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
