import React, { Component } from 'react';
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
      error: '',
    };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error: error.toString(),
    };
  }

  componentDidCatch(error: Error) {
    console.error('This is an error:', error.toString());
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
