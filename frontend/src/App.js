import logo from './logo.svg';
import './App.css';
import Thought from './views/Thought';
import { globalStyles } from '@people/styles';
import { Global, ThemeProvider } from '@emotion/react';
import { main } from '@people/styles/themes/main';

function App() {
  return (
    <ThemeProvider theme={main}>
      <Global style={globalStyles}/>
      <Thought />
    </ThemeProvider>
  );
}

export default App;
