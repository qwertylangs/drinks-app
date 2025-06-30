import styles from './Burger.module.scss'

type BurgerProps = {
    onClick: React.DOMAttributes<HTMLButtonElement>['onClick']
}

export const Burger = ({onClick}: BurgerProps) => {
  return (
    <button type="button" className={styles.burger} onClick={onClick}>
        ☰
    </button>
  )}