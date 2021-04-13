import React, { Component } from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import EmailIcon from '@material-ui/icons/Email';
import AddIcon from '@material-ui/icons/Add';
import SendIcon from '@material-ui/icons/Send';
import HistoryIcon from '@material-ui/icons/History';
import DashboardIcon from '@material-ui/icons/Dashboard';



const SidebarContainer = styled.div`
        height: 100vh;
        width: 270px;
        background-color: #252529;
        color: #fff;
        display: flex;
        flex-direction: column;
        font-family: "Roboto", sans-serif;
`;
const SidebarMenu = styled.ul`
        display: flex;
        align-items: left;
        flex-direction: column;
        list-style: none;
        width: 100%;
        padding-left: 0px;
`;

const MenuLogo = styled.div`
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 16px;
        font-size: 18px;
        line-height: 1.5;
        font-weight: 600;
        height: 45px;
        color: #fff;
        margin: 0px 30px 30px 30px;
        padding-bottom: 20px;
        border-bottom: 1px solid #2e2e33;
`;
const SidebarMenuItem = styled.li`
        display: flex;
        height: 40px;
        width: 100%;
        align-items: center;
        padding-left: 30px;
        &:hover {
        background: rgba(255, 255, 255, 0.05);
        box-shadow: inset 3px 0 0 0 #ffffff;
        cursor: pointer;
}
`;
const Icon = styled.svg`
        width: 20px;
        height: 20px;
`;


const SidebarMenuItemLabel = styled.p`
        font-family: "Open Sans", sans-serif;
        color: #fff;
        font-size: 14px;
        font-weight: 600;
        line-height: 1.3;
        text-align: left;
        padding: 12px 0px;
        margin-left: 20px;
        color: #ffffff;
`;


const MenuSignOut = styled.div`
        border-top: 1px solid #2e2e33;
        font-size: 14px;
        line-height: 1.5;
        font-weight: 500;
        height: 45px;
        color: #fff;
        margin: 200px 30px 60px 30px;
        padding: 20px 0px 0px 30px;
`;

class Sidebar extends Component {
    render() {
        return (
            <SidebarContainer>
                <SidebarMenu>
                    <MenuLogo>
                        DotCom Zambia
                   </MenuLogo>
                    <SidebarMenuItem>

                        <Icon viewBox="0 0 20 20">
                           <DashboardIcon/>
                        </Icon>
                        <SidebarMenuItemLabel>Dashboard</SidebarMenuItemLabel>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <Icon viewBox="0 0 20 20">
                            <AddIcon/>
                            <hr />
                        </Icon>
                        <SidebarMenuItemLabel>
                            <Link to="/add_email"><button>Add Email Account</button></Link>
                        </SidebarMenuItemLabel>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                        <Icon viewBox="0 0 20 19">
                           <SendIcon/>
                        </Icon>

                        <SidebarMenuItemLabel>
                           <Link to='/send_an_email'><button>Send an Email</button></Link>
                        </SidebarMenuItemLabel>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <Icon viewBox="0 0 20 20">
                          <HistoryIcon/>
                        </Icon>
                        <SidebarMenuItemLabel>			
                            	<Link to='/outbox'><button>Outbox Emails</button></Link>
                        </SidebarMenuItemLabel>
                    </SidebarMenuItem>
                    <MenuSignOut><button>Log out</button></MenuSignOut>

                </SidebarMenu>
            </SidebarContainer>
        );
    }
}
export default Sidebar;