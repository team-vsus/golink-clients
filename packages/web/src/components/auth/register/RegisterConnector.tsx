import React from "react";
import { RegisterController } from '@golink-clients/common'
import RegisterView from "./RegisterView";

const RegisterConnector = () => {
    return (
        <RegisterController>
            {(submits) => <RegisterView submits={submits} />}
        </RegisterController>
    )
}

export default RegisterConnector