import AddHomeOutlinedIcon from "@mui/icons-material/AddHomeOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-[100] w-full p-3 bg-my-background flex items-center justify-between drop-shadow-header-shadow">
      {/* <IconButton>
        <div>
          <AddHomeOutlinedIcon />
          <p className="text-xs">Home</p>
        </div>
      </IconButton> */}
      <FooterIcon Icon={AddHomeOutlinedIcon} iconText='Home'/>
      <FooterIcon Icon={CategoryOutlinedIcon} iconText='Category'/>
      <FooterIcon Icon={Person2OutlinedIcon} iconText='Profile'/>
    </footer>
  );
};

export default Footer;

const FooterIcon = ({ Icon, iconText }) => (
  <IconButton
    sx={{
      padding: "4px",
      borderRadius: "5px",
      color: "red",
    }}
  >
    <div className="text-gray-700 hover:text-[#c82196] transition-all duration-300"> 
      <Icon />
      <p className="text-xs font-semibold">{iconText}</p>
    </div>
  </IconButton>
);
