import { ModalLogic } from '../../components/ModalLogic/ModalLogic';
import './Modal.css';

export function ModalWindow() {

    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title" id="exampleModalLabel">Cinema</h1>

                    </div>
                    <button type="button" className="btn-close btn-modal" data-bs-dismiss="modal" aria-label="Close"></button>
                    <ModalLogic />
                </div>
            </div>
        </div>
    );
}