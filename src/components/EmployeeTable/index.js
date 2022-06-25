import React, {useState} from 'react';
import '../../assets/styles/theme.scss';
import '../../assets/styles/skins/default.scss';
import '../../assets/styles/theme-custom.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Modal, Form, Button } from 'react-bootstrap';

const EmployeeTable = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <section role="main" className="content-body">
            <header className="page-header">
						<h2>Employee List</h2>
					
						<div className="right-wrapper pull-right">
							<ol className="breadcrumbs">
								<li>
									<a href="/">
                                        <FontAwesomeIcon icon={solid("home")} />
									</a>
								</li>
								<li><span>Employee List</span></li>
							</ol>
					
							
						</div>
			</header>
            <div className="row">
							
							<div className="col-12">
								<section className="panel">
									<header className="panel-heading">
										<div className="panel-actions">
											<a href="#" className="fa fa-caret-down"></a>
											<a href="#" className="fa fa-times"></a>
										</div>
						
										
									</header>
									<div className="panel-body">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="mb-md">
                                                <button id="addToTable" onClick={handleShow} className="btn btn-success">Add 
                                                <FontAwesomeIcon icon={solid('plus')} className="icon" />
                                                </button>
                                            </div>
                                        </div>
								    </div>
										<div className="table-responsive">
											<table className="table table-striped mb-none">
												<thead>
													<tr>
														<th>#</th>
														<th>First Name</th>
														<th>Last Name</th>
														<th>Username</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>1</td>
														<td>Mark</td>
														<td>Otto</td>
														<td>@mdo</td>
													</tr>
													<tr>
														<td>2</td>
														<td>Jacob</td>
														<td>Thornton</td>
														<td>@fat</td>
													</tr>
													<tr>
														<td>3</td>
														<td>Larry</td>
														<td>the Bird</td>
														<td>@twitter</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</section>
							</div>
			</div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder=""
                        autoFocus
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder=""
                        
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder=""
                        
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Company</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder=""
                        
                    />
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="success" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </section>
    )
}

export default EmployeeTable;