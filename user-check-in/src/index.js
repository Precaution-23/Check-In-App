import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { createTheme, NextUIProvider } from '@nextui-org/react';

// 2. Call `createTheme` and pass your custom values
const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      // brand colors
      primary: '#0070f3',
      secondary: '#5E1DAD',
      buttonPrimaryTextColor: '#FFFFFF',
      hoverLinkColor: '',
      errorTextColor: '',
      HoverButtonColor: '',
      hoverTextColor: '',
      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#FF0000'

      // ...  more colors
    },
    space: {},
    fonts: {}
  }
})

ReactDOM.render(
  <React.StrictMode>
    <NextUIProvider theme={theme}>
      <ChakraProvider>
      <App />
      </ChakraProvider>
    </NextUIProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
