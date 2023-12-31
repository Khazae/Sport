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
  getNewsItem(id) {
    return client.get('/api/public/news/' + id).then(res => res.data);
  },
  getOtherNews(data) {
    return client.get('/api/public/news-other', {params: data}).then(res => res.data);
  },
  getCalendarResults(data) {
    return client.get('/api/public/calendar-results', {params: data}).then(res => res.data);
  },
  getAthleteList(data) {
    return client.get('/api/public/athlete', {params: data}).then(res => res.data);
  },
  getFiles(data) {
    return client.get('/api/public/files', {params: data}).then(res => res.data);
  },
  applicationAction(data, id) {
    return client.post('/api/public/application-action/' + id, data).then(res => res.data);
  },
  fileUpload(data) {
    return client.post('/api/public/file_upload', data, {headers: {'content-type': 'multipart/form-data'}}).then(res => res.data)
  },
  createAthlete(data) {
    return client.post('/api/public/athlete', data).then(res => res.data)
  },
  applicationCalendarList() {
    return client.get('/api/public/application-calendar-list').then(res => res.data)
  },
  applicationList(data) {
    return client.get('/api/public/application-list', {params: data}).then(res => res.data)
  },
  applicationCreate(data) {
    return client.post('/api/public/application-create', data).then(res => res.data)
  },
  setPlace(data) {
    return client.post('/api/public/application-place', data).then(res => res.data);
  },
  getGallery() {
    return client.get('/api/public/gallery').then(res => res.data);
  },
  getVideoGallery() {
    return client.get('/api/public/video-gallery').then(res => res.data)
  },
  getColorScheme() {
    return client.get('/api/public/color-scheme').then(res => res.data);
  }


};
export default requests;