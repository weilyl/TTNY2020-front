import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        console.log(this.props)
        return(
<>
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="#home">Buy the card game</Nav.Link>
      <Nav.Link href="#features">Github</Nav.Link>
      <Nav.Link href="#pricing">Team</Nav.Link>
    </Nav>

  </Navbar>
</>
        )
    }
}
export default Header;
