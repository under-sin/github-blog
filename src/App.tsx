import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'
import { IssueProvider } from './context/IssuesContext'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <IssueProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </IssueProvider>
    </ThemeProvider>
  )
}
