import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router';
import '../../assets/styles/theme.scss';
import '../../assets/styles/skins/default.scss';
import '../../assets/styles/theme-custom.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

const SidebarLeft = () => {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const [headerActive, setHeaderActive] = useState(-1);
    const onToggleSidebar = () => {
       setToggleSidebar(!toggleSidebar)
    }
    const activeHeader = (path) => {
        let active;
        if (path.includes('/')) active = 0;
        if (path.includes('/employee-list')) active = 1;
        setHeaderActive(active);
      }
      useEffect(() => {
        activeHeader(window.location.pathname);
        
      }, [])
    return(
        <aside id="sidebar-left" className={`sidebar-left ${toggleSidebar ? 'sidebar-left-collapsed' : ''}`}>
				
					<div className="sidebar-header">
						<div className="sidebar-title">
							Navigation
						</div>
						<div className="sidebar-toggle d-xs-none" onClick={() => onToggleSidebar()} data-toggle-class="sidebar-left-collapsed" data-target="html" data-fire-event="sidebar-left-toggle">
							<FontAwesomeIcon icon={solid('bars')} className="icon" aria-label="Toggle sidebar" />
						</div>
					</div>
				
					<div className="nano">
						<div className="nano-content">
							<nav id="menu" className="nav-main" role="navigation">
								<ul className="nav nav-main">
									<li className={headerActive == 0 ? "nav-active" : ""}>
										<a href="/">
                                            <FontAwesomeIcon className="icon" icon={solid("home")} aria-hidden="true" />
											<span>Dashboard</span>
										</a>
									</li>
									<li className={headerActive == 0 ? '' : "nav-active"}>
										<a href="/employee-list">
                                            <FontAwesomeIcon className="icon" icon={solid("users")}  aria-hidden="true" />
											<span>Employee List</span>
										</a>
									</li>
									
								</ul>
							</nav>
				
							<hr className="separator" />
				
							<div className="sidebar-widget widget-tasks">
								<div className="widget-header">
									<h6>Projects</h6>
									<div className="widget-toggle">+</div>
								</div>
								<div className="widget-content">
									<ul className="list-unstyled m-none">
										<li><a href="#">JSOFT HTML5 Template</a></li>
										<li><a href="#">Tucson Template</a></li>
										<li><a href="#">JSOFT Admin</a></li>
									</ul>
								</div>
							</div>
				
							<hr className="separator" />
				
							<div className="sidebar-widget widget-stats">
								<div className="widget-header">
									<h6>Company Stats</h6>
									<div className="widget-toggle">+</div>
								</div>
								<div className="widget-content">
									<ul>
										<li>
											<span className="stats-title">Stat 1</span>
											<span className="stats-complete">85%</span>
											<div className="progress">
												<div className="progress-bar progress-bar-primary progress-without-number" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: '85%'}}>
													<span className="sr-only">85% Complete</span>
												</div>
											</div>
										</li>
										<li>
											<span className="stats-title">Stat 2</span>
											<span className="stats-complete">70%</span>
											<div className="progress">
												<div className="progress-bar progress-bar-primary progress-without-number" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}>
													<span className="sr-only">70% Complete</span>
												</div>
											</div>
										</li>
										<li>
											<span className="stats-title">Stat 3</span>
											<span className="stats-complete">2%</span>
											<div className="progress">
												<div className="progress-bar progress-bar-primary progress-without-number" role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="100" style={{width: '2%'}} >
													<span className="sr-only">2% Complete</span>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
				
					</div>
				
				</aside>
    )
}

export default SidebarLeft;