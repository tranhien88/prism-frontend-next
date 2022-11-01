import { useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Form, Input } from "antd";
import { getLocalStorage, StorageKeys } from "src/network/storage";
import { isEmpty } from "lodash";
import { login, fingerPrint } from "src/network/services";
import md5 from "md5";
import { LoginRequest, User } from "@interfaces";
import { useLocalStorage } from 'react-use'

export default Login;

function Login() {
  const router = useRouter();
  const [, setUserToken] = useLocalStorage(StorageKeys.TOKEN)
  const [, setUserInfo] = useLocalStorage<User>(StorageKeys.USER_INFO)
  useEffect(() => {
    // redirect to home if already logged in
    const token = getLocalStorage<string>(StorageKeys.TOKEN);
    if (!isEmpty(token)) {
      router.push("/");
    }
  }, []);

  const onFinish = async (data: LoginRequest) => {
    const deviceId = await fingerPrint();
    const request: LoginRequest = {
      username: data.username,
      password: md5(data.password),
      platformType: 3,
      platformVersion: "1.0",
      pnsToken: deviceId,
      deviceId,
    };
    const resp = await login(request)
    const userDataResp = resp?.data?.responseData
    const error = resp?.data?.error
    if(userDataResp){
      setUserToken(userDataResp?.token?.access_token)
      setUserInfo(userDataResp?.user)
    }
  };

  return (
    <div className="w-full h-screen min-h-screen relative">
      <div className="flex flex-col justify-center items-center">
        <Form name="basic" onFinish={onFinish} autoComplete="off">
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
