import React from 'react';
import SidebarLeft from '../../components/SidebarLeft';
import DashboardMain from '../../components/DashboardMain';


const Home = () => {
    return(
        <div className="inner-wrapper">
            <SidebarLeft/>
            <DashboardMain />
        </div>
    )
}

export default Home;