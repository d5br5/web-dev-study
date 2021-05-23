import React from "react";
import authService from "../fbase";
import {useHistory} from "react-router-dom";
function Profile(){

    const history = useHistory();
    function onLogOutClick(){

        authService.signOut();
        history.push("/");
    }
    return(
        <>
            <button onClick={onLogOutClick}>Log out</button>
        </>
    );
}

export default Profile;