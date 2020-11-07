import './App.css';
import { ThemeProvider } from 'styled-components'
import * as theme from './mainStyle'
import Header from './components/components/Header'
import LandPage from './components/components/LandPage'
import Features from './components/components/Features';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <LandPage />
      <Features />
    </ThemeProvider>
  );
}

export default App;
