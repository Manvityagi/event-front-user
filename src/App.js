import React from 'react';
import './venuedetails.css';
import venue from './venue.jpg'
import { Component } from 'react'


class App extends Component {
  state = {
    value: 0,
    amount: 80
  }
  handleChange = async (event) => {
    //await this.setState({value:0,amount:80})
    // console.log(event.target.value)
    await this.setState({
      value: Number(event.target.value),
      amount: 80 - Number(event.target.value)
    });

  };
  render() {
    return (
      <div>
        <div className="row ">
        <section className="blue center-align">
          Header Content
        </section>
 
        </div>
        <div className="row ">
          <section className="cornsilk valign-wrapper">
            <div className="container valign">
              <div className="row">
                <div className="col s12 m12 l12">
                  <h4 className="center-align pink-text">Ticket Details</h4>
                </div>
              </div>
            </div>
          </section>
          <div className="col s8 l3 ">
            <div className="card">
              <div className="card-image ">
                <img src={venue} alt="venue" className="venue" />
              </div>
            </div>
          </div>

          <div className="col s8 l9 " >
            <section className="orange valign-wrapper">
              <div className="container valign">
                <div className="venuedetails" >Venue name : M2K Rohini </div>
                <div className="venuedetails">Rating : 5</div>
                <div className="venuedetails">Date : 12/05/2019</div>
                <div className="venuedetails"> Screen : 4</div>
                <div className="venuedetails">Number of slots : 1</div>
              </div>
            </section>
          </div>
        </div>
        <div className="row ">
         
            <div className="col s8 l3"> 
                <div className="content">
                  Time Slot :<br/> 9:00 a.m. to 12:00 noon
                </div>
                </div>
            <div className="col s12 m8 l3">
              <div className="post card">
                <div className="card-content">
                  <select onChange={this.handleChange} className="voucher">
                    <option value="0" >No coupon Code applied</option>
                    <option value="10"  >Offer 1</option>
                    <option value="20"  >Offer 2</option>
                  </select>
                  Price: Rs 100 <br />
                  Discount: Rs 20 <br />
                  Voucher Applied of: Rs {this.state.value} <br />
                  Total Price: Rs {this.state.amount} <br />

                  <a href='https://www.google.com/'><input type="button" value='Pay now' /> </a>
                </div>
              </div>
            </div>
          <div>
          </div>
        </div>
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              © 2018 Copyright - All Rights Reserved
    <a className="grey-text text-lighten-4 right" href="#!">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;

