import { Bell, Home, LogOut, PieChart, Settings, ShoppingBag, Sidebar, UserCheck, Users } from "react-feather";
import { MenuGroup, MenuItem } from "./Sidebar";
import { firebase as firebaseClient } from '../utils/firebase'
import styled from 'styled-components'
import { TopBar } from "./Topbar";

const Image = styled.img`
  height: 30px;
`;

const DivOne = styled.div`
background-color: #363740;
width: 18rem;
@media (max-width: 1024px) {
  width: 6rem;
}
`
const DivTwo = styled.div`
`
const Logo = () => {
    return <Image src="/freshconn.png" />
}

const DashLayout = ({ children }) => {
    return (
        <div className="w-screen flex">
            <DivOne>
                <MenuGroup>
                    <MenuItem href="/" className="text-2xl border-none font-semibold" src={<Logo />} children="Admin Dash" />
                    <MenuItem href="/dashboard/overview" className="text-sm sm:text-base" src={<PieChart />} children="Overview" />
                    <MenuItem href="/dashboard/orders" className="text-sm sm:text-base" src={<ShoppingBag />} children="Orders" />
                    <MenuItem href="/dashboard/farmers" className="text-sm sm:text-base" src={<UserCheck />} children="Farmers" />
                    <MenuItem href="/dashboard/markets" className="text-sm sm:text-base" src={<Home />} children="Markets" />
                    <MenuItem href="/dashboard/users" className="text-sm sm:text-base" src={<Users />} children="Customers" />
                    <MenuItem href="/dashboard/notifications" className="text-sm sm:text-base" src={<Bell />} children="Notifications" />
                    <MenuItem href="/dashboard/settings" className="text-sm sm:text-base" src={<Settings />} children="Settings" />
                    <MenuItem href="#" src={<LogOut />} className="text-sm sm:text-base">
                        <div onClick={async () => {
                            await firebaseClient.auth().signOut();
                            window.location.href = "/login";
                        }}>Logout</div>
                    </MenuItem>
                </MenuGroup>
            </DivOne>
            <DivTwo className="max-h-screen w-full overflow-auto">
                <TopBar />
                {children}
            </DivTwo>
        </div>
    );
};

export default DashLayout;