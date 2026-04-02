import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function MainLayout() {
    return (
        <div className="main">
            <Navbar />
            <main style={{minHeight:"100vh", padding:"0 4vw"}}>
                <div className="empty-side"/>
                <Outlet />
                <div className="empty-side"/>
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout;