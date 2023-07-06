import Image from 'next/image.js'

import styles from './swipeBar.module.css'
import tick from '../public/tick.svg'
import cross from '../public/cross.svg'

const SwipeBar: React.FC = () => {
  return (
    <div className={styles.swipeBar}>
      <Image src={cross} alt='decline' className={styles.decline} height={80} width={80} />
      <Image src={tick} alt='accept' className={styles.accept} height={80} width={80} />
    </div>
  )
}

export default SwipeBar