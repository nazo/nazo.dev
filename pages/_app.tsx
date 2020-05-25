import React from "react"
import "../css/tailwind.css"
import "github-markdown-css/github-markdown.css"
import * as gtag from "../lib/gtag"
import Router from "next/router"
import { AppProps } from "next/app"

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    Router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [])

  return <Component {...pageProps} />
}

export default App
