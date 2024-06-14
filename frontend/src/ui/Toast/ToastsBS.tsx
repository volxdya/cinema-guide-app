import {Toast, ToastContainer} from "react-bootstrap";
import './Toast.css';
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
    type: string;
}

export function ToastsBS({children, type}: Props) {
    return (
        <div className="container-toastszxc">
            <ToastContainer position="bottom-end">
                <div className={`toast-${type}`}>
                    <Toast>
                        <Toast.Body>
                            {children}
                        </Toast.Body>
                    </Toast>
                </div>
            </ToastContainer>
        </div>
    );
}