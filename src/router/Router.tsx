import { HashRouter, Routes, Route } from "react-router-dom";
import Role from "../screen/role/view";
import Operator from "../screen/operator/view";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Role />} />
        <Route path="/operator/:id" element={<Operator />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
