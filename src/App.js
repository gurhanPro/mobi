import './App.css';
import { Provider } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import routes from './routes.es6';
import { store } from './store.es6';

const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
});


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Provider store={store}>{routes}</Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
