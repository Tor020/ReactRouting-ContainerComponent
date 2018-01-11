// Here’s a very basic example of using props.
// Link To React Practice Props Exercises 
// https://codepen.io/collection/nWRLwp/ 


class HelloUser extends React.Component {
  render() {
    console.log(this.props) //this will output the props, which are added into the jsx where the attributes would've been added in html
    //  ex: html : jsx
    //  <h1 class ='example'></h1>  <Heading className ='example'/> 
    return (
      <div id="this.props.id"> Hello, {this.props.name}</div>
    )
  }
}
ReactDOM.render(<HelloUser id="yeaboi" name="Tyler"/>, document.getElementById('app'));
//Notice when we use the component, we're passing in a name attribute. This attribute can then be accessed inside the component as this.props.name.



//Breakdown of 
this.props.PROPNAME

//This refers to the component. ie: this component
//props is an object available
//propname is the label that is accessible from the object

// together -> this.props.PROPNAME -> references the object located inside this component that PROPNAME references

// You can use this.props.PROPNAME anywhere inside of the render method to reference the prop


// React DevTools

// using $r after selecting a component in the React dev tools will let you use that as a reference in the console. It can be substituted for this.props.PROPNAME = $r.props.PROPNAME
//$0 is the chrome basic equivalent for any JS


// Stateless Functional Component
// Used for times when you don't need a component to have anything except the render method

//Browser Router
const Root = () => {
  return (
    <BrowserRouter>
      <Match exactly pattern="/" component={StorePicker} />
      <Match pattern="/store/:storeId" component={App} />
    </BrowserRouter>
  )
}

//needs this `import { BrowserRouter, Match, Miss } from 'react-router';` statement


/**/
//This inside of the render always refers to the this component, however functions that you write inside of the component that are outside the render method do not have a lexically bound this
// thats why you need to bind a functions this context with .bind()


//Constructor method <- the this context is bound to the specific function inside of the component. So if you render more than one of the same component on the page that uses event llsteners they will being referring to the same function if the this context is bound here.
class StorePicker extends React.Component {
  
  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this)
  //        |                       |         |
  //        |                       |         |
  // looks for goToStoreMethod     |         |
  //                 Binds this to itself   |
  //                                      Inside the constructor with super, this refers to the component it's inside of. 
  // TLDR, when inside of the constructor, this refers to the overall class you're inside of

    // this is a way to bind the function to refer to the component as the appropriate context when you use this.
    //

  }
    goToStore() {

    }

// Alternative way to bind <-- creates an individual function for each component rendered on the screen. Everytime you make a new component with event listner functions like setup similarly, each component gets one dedicated to its own slot

render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
          {/* <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} /> */}
      </form>

      //OR

      <form className="store-selector" onSubmit={(e)=> this.goToStore(e)}> {/* Must be passed the event in this style*/}

  }
}