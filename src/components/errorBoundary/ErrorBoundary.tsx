import React, { ReactNode } from "react";

interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  override state = { hasError: false, error: null };

  static getDerivedStateFromError(error: any): {
    hasError: boolean;
    error: any;
  } {
    return {
      hasError: true,
      error,
    };
  }

  override render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
