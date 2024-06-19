import {ProductionCard} from "../../../ui/ProductionCard/ProductionCard.tsx";
import Modal from "../../../store/modal.ts";
import {useEffect} from "react";
import users from "../../../store/users.ts";
import {observer} from "mobx-react-lite";
import uniqid from "uniqid";
import {production} from "../../../interfaces/api/production.ts";

export const ProductionsProfile = observer(() => {

    function create() {
        Modal.setCurrent("production");
    }

    useEffect(() => {
        users.getUserData();
        users.getFullUserData(users.userData.login);
    }, []);

    return (
        <>
            <div className="d-flex flex-wrap gap-4">
                {users.fullUserData.productions && (
                    <>
                        {users.fullUserData.productions.length === 0 && (
                            <h1>У вас пока нет активных продакшенов</h1>
                        )}

                        {users.fullUserData.productions.map((item: production) => {
                            return <ProductionCard title={item.title} key={uniqid()} id={item.id}/>
                        })}
                    </>
                )}
            </div>

            <button className="purple-btn mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    onClick={create}>Создать продакшен
            </button>
        </>
    )
});