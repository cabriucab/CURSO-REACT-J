import React from "react";

function Header(prop){

return(
<>


<header className="encabezado">

<h1 id="logo">LOGO</h1>
<p>Bienvenido {prop.nombre+ " "+ prop.apellido}</p>
<nav id="menu">

<a  href="#">link</a>
<a href="#">link</a>
<a href="#">link</a>
</nav>

</header>



</>


)


}

export default Header