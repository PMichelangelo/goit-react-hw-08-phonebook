import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "components/NavBar/NavBar";

const SharedLayout = () => {
  return (
    <>
      <NavBar/>
      <Suspense>
        <Outlet/>
    </Suspense>
    </>
  )
}

export default SharedLayout
