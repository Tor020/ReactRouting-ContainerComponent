import React, { Component } from "react";
import IPAddress from "./IPAddress";
 
 let xhr;


class IPAddressContainer extends Component {
  constructor(props, context) {
    super(props, context);
 
    this.state = {
      ip_address: "..."
    };
 
    this.processRequest = this.processRequest.bind(this);
  }
 /* When our component becomes active and the componentDidMount lifecycle method gets called, we make our HTTP request and send it off to the ipinfo.io web service: */
  componentDidMount() {
    xhr = new XMLHttpRequest();
    xhr.open("GET", "https://ipinfo.io/json", true);
    xhr.send();
  /*When we hear a response back from the ipinfo service, we call the processRequest function to help us deal with the result:*/
    xhr.addEventListener("readystatechange", this.processRequest, false);
  }



/* This function parses the data returned by the web service, assigns the result to an object called response, and then stores just the IP address from the response object into a state variable called ip_address. */
  processRequest() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
 
      this.setState({
        ip_address: response.ip
      });
    }
  }
 
  render() {
    return (
        <IPAddress ip={this.state.ip_address}/>
    );
  }
};

export default IPAddressContainer;