/* eslint-disable class-methods-use-this */
import api from "../config/api";

class CoursesService {
  async getAll(token) {
    try {
      const { data } = await api.get(`/courses/`, {
        headers: { Authorization: `JWT ${token}` },
      });
      if (data) {
        return { success: data };
      }
      return null;
    } catch (error) {
      return error;
    }
  }

  async getById(id) {
    try {
      const { data } = await api.get(`/courses/${id}`);
      if (data) {
        return { success: data };
      }
      return null;
    } catch (error) {
      return error;
    }
  }
}

export default new CoursesService();
