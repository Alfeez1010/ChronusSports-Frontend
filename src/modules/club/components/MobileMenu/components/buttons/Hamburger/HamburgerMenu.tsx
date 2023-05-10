import Image from 'next/image'

import styles from './hamburger.module.css'


interface Props {
  onClick: () => void
}

const HamburgerMenu: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={styles.hamburger} onClick={onClick}>
      <Image src="/assets/images/ham.svg" width={23} height={23} alt='Menu'></Image>
    </div>
  )
}

export default HamburgerMenu
