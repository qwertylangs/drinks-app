import { useRef } from 'react';

import classnames from 'classnames';
import cls from './Sidebar.module.scss';
import { useOutsideClick } from '@/shared/lib/hooks/useOutsideClick';
import { useMobileLinkClick } from '@/shared/lib/hooks/useMobileLinkClick';
import { DrinksList } from '@/entities/DrinksList/ui/DrinksList';

interface SidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export const Sidebar = ({
  isOpen = false,
  onClose,
}: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useOutsideClick({
    elementRef: sidebarRef,
    isActive: isOpen,
    onOutsideClick: () => onClose?.(),
  });

  const handleLinkClick = useMobileLinkClick({
    isOpen,
    onClose,
    mobileBreakpoint: 768,
  });

  return (
    <aside
      ref={sidebarRef}
      data-testid="sidebar"
      className={classnames(cls.sidebar, { [cls.open]: isOpen })}
    >
      <DrinksList handleLinkClick={handleLinkClick} />
    </aside>
  );
};
