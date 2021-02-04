/* eslint-disable class-methods-use-this */
import api from "../config/api";

class CoursesService {
  async getAll(userData) {
    try {
      const { data } = await api.get(`/api/v1/courses/`);
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
