import { ForgotPasswordController } from '@golink-clients/common'
import ForgotPasswordView from "./ForgotPasswordView";

const ForgotPasswordConnector = () => {

    return (
        <ForgotPasswordController>
            {(submit) => <ForgotPasswordView submit={submit}/>}
        </ForgotPasswordController>
    )
}

export default ForgotPasswordConnector;