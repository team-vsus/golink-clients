import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";

type LoginProps = {
    username: string;
    password: string;
}

type Props = {
    submit: (values: LoginProps) => any

}

const LoginView: React.FC<Props> = ({ submit }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <View
                style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <TextInput
                    style={{
                        height: 40,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                    }}
                    onChangeText={setUsername}
                    value={username}
                />

                <TextInput
                    style={{
                        height: 40,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                    }}
                    onChangeText={setPassword}
                    value={password}
                />
                <Button title="Submit" onPress={() => submit({ username, password })} />
            </View>
        </>
    );
}

export default LoginView;