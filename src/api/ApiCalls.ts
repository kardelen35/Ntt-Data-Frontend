import { IUser } from "./../interfaces/User";
import axios from "axios";
import { EndPoints } from "./EndPoints";

interface IApiCalls {}
class ApiCalls implements IApiCalls {
  getUser = () => {
    return axios.get(EndPoints.User.getUser);
  };
  getUserById = (userId: any) => {
    return axios.get(EndPoints.User.getUserById + userId);
  };
  createUser = (data: any) => {
    return axios.post(EndPoints.User.createUser, data);
  };
  updateUserById = (id: any) => {
    return axios.get(EndPoints.User.updateUser + id);
  };
  updateUser = (userInfo: any, userId: any) => {
    return axios.put(EndPoints.User.updateUser + userId, userInfo);
  };
  deleteUser = (userId: number) => {
    return axios.delete(EndPoints.User.deleteUser + userId);
  };
}

export default new ApiCalls();
