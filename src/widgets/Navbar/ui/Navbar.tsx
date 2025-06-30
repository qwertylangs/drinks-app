import React from 'react';
import styles from './Navbar.module.scss';
import { Burger } from '@/shared/ui/Burger/Burger';

interface NavbarProps {
  onToggleSidebar: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  return (
    <nav className={styles.navbar}>
      <Burger onClick={onToggleSidebar} />
      <h1 className={styles.title}>Cocktails App</h1>
    </nav>
  );
};
