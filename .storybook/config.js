import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../components/particles/globalStyle'
import ThemeDefault from '../components/particles/themeDefault'

configure(require.context('../components', true, /\.stories\.js$/), module)

const GlobalWrapper = (storyFn) => (
  <ThemeProvider theme={ThemeDefault}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
)

addDecorator(GlobalWrapper)
