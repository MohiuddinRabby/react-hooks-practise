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
const [count, setCount] = useState(0);
const [count, setCount] = useState(true);
const [count, setCount] = useState([]);
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

---

### Topic

> useEffect

#### Summary of useEffect

- useEffect runs after every render of component
- useEffect placed inside the component

```js
const ComponentName = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `clicked ${count} times`;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};
```

- useEffect can fetch data from an **api** and can be manipulate

```js
const DataFetching2 = () => {
  const [posts, setPosts] = useState({});
  const [postID, setPostID] = useState(1);
  const [idFromBtnClick, setIDfromBtnClick] = useState(1);
  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromBtnClick]);
  const handleFetchPost = () => {
    setIDfromBtnClick(postID);
  };
  return (
    <div>
      <input
        type="text"
        value={postID}
        onChange={(e) => setPostID(e.target.value)}
      />
      <button onClick={handleFetchPost}>Fetch Post</button>
      <p>{posts.title}</p>
    </div>
  );
};
```
