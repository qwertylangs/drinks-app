import { RefObject, useEffect, useCallback } from 'react';

interface UseOutsideClickOptions {
    elementRef: RefObject<HTMLElement>;
    isActive?: boolean;
    onOutsideClick: () => void;
}

export function useOutsideClick({
  elementRef,
  isActive = true,
  onOutsideClick,
}: UseOutsideClickOptions): void {
  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (
        isActive
                && elementRef.current
                && !elementRef.current.contains(event.target as Node)
      ) {
        onOutsideClick();
      }
    },
    [isActive, elementRef, onOutsideClick],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);
}
