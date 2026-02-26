import api from "./api";

const reportService = {
  /**
   * Submit a report against a user
   * @param {Object} data - { reportedUserId, barterId, reason, description }
   */
  submitReport: async (data) => {
    const response = await api.post("/reports", data);
    return response.data;
  },
};

export default reportService;
