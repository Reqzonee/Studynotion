import React, { useEffect } from 'react'
import * as Icons from "react-icons/vsc"
import { useDispatch } from 'react-redux';
import { NavLink, matchPath, useLocation } from 'react-router-dom';

const SidebarLink = ({link, iconName}) => {
    const Icon = Icons[iconName];
    const location = useLocation();
    const dispatch = useDispatch();

    // const match = matchPath("/users/123", {
    //   path: "/users/:id",
    //   exact: true,
    //   strict: false
    // });

    useEffect(() =>{
      
    },[]);

    const matchRoute = (route)=>{
      console.log(location.pathname, " ", {path:route});
      // console.log("route ",route);
      // console.log(matchPath(location?.pathname, {path:route}));
      console.log("link ", link);
      return matchPath( {path:route}, location.pathname);
    }

    // const matchRoute = ()=>{

    // }

    

  return (
    <NavLink 
    to={link.path}
    // onClick={} homework
    className={`relative px-8 py-2 text-sm font-medium ${matchRoute(link.path) ? "bg-yellow-800":"bg-opacity-0"}`}
    >
        <span className={`absolute left-0 top-0 h-full w-[0.2rem] bg-yellow-50
        ${matchRoute(link.path) ? "opacity-100":"opacity-0"}`}>

        </span>

        <div className='flex item-center gap-x-2'>
            <Icon className="text-lg"/>
            <span>{link.name}</span>
        </div>
    </NavLink>
  )
}

export default SidebarLink
