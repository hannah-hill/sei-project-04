import React, { useState } from 'react'
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
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Nav
