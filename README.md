### React-hooks(practise and learing purpose)

#### Rules of hooks

- Only call hooks from the top level
- Don't call hooks inside loops, conditions or nested functions
- Only call hooks from React functions
- Call them from React-functional-component not from any regular JS function

### Topic

> useState

##### Summary of useState

- useState hook let add state to functional components
- the state doesnt have to be an object like class components. It can be array, number, boolean etc
```js
const [count, setCount] = useState(0)
const [count, setCount] = useState(true)
const [count, setCount] = useState([])

```
- useState returns an array with 2 elements :
  - the first value is the current value of the state
  - and the second value is the state setter function
- we can pass a function to the setter function
- when using objects or arrays, always need to spread [...spread] state variable and then call the setter function.

```js
const [items, setItems] = useState([]);
const addNewNumber = () => {
  setItems([
    ...items,
    {
      id: items + 1,
      value: Math.floor(Math.random() * 10) + 1,
    },
  ]);
};
```
