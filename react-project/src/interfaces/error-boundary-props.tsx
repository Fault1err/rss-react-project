import { ReactNode } from 'react';

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ErrorBoundaryStateProps {
  hasError: boolean;
  error: string;
}

export type TypeError = Error | null;
