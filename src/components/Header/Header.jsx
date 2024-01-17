// import menu from "../../img/menu-svgrepo-com.svg";
// import search from "../../img/search-alt-2-svgrepo-com.svg";
// import cart from "../../img/cart-shopping-fast-svgrepo-com.svg";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-[100] w-full py-5 px-2 bg-my-background flex items-center justify-between drop-shadow-header-shadow">
      {/* Header left */}
      <div className="flex items-center">
        {/* <img src={menu} alt='menu' className='w-6 h-6 object-contain cursor-pointer' /> */}
        <IconButton sx={{
          color: 'red',
        }}>
          <MenuIcon
            sx={{
              color: "red",
            }}
          />
        </IconButton>

        <h1 className="ml-2 text-sm font-bold">
          Auk <span className="text-[#9c1c71]">Dev</span>
        </h1>
        <div className="overflow-hidden ml-2 flex items-center rounded-full bg-[#f7ecec]">
          <input
            type="text"
            placeholder="Search"
            className="ml-2 outline-none p-2 font-semibold text-sm w-[200px] bg-inherit"
          />
          {/* <img src={search} alt='search' className='w-6 h-6 object-contain cursor-pointer mr-2'/> */}
          <IconButton sx={{
            color:'yellow',
          }}>
          <SearchIcon
            sx={{
              color: "gray",
            }}
          />
          </IconButton>
          
        </div>
      </div>

      {/* Header right */}
      {/* <img src={cart} alt='cart' className='w-6 h-6 object-contain cursor-pointer'/> */}
      <IconButton sx={{
        color:'green',
      }}>
      <AddShoppingCartIcon />
      </IconButton>
      
    </header>
  );
};

export default Header;
