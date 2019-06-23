import React, {Component} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: true
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown direction="down" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Location
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
        <DropdownToggle caret>
          Events
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
        <DropdownToggle caret>
          Location
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
        <DropdownToggle caret>
          Location
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
        
      </Dropdown>
    );
  }
}

