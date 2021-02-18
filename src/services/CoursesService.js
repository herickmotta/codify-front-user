/* eslint-disable no-console */
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

  async getAllCoursesStarted(token) {
    try {
      const { data } = await api.get(`/courses/users/started`, {
        headers: { Authorization: `JWT ${token}` },
      });
      if (data) {
        return data;
      }
      return null;
    } catch {
      return null;
    }
  }

  async getAllCoursesNotStarted(token) {
    try {
      const { data } = await api.get(`/courses/users/not-started`, {
        headers: { Authorization: `JWT ${token}` },
      });
      if (data) {
        return data;
      }
      return null;
    } catch {
      return null;
    }
  }

  async getById(id, token) {
    try {
      const { data } = await api.get(`/courses/${id}`, {
        headers: { Authorization: `JWT ${token}` },
      });
      console.log(data);
      if (data) {
        return { success: data };
      }
      return null;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getCourseProgress(courseId, token) {
    try {
      const { data } = await api.get(`/users/courses/${courseId}/progress`, {
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

  async getChaptersProgress(courseId, chapterId, token) {
    try {
      const { data } = await api.get(
        `/users/courses/${courseId}/chapters/${chapterId}/progress`,
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

  async getDataById(id, token) {
    try {
      const { data } = await api.get(`/courses/${id}/menu`, {
        headers: { Authorization: `JWT ${token}` },
      });
      console.log(data);
      if (data) {
        return { success: data };
      }
      return null;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default new CoursesService();
