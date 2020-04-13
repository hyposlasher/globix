# React Global State Hook

Globix is the easiest way to bring global state to your React App

## Installing
```
npm i --save globix-test-verison
```

## Usage

1. Wrap your Root Component with `GlobixProvider` and pass optional `initialValues` props:
```
import { GlobixProvider } from 'globix';

ReactDOM.render(
  <GlobixProvider initialState={{name: 'Daron Malakian'}}>
    <App />
  </GlobixProvider>,
  document.getElementById('root')
);
```

2. Get global state anywhere in your application:
```
import { useGlobix } from 'globix';

const SomeComponent = () => {
  const { globaslState } = useGlobix();

  return <p>{globalState.name}</p>;
}
```

3. Set global state from anywhere you want:
```
import {useGlobix} from 'globix';

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
