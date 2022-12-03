import Head from "next/head"
import { AppProps } from "next/app"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { CacheProvider, EmotionCache } from "@emotion/react"
import theme from "~/mui/theme"
import createEmotionCache from "~/mui/createEmotionCache"
import awsconfig from "../src/aws-exports"
import "@aws-amplify/ui-react/styles.css"
import { CustomAuthenticator } from "@tamura/amplify-common-lib/components/CustomAuthenticator"
import { Amplify } from "aws-amplify"

Amplify.configure(awsconfig)

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

type MyAppProps = AppProps & {
  emotionCache?: EmotionCache
}

const MyApp = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <CustomAuthenticator>
          <Component {...pageProps} />
        </CustomAuthenticator>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
