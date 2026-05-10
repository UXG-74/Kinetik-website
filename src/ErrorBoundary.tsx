import { Component, type ErrorInfo, type ReactNode } from 'react'

type Props = { children: ReactNode }
type State = { error: Error | null }

/**
 * Surfaces render errors in the DOM (avoids a totally blank page in dev when something throws).
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info.componentStack)
  }

  render() {
    const { error } = this.state
    if (!error) return this.props.children

    return (
      <div
        style={{
          boxSizing: 'border-box',
          minHeight: '100vh',
          padding: '2rem',
          background: '#0a0f1b',
          color: '#e8eef8',
          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
        }}
      >
        <h1 style={{ fontSize: '1.25rem', margin: '0 0 1rem' }}>
          Could not render the page
        </h1>
        <pre
          style={{
            margin: 0,
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            fontSize: '0.875rem',
            opacity: 0.9,
          }}
        >
          {error.message}
        </pre>
        <p style={{ marginTop: '1rem', fontSize: '0.875rem', opacity: 0.65 }}>
          Check the browser console for the full stack trace.
        </p>
      </div>
    )
  }
}
