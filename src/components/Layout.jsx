import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { usersAction } from "../store/usersSlice";
import { Outlet } from "react-router-dom";
import { SidePanel } from "./sidePanel/SidePanel";
import "./style.scss";

export const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersAction());
  }, []);

  return (
    <div className="app">
      <SidePanel />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
