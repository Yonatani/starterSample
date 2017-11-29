import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SampleComponent from './components/SampleComponent/SampleComponent';

const App = () => (
    <MuiThemeProvider>
      <SampleComponent />
    </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
