import HomeContainer from "@/components/HomeContainer";
import store from "@/lib/store";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";



export default function App({ Component, pageProps }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => { setHydrated(true); }, []);

  if (!hydrated) {
    // Return null or a loading spinner until hydration is complete
    return null;
  }

  return (

    <>

      <Provider store={store}>

        <HomeContainer>

          <Component {...pageProps} />

        </HomeContainer>

      </Provider>
    </>
  )
}
