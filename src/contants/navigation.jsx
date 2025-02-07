import { GoSearch } from "react-icons/go";
import { IoHome } from "react-icons/io5";
import { BiSolidMoviePlay } from "react-icons/bi";
import { BiSolidTv } from "react-icons/bi";

export const navigation = [
    {
      label: "TV Show",
      href: "tv",
      icon:<BiSolidTv/>
    },
    {
      label: "Movies",
      href: "movie",
      icon:<BiSolidMoviePlay/>
    },
  ];

  export const mobilenavigation=[
    {
        label:"Home",
        href:"/",
        icon:<IoHome/>
    },
    ...navigation,
    {
        label:"Search",
        href:"/search",
        icon:<GoSearch/>
    },

  ]