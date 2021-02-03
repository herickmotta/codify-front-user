/* eslint-disable class-methods-use-this */
import api from "../config/api";

class SignInService {
  async signIn(userData) {
    try {
      const { data } = await api.post(`/api/v1/users/signin`, userData);
      if (data) {
        return { success: data };
      }
      return null;
    } catch (error) {
      return error;
    }
  }
}

export default new SignInService();
