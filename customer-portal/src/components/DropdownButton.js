import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const DropdownButton = ({ id, title, on10, on30, on50, on100, onAll }) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} id={id}>
      <DropdownToggle caret>{title}</DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Items per page</DropdownItem>
        <DropdownItem onClick={on10} /*disabled*/>10</DropdownItem>
        <DropdownItem onClick={on30}>30</DropdownItem>
        <DropdownItem onClick={on50}>50</DropdownItem>
        <DropdownItem onClick={on100}>100</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={onAll}>All</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default DropdownButton;
