import type { AppProps } from "next/app"

// Utils
import { AppProvider } from "@utils/context/AppContext"
import { PageProvider } from "@utils/context/PageContext"

// Styles
import GlobalStyle from "@styles/global"

// Components
import DebugGrid from "@components/utils/DebugGrid"
import PageWrapper from "@components/page/PageWrapper"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

const App = ({ Component, pageProps, router }: AppProps) => (
  <>
    <GlobalStyle />

    <AppProvider>
      <PageProvider>
        <main>
          <DebugGrid />

          <PageWrapper>
            <Component key={router.pathname} {...pageProps} />
          </PageWrapper>
        </main>
      </PageProvider>
    </AppProvider>
  </>
)

export default App
