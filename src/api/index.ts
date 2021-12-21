import axios from 'axios';


const Axios = axios.create({
    baseURL: "http://service.x-dev.planetbetatech.com",
    responseType: 'json',
    withCredentials: false,
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
})


/**
 * 获取活动详情
 * @param {*} option
 */
 export function getActivityDetail(): Promise<any> {
    return Axios.get(`/wxapp/activity/getActivityDetail`)
}
