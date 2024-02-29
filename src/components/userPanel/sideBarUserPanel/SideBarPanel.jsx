import SideBarMenu from "../sidebarMenu/SideBarMenu";
import UsersPhoto from "../usersPhoto/UsersPhote";
import "./sideBarPanel.css"

const SideBarPanel = () => {
    return ( 
        <div className="wrapperSideBarUser">
            <UsersPhoto/>
            <SideBarMenu/>
        </div>
     );
}
 
export default SideBarPanel;