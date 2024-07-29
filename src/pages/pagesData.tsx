import { routerType } from "../types/router.types";
import { Intro } from "./Intro/Intro";

const pagesData: routerType[] = [
  {
    path: "",
    element: <Intro />,
    title: "intro",
  },
];

export default pagesData;
