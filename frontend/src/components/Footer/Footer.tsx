import './Footer.css';
import {VK} from "../../icons/VK.tsx";
import {Telegram} from "../../icons/Telegram.tsx";

export function Footer() {
    return (
        <footer className="footer main-container mt-5">
            <div className="gap-3 footer-main">
                <p className="footer-title">LLC «Мультимедиа Визион»</p>
                <p className="privacy">© Все права защищены</p>
            </div>
            <div className="d-flex gap-3">
                <a href="#" className="network-footer">
                    <VK/>
                </a>
                <a href="#" className="network-footer">
                    <Telegram/>
                </a>
            </div>
        </footer>
    );
}