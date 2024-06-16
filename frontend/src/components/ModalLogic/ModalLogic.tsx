import { useState } from "react";
import { AuthModal } from "./Account/AuthModal/AuthModal";
import { RegisterModal } from "./Account/RegisterModal/RegisterModal";

export function ModalLogic() {
    const [current, setCurrent] = useState("auth");

    if (current === "auth") {
        return (
            <AuthModal setCurrent={setCurrent}/>
        );
    } else if (current === "register") {
        return (
            <RegisterModal setCurrent={setCurrent}/>
        )
    }

}
