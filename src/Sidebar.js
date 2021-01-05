import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
      	<Avatar src="https://avatars1.githubusercontent.com/u/65829453?s=400&u=443900c54390fd77b12f82869d9d0d220a4738b0&v=4"/>
      	<div className="sidebar__headerRight">
      		<IconButton>
      			<DonutLargeIcon />
      		</IconButton>
      		<IconButton>
      			<ChatIcon />
      		</IconButton>
      		<IconButton>
      			<MoreVertIcon />
      		</IconButton>
      	</div>
      </div>
      <div className="sidebar__search">
      	<div className="sidebar__searchContainer">
      		<SearchOutlined />
      		<input 
      			placeholder="Search or start new chat" 
      			type="text" 
      		/>
      	</div>	
      </div>
      <div className="sidebar__chats">
      	<SidebarChat />
      	<SidebarChat />
      	<SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
