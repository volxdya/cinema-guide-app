import './Footer.css';
import {VK} from "../../icons/VK.tsx";
import {Telegram} from "../../icons/Telegram.tsx";

export function Footer() {
    const RICROLL_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

    return (
        <footer className="footer main-container mt-5">
            <div className="gap-3 footer-main">
                <p className="footer-title">LLC «Мультимедиа Визион»</p>
                <p className="privacy">© Все права защищены</p>
            </div>
            <div className="d-flex gap-3">
                <a href={RICROLL_URL} target={"_blank"} className="network-footer">
                    <VK/>
                </a>
                <a href={RICROLL_URL} target={"_blank"} className="network-footer">
                    <Telegram/>
                </a>
            </div>
        </footer>
    );
}