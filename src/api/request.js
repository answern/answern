import axios from 'axios';
import Vue from 'vue';

axios.defaults.baseURL = 'http://localhost:8080/api/ls/rest';
axios.defaults.headers.common['Authorization'] = "Basic bGlmZTplQmFvMTIz";
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export function fetch(url, pkg = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, { params: pkg }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err);
        })
    });

}

export function post(url, pkg = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, pkg).then(res => {
            resolve(res.data);
        }).catch(err => {
            console.log(err);
            reject(err);
        });
    })
}