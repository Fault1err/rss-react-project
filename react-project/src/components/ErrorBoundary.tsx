import React, { Component, ErrorInfo } from 'react';
import {
  ErrorBoundaryProps,
  ErrorBoundaryStateProps,
} from '../interfaces/error-boundary-props';

class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryStateProps
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error: error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('This is an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>{this.state.error?.toString()}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
