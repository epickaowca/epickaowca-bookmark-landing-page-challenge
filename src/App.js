import './App.css';
import { ThemeProvider } from 'styled-components'
import * as theme from './mainStyle'
import Header from './components/components/Header'
import LandPage from './components/components/LandPage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <LandPage />
    </ThemeProvider>
  );
}

export default App;
