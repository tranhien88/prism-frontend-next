import { BaseResponse, LoginRequest, LoginResponse } from "@interfaces";
import API from "../axios";
import { ENDPOINTS } from "../endpoints";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
const { post, put, get } = API;
export const fingerPrint = async function () {
  return FingerprintJS.load()
    .then((fp) => fp.get())
    .then((result) => {
      return result.visitorId;
    });
};
export const login = async (
  payload: LoginRequest
): Promise<BaseResponse<LoginResponse>> => {
  return post(ENDPOINTS.LOGIN_URL, payload);
};

export const logout = async (): Promise<BaseResponse<LoginResponse>> => {
  return post(ENDPOINTS.LOGOUT_URL);
};
