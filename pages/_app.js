import FormContextProvider from "@/components/context/formcontext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <FormContextProvider>
      <Component {...pageProps} />
    </FormContextProvider>
  );
}
