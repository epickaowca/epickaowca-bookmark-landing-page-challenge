import './App.css';
import { ThemeProvider } from 'styled-components'
import * as theme from './mainStyle'

function App() {
  return (
    <ThemeProvider theme={theme}>
      components
    </ThemeProvider>
  );
}

export default App;
