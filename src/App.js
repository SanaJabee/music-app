import { Provider } from "react-redux";
import store from './store/store';
import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { AppRouter } from "./routers/appRouter";
function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
