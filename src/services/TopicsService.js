/* eslint-disable class-methods-use-this */
import api from "../config/api";

class TopicsService {
  async getById(id, chapterId, topicId, token) {
    try {
      const { data } = await api.get(
        `/courses/${id}/chapters/${chapterId}/topics/${topicId}`,
        {
          headers: { Authorization: `JWT ${token}` },
        }
      );
      if (data) {
        return { success: data };
      }
      return null;
    } catch (error) {
      return error;
    }
  }
}

export default new TopicsService();
