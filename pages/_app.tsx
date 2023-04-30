import Layout from "@/components/Layout/Layout";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { ThemeContextProvider } from "@/Context/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContextProvider>
  );
}
