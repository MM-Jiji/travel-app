import { Outlet } from "react-router-dom";
import NavBar from "../shared/components/navbar/NavBar";

export const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};
