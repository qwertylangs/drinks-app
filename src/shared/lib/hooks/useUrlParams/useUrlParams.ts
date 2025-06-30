import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

interface UseUrlParamsOptions {
  initialParams?: Record<string, string>;
}

interface UseUrlParamsResult {
    getParam: (name: string, defaultValue?: string) => string | null;
    setParam: (name: string, value: string | null) => void;
    setParams: (params: Record<string, string | null>) => void;
    removeParam: (name: string) => void;
    searchParams: URLSearchParams;
}

export const useUrlParams = ({ initialParams }: UseUrlParamsOptions = {}): UseUrlParamsResult => {
  const [searchParams, setSearchParams] = useSearchParams(initialParams);

  const getParam = useCallback(
    (name: string, defaultValue?: string): string | null => {
      const value = searchParams.get(name);
      return value !== null ? value : defaultValue || null;
    },
    [searchParams],
  );

  const setParam = useCallback(
    (name: string, value: string | null): void => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        if (value === null) {
          newParams.delete(name);
        } else {
          newParams.set(name, value);
        }
        return newParams;
      });
    },
    [setSearchParams],
  );

  const setParams = useCallback(
    (params: Record<string, string | null>): void => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        Object.entries(params).forEach(([name, value]) => {
          if (value === null) {
            newParams.delete(name);
          } else {
            newParams.set(name, value);
          }
        });
        return newParams;
      });
    },
    [setSearchParams],
  );

  const removeParam = useCallback(
    (name: string): void => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        newParams.delete(name);
        return newParams;
      });
    },
    [setSearchParams],
  );

  return {
    getParam,
    setParam,
    setParams,
    removeParam,
    searchParams,
  };
};
