/* eslint-disable class-methods-use-this */
import api from "../config/api";

class UserService {
  async signUp(userData) {
    try {
      const { data } = await api.post(`/users/signup`, userData);
      if (data) {
        return { success: data };
      }
      return null;
    } catch (error) {
      return error;
    }
  }

  async signIn(userData) {
    try {
      const { data } = await api.post(`/users/signin`, userData);
      if (data) {
        return { success: data };
      }
      return null;
    } catch (error) {
      return error;
    }
  }

  async logOut(userToken) {
    try {
      const { data } = await api.post(
        `/users/logout`,
        {},
        {
          headers: { Authorization: `JWT ${userToken}` },
        }
      );
      if (data) {
        return true;
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  async sendEmailToRecoverPassword(email) {
    try {
      const { data } = await api.post(`/users/recover-password`, email);
      if (data) {
        return data;
      }
      return null;
    } catch (error) {
      return error.response.status;
    }
  }

  async redefinePassword(body) {
    try {
      const { data } = await api.put(`/users/redefine-password`, body);
      if (data) {
        return data;
      }
      return null;
    } catch (error) {
      if (error.response.status === 422) return error.response.data;

      return error.response.status;
    }
  }

  async editProfile(body, userToken) {
    try {
      const { data } = await api.put(`/users/edit-profile`, body, {
        headers: { Authorization: `JWT ${userToken}` },
      });
      if (data) {
        return { success: data };
      }
      return null;
    } catch (error) {
      return error;
    }
  }

  async editAvatar(body, userToken) {
    try {
      const { data } = await api.put(`/users/edit-profile/image`, body, {
        headers: {
          Authorization: `JWT ${userToken}`,
          "Content-Type": `multipart/form-data`,
        },
      });
      if (data) {
        return { success: data };
      }
      return null;
    } catch (error) {
      return error;
    }
  }
}

export default new UserService();
