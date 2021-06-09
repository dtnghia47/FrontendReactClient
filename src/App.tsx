/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import "./App.scss";
import "./locales/i18n";
import { HomePage } from "./pages/HomePage/loadable";
import { CountPage } from "./pages/CountPage/loadable";
import { ThemeProvider } from "./styles/theme/provider";
import { getTheme } from "./styles/theme/slice";

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('Track: Load Theme');
    dispatch(getTheme({ mode: 'dark' }));
  }, [dispatch]);
  console.log('Track: Render App');
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/count" component={CountPage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
