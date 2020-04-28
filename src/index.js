import React from 'react';
import ReactDOM from 'react-dom';
import './resources/styles.css';
import Routes from "./routes"
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/index";
import Header from './components/header_footer/Header.jsx';
import Modal from './components/Modal/index';
import Footer from './components/header_footer/Footer.jsx';
import { createBrowserHistory } from 'history';
import Content from './components/core/Content';

const store = configureStore();
const history = createBrowserHistory();

class App extends React.Component {

  
  render() {
    return (
      <div className="App" >
        <Provider store={store}>
          <Router history={history}>
            <Header />
            <Modal>
              <Content />
            </Modal>
            <Routes />
            <Footer />
          </Router >
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
