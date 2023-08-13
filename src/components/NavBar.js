import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {links.map ((links) =>
    ( <a key= {links} href= {`#${links}`} name={`#${links}`}> 
    {links}
    </a>
    ))
      /* display an <a> tag for each link here */}</nav>;
}

export default NavBar;
