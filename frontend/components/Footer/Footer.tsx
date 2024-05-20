import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div>
                <p className="footer">ⓒ LLC «Мультимедиа Визион»</p>
            </div>
            <div>
                vk
                inst
            </div>
        </footer>
    )
}