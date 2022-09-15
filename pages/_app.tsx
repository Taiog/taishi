import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import ReactGA from "react-ga4";
import CpFooter from "../src/components/Footer/CpFooter";
import CpHeader from "../src/components/Header/CpHeader";
import CtLang from "../src/containers/CtLang";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  // if (process.env.PROD && process.env.GA_ID) {
  ReactGA.initialize("G-ZD0BWQSMX8");
  // }

  return (
    <MantineProvider
      theme={{
        // Theme is deeply merged with default theme
        colorScheme: "light",
        colors: {
          // Add your color
          "deep-blue": ["#E9EDFC", "#C1CCF6", "#99ABF0" /* ... */],
          // or replace default theme color
          blue: ["#E9EDFC", "#C1CCF6", "#99ABF0" /* ... */],
        },

        shadows: {
          // other shadows (xs, sm, lg) will be merged from default theme
          md: "1px 1px 3px rgba(0,0,0,.25)",
          xl: "5px 5px 3px rgba(0,0,0,.25)",
        },

        headings: {
          fontFamily: "Montserrat, sans-serif",
          sizes: {
            h1: { fontSize: 30 },
          },
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <CtLang>
        <CpHeader />
        <Component {...pageProps} />
        <CpFooter />
      </CtLang>
    </MantineProvider>
  );
}

export default MyApp;
