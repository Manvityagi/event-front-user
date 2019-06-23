import React, { Component } from 'react'
import api from '../../util/api';
import {test} from '../../util/localStorage';

class Events extends Component {

  async componentDidMount(){
    await test();
  }

  render() {
    return (
      <div>
        Book your show
      </div>
    );
  }
}
export default Events;