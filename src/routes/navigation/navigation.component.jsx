import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as PanwarLogo } from "../../assister/panwar.svg";

import "./navigation.styles.scss";
const Navigation = function () {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <div>{<PanwarLogo />}</div>
        </Link>

        <div className="nav-link-container">
          <Link className="nav-link" to={"/shop"}>
            shop
          </Link>
          <Link className="nav-link" to={"/contact"}>
            contact
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
