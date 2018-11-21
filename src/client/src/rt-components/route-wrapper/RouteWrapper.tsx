import React from 'react'
import { OpenFinChrome, OpenFinHeader, PlatformAdapter, withPlatform } from 'rt-components'
import { styled, ThemeProvider } from 'rt-theme'

const RouteStyle = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`

interface Props {
  platform: PlatformAdapter
}

const RouteWrapperBase: React.SFC<Props> = ({ children, platform }) => (
  <ThemeProvider theme={theme => theme}>
    <RouteStyle>
      {platform.name === 'openfin' ? (
        <OpenFinChrome>
          <OpenFinHeader close={platform.window.close} />
          {children}
        </OpenFinChrome>
      ) : (
        children
      )}
    </RouteStyle>
  </ThemeProvider>
)

const RouteWrapper = withPlatform(RouteWrapperBase)

export { RouteStyle, RouteWrapper }
