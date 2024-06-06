import './Footer.css';

export function Footer() {
    return (
        <footer className="footer">
            <div className="gap-3 footer-main">
                <p className="footer-title">LLC «Мультимедиа Визион»</p>
                <p className="privacy">© Все права защищены</p>
            </div>
            <div className="d-flex gap-2">
                <p>VK</p>
                <p>Instagram</p>
            </div>
        </footer>
    );
}