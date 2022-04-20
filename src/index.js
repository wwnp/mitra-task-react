import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './style.loader.css'
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import store from "./redux";
import { Provider } from "react-redux";
import { history } from "./redux/reducers";
import { AboutPage } from './containers/AboutPage';
import { MainPage } from './containers/MainPage';
import { MorePage } from './containers/MorePage';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} basename="/mitra-task-react/">
      <App>
        <Switch>
          <Route path='/mitra-task-react' exact>
            <MainPage />
          </Route>
          <Route path='/mitra-task-react/about' exact>
            <AboutPage />
          </Route>
          <Route path='/mitra-task-react/photos/:id' exact>
            <MorePage />
          </Route>
        </Switch>
      </App>
    </ConnectedRouter >
  </Provider>
  ,
  document.getElementById('root')
);