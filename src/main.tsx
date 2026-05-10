import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from './ErrorBoundary.tsx'
import './typography.css'
import './index.css'
import App from './App.tsx'

const rootEl = document.getElementById('root')
if (!rootEl) {
  throw new Error('Missing #root — check index.html')
}

createRoot(rootEl).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
