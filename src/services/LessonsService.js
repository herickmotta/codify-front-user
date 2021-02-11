/* eslint-disable class-methods-use-this */
import api from "../config/api";

class LessonsService {
  async markDone(id, lessonData, token) {
    try {
      const { data } = await api.post(`/lessons/${id}`, lessonData, {
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

  async markOff(id, lessonData, token) {
    try {
      const { data } = await api.delete(`/lessons/${id}`, {
        headers: { Authorization: `JWT ${token}` },
        data: lessonData,
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

export default new LessonsService();
