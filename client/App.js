import React, {Component} from 'react';
import Navigation from './components/Navigation';
import {Modal, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

//SubComponents
import CampForm from './components/CampForm';
import Campaign from './components/Campaign';

// Esto es JSX: Consiste en javascript con html
//Se necesita el traductor Babel
class App extends Component{
	
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }



	render() {
		return(
			<div className ="App">
				<Navbar inverse collapseOnSelect>
					<Navbar.Header>
				    	<Navbar.Brand>
				      		<a href="#brand">AmbientaTEC</a>
				    	</Navbar.Brand>
				    	<Navbar.Toggle />
				  	</Navbar.Header>
				  		<Navbar.Collapse>
					    	<Nav>
					      		<NavItem eventKey={1} href="#">
					        		Campañas
					      		</NavItem>
					      		<NavItem eventKey={2} href="#">
					        		Empresas
					      		</NavItem>
					      		<NavDropdown eventKey={3} title="Productos" id="basic-nav-dropdown">
					        		<MenuItem eventKey={3.1}>Producto 1</MenuItem>
					        		<MenuItem eventKey={3.2}>Producto 2</MenuItem>
					        		<MenuItem eventKey={3.3}>Producto 3</MenuItem>
					        		<MenuItem divider />
					        		<MenuItem eventKey={3.3}>Separated link</MenuItem>
					      		</NavDropdown>
					    	</Nav>
					    	<Nav pullRight>
					      		<NavItem eventKey={1} href="#">
					        		Link Right
					      		</NavItem>
					      		<NavItem eventKey={2} href="#">
					        		Link Right
					      		</NavItem>
					    	</Nav>
				  		</Navbar.Collapse>
				</Navbar>;


		        <div className= "container">
		        	<h5>Si desea enviar una solicitud para organizar una campaña presione el siguiente boton.</h5>
			        <Button bsStyle="success" bsSize="large" onClick={this.handleShow}>
			          Enviar solicitud
			        </Button>		        	
		        </div>	

		        <div className= "container">
			        <Modal show={this.state.show} onHide={this.handleClose}>
			        	<Modal.Header closeButton>
			            	<Modal.Title>Solicitar campaña</Modal.Title>
			          	</Modal.Header>
			          	<Modal.Body>
				            <CampForm></CampForm>
				        </Modal.Body>
			          	<Modal.Footer>
			            	<Button onClick={this.handleClose}>Close</Button>
			          	</Modal.Footer>
			        </Modal>
			    </div>

			    <div className= "container">
			    	<h5>Puede participar en cualquiera de las siguientes campañas, solo marquela con un check.</h5>			    		
			        <Campaign></Campaign>
		        </div>	


		    </div>
		)
	}
}

export default App;