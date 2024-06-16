import Modal from "../../store/modal.ts";
import {observer} from "mobx-react-lite";
import './Modals.css';
import {ModalSkeleton} from "./ModalSkeleton.tsx";
import {Trailer} from "./Trailer/Trailer.tsx";
import {SearchFilmBody} from "./SearchFilmBody/SearchFilmBody.tsx";
import {AuthModal} from "./Account/AuthModal/AuthModal.tsx";
import {RegisterModal} from "./Account/RegisterModal/RegisterModal.tsx";

export const Modals = observer(() => {

    switch (Modal.current) {
        case "trailer":
            return <ModalSkeleton content={<Trailer/>}/>

        case "search":
            return <ModalSkeleton content={<SearchFilmBody/>}/>

        case "auth":
            return <ModalSkeleton content={<AuthModal/>}/>

        case "register":
            return <ModalSkeleton content={<RegisterModal/>}/>
    }
});