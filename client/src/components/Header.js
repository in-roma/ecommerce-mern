import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
	return (
		<header>
			<Navbar bg="light" expand="lg" collapseOnSelect>
				<Container>
					<Navbar.Brand href="/">Proshop</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link href="/cart">Cart</Nav.Link>
							<Nav.Link href="/login">Sign-In</Nav.Link>
						</Nav>
						<Form inline>
							<FormControl
								type="text"
								placeholder="Search"
								className="mr-sm-2"
							/>
							<Button variant="outline-success">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
