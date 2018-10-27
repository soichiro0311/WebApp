import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider } from 'material-ui/styles';
import {getMuiTheme} from 'material-ui/styles'
import {darkBaseTheme} from 'material-ui/styles/baseThemes/darkBaseTheme'



ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
    <App />
  </MuiThemeProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
