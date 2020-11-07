import './App.css';
import { ThemeProvider } from 'styled-components'
import * as theme from './mainStyle'
import Header from './components/components/Header'
import LandPage from './components/components/LandPage'
import Features from './components/components/Features'
import Extensions from './components/components/Extensions'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <LandPage />
      <Features />
      <Extensions />
    </ThemeProvider>
  );
}

export default App;
