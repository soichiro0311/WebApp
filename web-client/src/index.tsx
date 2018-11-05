import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider } from 'material-ui/styles';
import { getMuiTheme } from 'material-ui/styles'
import { darkBaseTheme } from 'material-ui/styles/baseThemes/darkBaseTheme'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
