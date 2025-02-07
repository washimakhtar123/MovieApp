import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import userIcon from "../assets/user.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { navigation } from "../contants/navigation";


const Header = () => {
  const location=useLocation();
  const removeSpace=location?.search?.slice(3)?.split("%20")?.join(" ")
  const [searchInput,setSearchInput]=useState(removeSpace);
  const navigate=useNavigate();


  const handleSubmit=(e)=>{
    e.preventDefault()
  }

  useEffect(()=>{
   if(searchInput){
    navigate(`/search?q=${searchInput}`)
   }
  },[searchInput])
  return (
    <header className=" fixed top-0 w-full h-16  bg-neutral-600 opacity-75 z-40 ">
      <div className="container mx-auto px-8 flex items-center h-full">
        <Link to={"/"}>
          <img src={logo} alt="logo" width={120} />
        </Link>
        <nav className="hidden lg:flex gap-2 ml-5">
          {navigation.map((nav, index) => {
            return (
              <div key={index}>
                <NavLink
                  key={nav.label}
                  to={nav.href}
                  className={({ isActive }) =>
                    `px-2 hover:text-neutral-100 ${
                      isActive && "text-neutral-100"
                    }`
                  }
                >
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-6">
          <form className="flex items-center gap-4" onSubmit={handleSubmit}>
            <input type="text"
            placeholder="Search Here..."
            onChange={(e)=>setSearchInput(e.target.value)}
            value={searchInput}
            className="bg-transparent px-4 py-1 outline-none border border-white  rounded-lg hidden lg:block"
            />
          <button className="text-2xl text-white">
            <GoSearch />
          </button>
            
          </form>
          
          <div className="w-10 h-10 rounded-full overflow-hidden active:scale-75 duration-100 cursor-pointer">
            <img src={userIcon}
             alt="userIcon" 
             />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
