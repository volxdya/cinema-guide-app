import {ProductionCard} from "../../../ui/ProductionCard/ProductionCard.tsx";
import Modal from "../../../store/modal.ts";

export function Productions() {

    function create() {
        Modal.setCurrent("production");
    }

    return (
        <>
            <h1>У вас пока нет активных продакшенов</h1>
            <div className="d-flex flex-wrap gap-4">
                <ProductionCard/>
            </div>
            <button className="purple-btn mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={create}>Создать продакшен</button>
        </>
    )
}