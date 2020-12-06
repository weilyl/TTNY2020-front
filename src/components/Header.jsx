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
    <Navbar.Brand href="/">Laughs at Graphs</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="https://www.amazon.com/Charty-Party-Absurdly-Charts-Visualization/dp/B07QVB2VGQ">Buy the card game</Nav.Link>
      <Nav.Link href="https://github.com/">Github</Nav.Link>
      <Nav.Link href="#us">Team</Nav.Link>
    </Nav>

  </Navbar>
</>
        )
    }
}
export default Header;
