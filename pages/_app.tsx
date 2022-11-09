import "../styles/globals.css";
import type { AppProps } from "next/app";
import "project-isaac-components/dist/tailwind.css";
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
