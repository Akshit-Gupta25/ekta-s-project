import { IconBellFilled, IconSettingsFilled , IconAnchor } from "@tabler/icons-react";
import { Avatar, Indicator, Menu } from '@mantine/core';
import Navlinks from "./Navlinks";
import { useLocation, Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
   const location = useLocation();
   return location.pathname !== "/signup" && location.pathname !== "/login" ? (
      <div className="w-full bg-blueblack1 px-6 text-bluegrey3 h-20 flex justify-between items-center shadow-md">
         <Link to="/about" className="flex gap-1 items-center text-white hover:text-bluegrey2 transition-colors duration-200 cursor-pointer">
            <IconAnchor className="h-10 w-10" stroke={3} />
            <div className="text-3xl font-semibold">JobSeek</div>
         </Link>
         {Navlinks()}
         <div className="flex gap-4 items-center">
            <ProfileMenu />
            <Menu shadow="md" width={180}>
               <Menu.Target>
                  <div className="bg-blueblack3 p-1.5 rounded-full cursor-pointer hover:bg-bluegrey1/30 transition-colors">
                     <IconSettingsFilled stroke={1.5} />
                  </div>
               </Menu.Target>
               <Menu.Dropdown>
                  <Menu.Item>Account</Menu.Item>
                  <Menu.Item>Preferences</Menu.Item>
                  <Menu.Divider />
                  <Menu.Item color="red">Logout</Menu.Item>
               </Menu.Dropdown>
            </Menu>
            <div className="bg-blueblack3 p-1.5 rounded-full">
               <Indicator color="bluegrey1" offset={5} radius="lg" processing>
                  <IconBellFilled stroke={1.5} />
               </Indicator>
            </div>
         </div>
      </div>
   ) : <></>;
}

export default Header;