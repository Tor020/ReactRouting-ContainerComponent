// [1:31 PM] acemarke: the basic example of a "controlled input" would be:
// [1:31 PM] acemarke: 
class MyComponent extends Component {  
    constructor(props) {  
        super(props);  
          
        this.state = {  
            text : ""  
        };  
          
        this.onChange = this.onChange.bind(this);  
    }  
      
    onChange(e) {  
        const newText = e.target.value;  
        this.setState({text : newText});  
    }  
      
    render() {  
        return <input type="text" value={this.state.text} onChange={this.onChange} />  
    }  
}  


// [1:33 PM] acemarke: no, things like using the Class Properties syntax, or setting a name prop on the input and using that to help fill out the state update object
// [1:33 PM] acemarke: like, say:

class MyComponent extends Component {
    state = {text : ""}

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value});
    }

    render() {
        return <input type="text" name="text" value={this.state.text} onChange={this.onChange} />
    }
}