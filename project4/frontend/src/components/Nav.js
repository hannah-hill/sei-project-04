import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Cross as Hamburger } from 'hamburger-react'
import Offcanvas from 'react-bootstrap/Offcanvas'

const Nav = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => (!show ? setShow(true) : setShow(false))

  return (
    <>
      <Hamburger toggled={show} toggle={handleShow} />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header></Offcanvas.Header>
        <Offcanvas.Body>
          <nav>
            <ul className='nav-list'>
              <Link to='/'>
                <li className='first-link'>Home</li>
              </Link>
              <Link to='/campaigns'>
                <li>Browse campaigns</li>
              </Link>
              <Link to='/campaigns/new'>
                <li>Start a campaign</li>
              </Link>
              <li>Categories</li>
            </ul>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Nav
