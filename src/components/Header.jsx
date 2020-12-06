import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
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
    <Navbar.Brand href="#home">Laughs At Graphs</Navbar.Brand>
    <Nav className="mr-auto">
       {/* <Nav.Link href="#home">Home</Nav.Link> */}
    </Nav>
  </Navbar>
</>
        )
    }
}
export default Header
