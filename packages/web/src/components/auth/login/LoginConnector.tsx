import React from "react";
import { LoginController } from '@golink-clients/common'
import LoginView from "./LoginView";

const LoginConnector = () => {

    return (
        <LoginController>
            {(submit) => <LoginView submit={submit}/>}
        </LoginController>
    )
}

export default LoginConnector