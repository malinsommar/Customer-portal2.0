import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const DropdownButton = ({ id, title }) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} id={id}>
      <DropdownToggle caret>{title}</DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Items per page</DropdownItem>
        <DropdownItem /*disabled*/>10</DropdownItem>
        <DropdownItem>30</DropdownItem>
        <DropdownItem>50</DropdownItem>
        <DropdownItem>100</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>All</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default DropdownButton;
