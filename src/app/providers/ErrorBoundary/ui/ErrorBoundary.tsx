import React, { Component, ReactNode } from 'react';
import { ReloadButton } from '@/shared/ui/ReloadButton';
import styles from './ErrorBoundary.module.scss';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className={styles.errorWrapper}>
          <h2 className={styles.title}>Что-то пошло не так.</h2>
          <p className={styles.description}>Попробуйте перезагрузить страницу.</p>
          <ReloadButton />
        </div>
      );
    }

    return children;
  }
}
