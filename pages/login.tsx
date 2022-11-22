import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button, Form, Input } from "antd";
import { getLocalStorage, StorageKeys } from "src/network/storage";
import { isEmpty } from "lodash";
import { login, fingerPrint } from "src/network/services";
import md5 from "md5";
import { LoginRequest, Account } from "@interfaces";
import { useLocalStorage } from 'react-use'
import axios from 'axios';

export default Login;

function Login() {
  const router = useRouter();
  const [, setUserToken] = useLocalStorage(StorageKeys.TOKEN)
  const [, setUserInfo] = useLocalStorage<Account>(StorageKeys.USER_INFO)
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    // redirect to home if already logged in
    const token = getLocalStorage<string>(StorageKeys.TOKEN);
    if (!isEmpty(token)) {
      router.push("/");
    }
  }, []);

  const API_URL = process.env.NEXT_PUBLIC_API_HOST_URL;

  const onFinish = async (data: LoginRequest) => {
    setLoading(true)
    const deviceId = await fingerPrint();
    const request: LoginRequest = {
      platformType: 3,
      platformVersion: "1.0",
      deviceToken: deviceId,
      deviceId,
    };
    const headers = {
      'Content-Type': 'application/json',
      'X-Auth-Username': data.username,
      'X-Auth-Password' : md5(data.password)
    }
    
    axios.post(API_URL+'/login', request, {
      headers: headers
    })
    .then((response) => {
      const userDataResp = response?.data?.responseData
      if(userDataResp){
        setUserToken(userDataResp?.token)
        setUserInfo(userDataResp?.account)
        router.push("/")
      }
      setLoading(false)
    })
    .catch((error) => {
      
    })
    
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
            <Button type="primary" loading={loading} htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
