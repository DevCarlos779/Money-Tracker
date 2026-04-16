import { Outlet } from "react-router-dom";
import { NavContent } from "../components/header/NavContent";
import { Content, Main, NavBar } from "./DefaultLayoutStyles";

export function DefaultLayout() {
  return (
    <Content>
      <NavBar>
        <NavContent />
      </NavBar>
      <Main>
        <Outlet />
      </Main>
    </Content>
  );
}
