import React from "react";
import { LoginController } from '@golink-clients/common'
import RegisterView from "./RegisterView";

const RegisterConnector = () => {
    return (
        <LoginController>
            {(submit) => <RegisterView submit={submit}/>}
        </LoginController>
    )
}

export default RegisterConnector