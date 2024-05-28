import styles from './Footer.module.css';
import { Telegram } from '@/icons/Telegram';
import { VK } from '@/icons/VK';

const RICKROLLED = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div>
        <p className="footer">LLC ⓒ «Мультимедиа Визион»
          <span className={styles.rules + ' mx-3'}>
                        Все права защищены
                    </span>
        </p>
      </div>
      <div className="flex gap-3">
        <a href={RICKROLLED} className={styles.item} title="Telegram" target="_blank">
          <Telegram />
        </a>
        <a href={RICKROLLED} className={styles.item} title="VK" target="_blank">
          <VK />
        </a>
      </div>
    </footer>
  );
}