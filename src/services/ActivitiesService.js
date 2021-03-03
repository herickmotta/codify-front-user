/* eslint-disable class-methods-use-this */
import api from "../config/api";

class ActivitiesService {
  async markDone(id, activityData, token) {
    try {
      const { data } = await api.post(`/activities/${id}`, activityData, {
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

  async markOff(id, activityData, token) {
    try {
      const { data } = await api.delete(`/activities/${id}`, {
        headers: { Authorization: `JWT ${token}` },
        data: activityData,
      });
      if (data) {
        return { success: data };
      }
      return null;
    } catch (error) {
      return error;
    }
  }

  async lastSeen(courseId, body, token) {
    try {
      const { data } = await api.put(
        `/users/courses/${courseId}/last-task-seen`,
        body,
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

export default new ActivitiesService();
