import styles from './Footer.module.css';
import {Telegram} from "@/icons/Telegram";
import {VK} from "@/icons/VK";

export function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div>
                <p className="footer">LLC  ⓒ «Мультимедиа Визион»
                    <span className={styles.rules + " mx-3"}>
                        Все права защищены
                    </span>
                </p>
            </div>
            <div className="flex gap-3">
                <span className={styles.item}>
                    <Telegram/>
                </span>
                <span className={styles.item}>
                    <VK/>
                </span>
            </div>
        </footer>
    )
}