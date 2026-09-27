import { NavLink,Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      
 <nav>
   <NavLink
  to="/"
  className={({ isActive }) => isActive ? "active" : ""}
>
  Home
</NavLink>
{" |"}
 <NavLink
  to="/jobs"
  className={({ isActive }) => isActive ? "active" : ""}
>
  Jobs
</NavLink>
  {" | "}
  <NavLink to="/about"
  className={({isActive}) =>isActive ? "active" :""}>About</NavLink>
  {" | "}
  <NavLink to="/login"className= {({isActive}) =>isActive ?"active" :""}>Login</NavLink>
</nav>
    

      <main>
        <Outlet />
      </main>
    </>)
}

export default Layout;