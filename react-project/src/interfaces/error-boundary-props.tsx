import { ReactNode } from 'react';

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ErrorBoundaryStateProps {
  hasError: boolean;
  error: Error | null;
}

export type TypeError = Error | null;
