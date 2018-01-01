import * as React from "react";
import { Component } from "react";

class Root extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      placeHolderString: '',
      placeHolderInteger: 0,
      placeHolderBoolean: false,
      placeHolderArray: [],
      placeHolderObj: {},
      placeHolderErrorRes: null,

     // computed props could be here
    }
  }

  thisIsAMethod() {}

  thisIsAnotherMethod() {}

  thisIsAMethodProducingAComputedValue() {}

  render() {
    return (
      <section>
        ...
      </section>
    )
  }

  /* Lifecycles */

  componentWillMount() {
    /* componentWillMount() is invoked immediately before mounting occurs. It is called before render() */
  }

  componentDidMount() {
    /* componentDidMount() is invoked immediately after a component is mounted. */
  }

  componentWillReceiveProps() {
    /* update computed state if props change */
    /* componentWillReceiveProps() is invoked before a mounted component receives new props. */
  }

  shouldComponentUpdate(nextProps, nextState) {
    /* Use shouldComponentUpdate() to let React know if a component’s output is not affected by the current change in state or props. */
  }

  componentWillUpdate(nextProps, nextState) {
    /* componentWillUpdate() is invoked immediately before rendering when new props or state are being received. */
  }

  componentDidUpdate(prevProps, prevState) {
    /* componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render. */
  }

  componentWillUnmount() {
    /* componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. */
  }

}