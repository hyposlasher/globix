# React Global State Hook

Globix is the easiest way to bring global state to your React App

## Installing
```
npm i --save globix-test-verison
```

## Usage

1. Wrap your Root Component with `GlobixProvider` and pass optional `initialValues` props:
```
import { GlobixProvider } from 'globix-test-version';

ReactDOM.render(
  <GlobixProvider initialState={{name: 'Daron Malakian'}}>
    <App />
  </GlobixProvider>,
  document.getElementById('root')
);
```

2. Get global state anywhere in your application:
```
import { useGlobix } from 'globix-test-version';

const SomeComponent = () => {
  const { globaslState } = useGlobix();

  return <p>{globalState.name}</p>;
}
```

3. Set global state from anywhere you want:
```
import {useGlobix} from 'globix-test-version';

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

* **Maushov Dinislam** - *Initial work* - [hyposlasher](https://github.com/hyposlasher)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
