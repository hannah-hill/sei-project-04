import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const Filter = (props) => {
  return (
    <>
      <DropdownButton
        id='dropdown-basic-button'
        title={props.title}
        variant='secondary'
      >
        {props.actions.map((action) => {
          return (
            <Dropdown.Item key={action.name} href={action.href}>
              {action.name}
            </Dropdown.Item>
          )
        })}
      </DropdownButton>
    </>
  )
}

export default Filter
