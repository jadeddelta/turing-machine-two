"use client"

import App from "@/components/App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { cyan, pink } from "@mui/material/colors";
import { Provider } from "react-redux";
import store from "./store";

export default function Home() {
  const theme = createTheme({
    palette: {
      primary: {
        main: cyan[500],
        contrastText: '#f0f8ff'
      },
      secondary: {
        main: pink[400]
      },
    },
    typography: {
      fontSize: 12
    },
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            minWidth: '200px',
            width: '20vw'
          }
        }
      }
    }
  });

  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </main>
  );
}
