import { Route, Routes } from "react-router-dom";
import { routerType } from "../types/router.types";
import pagesData from "./pagesData";
import { Home } from "./Home/Home";
import { Layout } from "../components/Layout/Layout";

const Router = () => {
  const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {pageRoutes}
      </Route>
    </Routes>
  );
};

export default Router;
