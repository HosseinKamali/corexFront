import MainPanel from "../mainPanel/MainPanel";
import Navbar from "../navbar/Navbar";
import SideBarNews from "../sideBarNews/SaideBarNews";
import SideBarNewsUp from "../sideBarNewsUp/SideBarNewsUp";
import SideBarPanel from "../sideBarUserPanel/SideBarPanel";
import "./userPanelPage.css";

const UserPanelPage = () => {
  return (
    <div className="panelPage">
      <Navbar />
      <SideBarPanel />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "0 55px" }} >
        <div style={{display:"flex",width:"1200px",marginLeft:"175px"}}>
          <MainPanel />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <SideBarNewsUp />
            <SideBarNews />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPanelPage;
