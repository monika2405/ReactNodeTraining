import React from 'react';
import '../../assets/styles/theme.scss';
import '../../assets/styles/skins/default.scss';
import '../../assets/styles/theme-custom.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Badge, Dropdown } from 'react-bootstrap';

const Header = () => {
	
    return (
        <header className="header">
				<div className="logo-container">
					<a href="/" className="logo">
						<img src={require('../../assets/images/logo.png')} height="35" alt="JSOFT Admin" />
					</a>
					<div className="d-none d-s-block toggle-sidebar-left" data-toggle-class="sidebar-left-opened" data-target="html" data-fire-event="sidebar-left-opened">
						<FontAwesomeIcon className="icon" icon={solid('bars')} aria-label="Toggle sidebar"/>
					</div>
				</div>
			
				<div className="header-right">
			
					<form action="pages-search-results.html" className="search nav-form">
						<div className="input-group input-search">
							<input type="text" className="form-control" name="q" id="q" placeholder="Search..." />
							<span className="input-group-btn">
								<button className="btn btn-default" type="submit"><FontAwesomeIcon className="icon" icon={solid('magnifying-glass')} /></button>
							</span>
						</div>
					</form>
			
					<span className="separator"></span>
			
					<ul className="notifications">
						<li>
							<Dropdown>
								<Dropdown.Toggle className='notification-icon'>
									<FontAwesomeIcon className="icon" icon={solid('bars-progress')} />
									<Badge className="badge bg-danger">3</Badge>
								</Dropdown.Toggle>
								<Dropdown.Menu className='notification-menu large'>
									<Dropdown.Item>
									<div className="notification-title">
									<span className="pull-right label label-default">3</span>
									Tasks
								</div>
			
								<div className="content">
									<ul>
										<li>
											<p className="clearfix mb-xs">
												<span className="message pull-left">Generating Sales Report</span>
												<span className="message pull-right text-dark">60%</span>
											</p>
											<div className="progress progress-xs light">
												<div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}></div>
											</div>
										</li>
			
										<li>
											<p className="clearfix mb-xs">
												<span className="message pull-left">Importing Contacts</span>
												<span className="message pull-right text-dark">98%</span>
											</p>
											<div className="progress progress-xs light">
												<div className="progress-bar" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100" style={{width: '98%'}}></div>
											</div>
										</li>
			
										<li>
											<p className="clearfix mb-xs">
												<span className="message pull-left">Uploading something big</span>
												<span className="message pull-right text-dark">33%</span>
											</p>
											<div className="progress progress-xs light mb-xs">
												<div className="progress-bar" role="progressbar" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100" style={{width: '33%'}}></div>
											</div>
										</li>
									</ul>
								</div>
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
							
							
						
						</li>
						<li>
							<Dropdown>
								<Dropdown.Toggle className="notification-icon">
									<FontAwesomeIcon className="icon" icon={solid('envelope')} />
									<Badge className="badge bg-danger">4</Badge>
								</Dropdown.Toggle>
								<Dropdown.Menu className="notification-menu">
									<Dropdown.Item>
										<div className="notification-title">
											<span className="pull-right label label-default">230</span>
											Messages
										</div>
				
										<div className="content">
											<ul>
												<li>
													<a href="#" className="clearfix">
														<figure className="image">
															<img src={require('../../assets/images/sample-user.jpg')} alt="Joseph Doe Junior" className="img-circle" />
														</figure>
														<span className="title">Joseph Doe</span>
														<span className="message">Lorem ipsum dolor sit.</span>
													</a>
												</li>
												<li>
													<a href="#" className="clearfix">
														<figure className="image">
															<img src={require("../../assets/images/sample-user.jpg")} alt="Joseph Junior" className="img-circle" />
														</figure>
														<span className="title">Joseph Junior</span>
														<span className="message truncate">Truncated message. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet lacinia orci. Proin vestibulum eget risus non luctus. Nunc cursus lacinia lacinia. Nulla molestie malesuada est ac tincidunt. Quisque eget convallis diam, nec venenatis risus. Vestibulum blandit faucibus est et malesuada. Sed interdum cursus dui nec venenatis. Pellentesque non nisi lobortis, rutrum eros ut, convallis nisi. Sed tellus turpis, dignissim sit amet tristique quis, pretium id est. Sed aliquam diam diam, sit amet faucibus tellus ultricies eu. Aliquam lacinia nibh a metus bibendum, eu commodo eros commodo. Sed commodo molestie elit, a molestie lacus porttitor id. Donec facilisis varius sapien, ac fringilla velit porttitor et. Nam tincidunt gravida dui, sed pharetra odio pharetra nec. Duis consectetur venenatis pharetra. Vestibulum egestas nisi quis elementum elementum.</span>
													</a>
												</li>
												<li>
													<a href="#" className="clearfix">
														<figure className="image">
															<img src={require("../../assets/images/sample-user.jpg")} alt="Joe Junior" className="img-circle" />
														</figure>
														<span className="title">Joe Junior</span>
														<span className="message">Lorem ipsum dolor sit.</span>
													</a>
												</li>
												<li>
													<a href="#" className="clearfix">
														<figure className="image">
															<img src={require("../../assets/images/sample-user.jpg")} alt="Joseph Junior" className="img-circle" />
														</figure>
														<span className="title">Joseph Junior</span>
														<span className="message truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet lacinia orci. Proin vestibulum eget risus non luctus. Nunc cursus lacinia lacinia. Nulla molestie malesuada est ac tincidunt. Quisque eget convallis diam.</span>
													</a>
												</li>
											</ul>
					
											<hr />
					
											<div className="text-right">
												<a href="#" className="view-more">View All</a>
											</div>
										</div>
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
							
						</li>
						<li>
							<Dropdown>
								<Dropdown.Toggle className="notification-icon">
									<FontAwesomeIcon className="icon" icon={solid('bell')} />
									<Badge className="badge bg-danger">3</Badge>
								</Dropdown.Toggle>
								<Dropdown.Menu className="notification-menu">
									<Dropdown.Item>
										<div className="notification-title">
											<span className="pull-right label label-default">3</span>
											Alerts
										</div>
				
										<div className="content">
											<ul>
												<li>
													<a href="#" className="clearfix">
														<div className="image bg-danger ">
														<FontAwesomeIcon  icon={solid('thumbs-down')} className='icon' />
														</div>
														<span className="title">Server is Down!</span>
														<span className="message">Just now</span>
													</a>
												</li>
												<li>
													<a href="#" className="clearfix">
														<div className="image bg-warning">
														<FontAwesomeIcon icon={solid('lock')} className=' icon' />
														</div>
														<span className="title">User Locked</span>
														<span className="message">15 minutes ago</span>
													</a>
												</li>
												<li>
													<a href="#" className="clearfix">
														<div className="image bg-success">
															<FontAwesomeIcon icon={solid('signal')} className=' icon' />
														</div>
														<span className="title">Connection Restaured</span>
														<span className="message">10/10/2014</span>
													</a>
												</li>
											</ul>
					
											<hr />
					
											<div className="text-right">
												<a href="#" className="view-more">View All</a>
											</div>
										</div>
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</li>
					</ul>
			
					<span className="separator"></span>
			
					<Dropdown id="userbox" className="userbox">
						<Dropdown.Toggle href="#" data-toggle="dropdown">
							<figure className="profile-picture">
								<img src={require("../../assets/images/logged-user.jpg")} alt="Joseph Doe" className="img-circle" data-lock-picture="../../assets/images/!logged-user.jpg" />
							</figure>
							<div className="profile-info" data-lock-name="John Doe" data-lock-email="johndoe@JSOFT.com">
								<span className="name">John Doe Junior</span>
								<span className="role">administrator</span>
							</div>
			
							<FontAwesomeIcon className="icon custom-caret" icon={solid('caret-down')} />
						</Dropdown.Toggle>
			
						<Dropdown.Menu className="dropdown-menu">
							<ul className="list-unstyled">
								<Dropdown.Divider />
								<li>
									<a role="menuitem" tabIndex="-1" href="pages-user-profile.html"><FontAwesomeIcon className="icon" icon={solid('user')} /> My Profile</a>
								</li>
								<li>
									<a role="menuitem" tabIndex="-1" href="#" data-lock-screen="true"><FontAwesomeIcon className="icon" icon={solid('lock')} /> Lock Screen</a>
								</li>
								<li>
									<a role="menuitem" tabIndex="-1" href="pages-signin.html"><FontAwesomeIcon className="icon" icon={solid('power-off')} /> Logout</a>
								</li>
							</ul>
						</Dropdown.Menu>
					</Dropdown>
				</div>

			</header>
    )
} 

export default Header;