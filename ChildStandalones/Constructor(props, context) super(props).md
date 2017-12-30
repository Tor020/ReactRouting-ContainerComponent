```
 explain what are constructor(props, context) and super(props, context) and explain their purpose

 ```


 ```

 They are just part of the ES6 classes implementation: https://www.kirupa.com/javascript/classy_way_to_create_objects.htm
 
The purpose of the constructor is to automatically execute any code as part of creating the object.

Every React component gets a few arguments passed in during creation. 

The props argument contains the things you receive via this.props.

The context argument is something you’ll rarely need to use…except when using Redux and related libraries that help manage state.
```