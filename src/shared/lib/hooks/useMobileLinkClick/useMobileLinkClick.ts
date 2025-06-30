import { useCallback } from 'react';

interface UseMobileLinkClickOptions {
    isOpen?: boolean;
    onClose?: () => void;
    mobileBreakpoint?: number;
}

export function useMobileLinkClick({
  isOpen,
  onClose,
  mobileBreakpoint = 768,
}: UseMobileLinkClickOptions) {
  const handleLinkClick = useCallback(() => {
    if (isOpen && window.innerWidth <= mobileBreakpoint) {
      onClose?.();
    }
  }, [isOpen, onClose, mobileBreakpoint]);

  return handleLinkClick;
}
