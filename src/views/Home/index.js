import React from 'react';
import SidebarLeft from '../../components/SidebarLeft';
import DashboardMain from '../../components/DashboardMain';


const Home = (props) => {
    return(
        <div className="inner-wrapper">
            <SidebarLeft props={props}/>
            <DashboardMain />
        </div>
    )
}

export default Home;