/* eslint-disable class-methods-use-this */
import api from "../config/api";

class ChaptersService {
  async getById(id, topicId, token) {
    try {
      const { data } = await api.get(`/chapters/${id}/topics/${topicId}`, {
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
}

export default new ChaptersService();
