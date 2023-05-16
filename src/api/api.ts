import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '61be3eef-56b5-439b-bddf-698a9c9e3f2f',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => res.data);
  },
  follow(userId: any) {
    return instance.post(`follow/${userId}`, {});
  },
  unfollow(userId: any) {
    return instance.delete(`follow/${userId}`);
  },
};

export const profileAPI = {
  getProfile(userId: any) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId: any) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status: any) {
    return instance.put('profile/status', { status });
  },
};

export const authAPI = {
  me() {
    return instance.get('auth/me');
  },
};
