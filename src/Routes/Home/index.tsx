import { Outlet } from "react-router-dom";
import Header from "../../compponents/Header";

function Home() 
{
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default Home;