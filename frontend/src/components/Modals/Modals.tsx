import Modal from "../../store/modal.ts";
import {observer} from "mobx-react-lite";
import './Modals.css';
import {Trailer} from "./Trailer/Trailer.tsx";
import {SearchFilmBody} from "./SearchFilmBody/SearchFilmBody.tsx";
import {AuthModal} from "./Account/AuthModal/AuthModal.tsx";
import {RegisterModal} from "./Account/RegisterModal/RegisterModal.tsx";
import {ModalSkeleton} from "../../ui/Modal/ModalSkeleton.tsx";
import {ProductionModal} from "./Production/ProductionModal.tsx";
import {FilmModal} from "./Film/FilmModal.tsx";


const Modals = observer(() => {


    switch (Modal.current) {
        case "trailer":
            return <ModalSkeleton content={<Trailer/>} className="trailer-modal"/>

        case "search":
            return <ModalSkeleton content={<SearchFilmBody/>}/>

        case "auth":
            return <ModalSkeleton content={<AuthModal/>}/>

        case "register":
            return <ModalSkeleton content={<RegisterModal/>}/>

        case "production":
            return <ModalSkeleton content={<ProductionModal/>}/>

        case "film":
            return <ModalSkeleton content={<FilmModal/>}/>
    }


});

export default Modals;