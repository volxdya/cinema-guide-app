import {LogOut} from "../LogOut/LogOut.tsx";
import {EditProfile} from "../Edit/EditProfile.tsx";
import {UserData} from "../UserData/UserData.tsx";

export function Settings() {
    return (
        <>
            <UserData/>
            <div className="d-xl-block text-xl-start text-center">
                <EditProfile/>
                <LogOut/>
            </div>
        </>
    )
}