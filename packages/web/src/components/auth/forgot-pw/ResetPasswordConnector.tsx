import { ResetPasswordController } from '@golink-clients/common'
import ResetPasswordView from "./ResetPasswordView";

const ResetPasswordConnector = () => {
    return (
        <ResetPasswordController>
            {(submit) => <ResetPasswordView submit={submit}/>}
        </ResetPasswordController>
    )
}

export default ResetPasswordConnector