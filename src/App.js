import { Provider } from "react-redux";
import "./App.scss";
import Logo from "./components/Logo/Logo";
import Photo from "./components/Photo/Photo";
import Search from "./components/Search/Search";
import store from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Logo />
        <Search />
        <Photo />
      </Provider>
    </div>
  );
}

export default App;
