import { getLocalStorage, StorageKeys } from "src/network/storage";
import { Account } from "@interfaces";
const userInfo: Account = getLocalStorage<Account>(StorageKeys.USER_INFO);
export const isTrainer = () => {
  if (userInfo?.roles?.length) {
    const role = userInfo.roles[0]
    return role === 'ROLE_TRAINER';
  }
  return false;
}

export const isStaff = () => {
  if (userInfo?.roles?.length) {
    const role = userInfo.roles[0]
    return role === 'ROLE_STAFF';
  }
  return false;
}