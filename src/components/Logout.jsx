import React from 'react'
import Nav from 'react-bootstrap/Nav';

export default () => {
  const logout = () => {
    window.localStorage.clear();
    window.location.href = "login";
  }

  return (
    <Nav.Link onClick={logout}>Logout</Nav.Link>
  )
}