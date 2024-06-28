import Footer from "../../components/Footer/Footer.tsx";

interface Props {
    content: React.ReactNode;
    className?: string;
}

export function ModalSkeleton({content, className}: Props) {


    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className={className + " modal-dialog"}>
                <div className={className + " modal-content modal-logic"}>
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {content}
                    </div>
                    <div className="modal-footer">
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    );
}