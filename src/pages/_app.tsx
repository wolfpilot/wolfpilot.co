import type { AppProps } from "next/app"
import { DefaultSeo } from "next-seo"
import styled from "styled-components"

// Config
import { defaultMeta } from "@config/seo.config"

// Utils
import { AppProvider } from "@utils/context/AppContext"
import { PageProvider } from "@utils/context/PageContext"
import { ShowcaseProvider } from "@components/showcase/Context"

// Styles
import GlobalStyle from "@styles/global"
import { fontPrimary } from "@styles/typography"

// Components
import DOMManager from "@utils/managers/DOMManager"
import DebugGrid from "@components/utils/DebugGrid/DebugGrid"
import SiteHeader from "@components/site/SiteHeader/SiteHeader"
import SiteFooter from "@components/site/SiteFooter/SiteFooter"
import PageWrapper from "@components/layout/PageWrapper/PageWrapper"
import ShowcaseModal from "@components/showcase/ShowcaseModal/ShowcaseModal"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

const App = ({ Component, pageProps, router }: AppProps) => {
  const isHomepage = router.pathname === "/"

  return (
    <Wrapper className={fontPrimary.variable}>
      <DefaultSeo {...defaultMeta} />
      <GlobalStyle />
      <DOMManager />

      <AppProvider>
        <DebugGrid />

        <SiteHeader />

        <PageProvider>
          <PageWrapper>
            {isHomepage ? (
              <ShowcaseProvider>
                <ShowcaseModal />

                <Component key={router.pathname} {...pageProps} />
              </ShowcaseProvider>
            ) : (
              <Component key={router.pathname} {...pageProps} />
            )}
          </PageWrapper>
        </PageProvider>

        <SiteFooter />
      </AppProvider>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /**
   * Force wrapper to extend to at least one full screen height and
   * thus the footer always appears to be sticking to the bottom.
   */
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  /**
   * Apply local fonts using CSS var generated by Next
   */
  font-family: var(--font-primary);
`

export default App
