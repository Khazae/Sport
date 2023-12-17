import client from "@/api/index";

const requests = {
    getList(data) {
        return client.get('/api/public/news', {params: data}).then(res => res.data);
    },
    getCalendarResults(data) {
        return client.get('/api/public/calendar-results', {params: data}).then(res => res.data);
    }
};
export default requests;