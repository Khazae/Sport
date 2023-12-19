import client, {setTokenToClient} from "@/api/index";
import {LS_TOKEN, LS_USERS} from "@/_types";
import store from "@/store";

const requests = {
  register(data) {
    return client.post('/api/public/register', data).then(res => res.data);
  },
  async login(data) {
    return await client.post('/api/public/login', data).then(res => {
      this.setAuthorization(data.email, data.password, res.data.data.token);
      store.commit('setUser', res.data.data.user);
    });
  },
  setAuthorization(email, password, token) {
    const authdata = window.btoa(email + ':' + encodeURIComponent(password));

    localStorage.setItem(LS_USERS, JSON.stringify(authdata));
    localStorage.setItem(LS_TOKEN, token);
    setTokenToClient(token);
    store.commit('setAuth', token);
  },
  getProfile() {
    return client.get('/api/public/user-info').then(res => {

      store.commit('setUser', res.data);
      return res.data;
    });
  },
  getToken() {
    return localStorage.getItem(LS_TOKEN);
  },


  getList(data) {
    return client.get('/api/public/news', {params: data}).then(res => res.data);
  },
  getCalendarResults(data) {
    return client.get('/api/public/calendar-results', {params: data}).then(res => res.data);
  },

};
export default requests;