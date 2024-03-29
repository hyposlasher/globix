# React Global State Hook

Globix is the easiest way to bring global state to your React App

## Installing
```
npm i --save globix
```

## Usage

### Wrap your Root Component with `GlobixProvider` and pass optional `initialValues` props:
```javascript
import { GlobixProvider } from 'globix';

ReactDOM.render(
  <GlobixProvider initialState={{name: 'Daron Malakian'}}>
    <App />
  </GlobixProvider>,
  document.getElementById('root')
);
```

### Get global state anywhere in your application:
```javascript
import { useGlobix } from 'globix';

const SomeComponent = () => {
  const { globaslState } = useGlobix();

  return <p>{globalState.name}</p>;
}
```

### Set global state from anywhere you want:
```javascript
import { useGlobix } from 'globix';

const AnotherComponent = () => {
  const { globalState, setGlobalState } = useGlobix();

  const handleClick = () => {
    setGlobalState({
      ...globalState,
      newValue: 'new value'
    })
  }

  return <button onClick={handleClick}>change name</button>
}
```

## Authors

* **Dinislam Maushov** - *Initial work* - [hyposlasher](https://github.com/hyposlasher)

## License

This project is licensed under the MIT License
