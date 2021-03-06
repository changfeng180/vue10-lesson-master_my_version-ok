//接口 

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';   //设置默认的基本路径，不用每次都写这么长了 
// 增加默认的请求的路径
// 拦截器
axios.interceptors.response.use((res)=>{
  return res.data; // 在这里统一拦截结果 把结果处理成res.data
});

// 获取轮播图数据 , 返回的是一个promise对象，异步
export let getSliders = () =>{
  return axios.get('/sliders')    //或取，
};
// 获取热门图书接口
export let getHotBook = () =>{
  return axios.get('/hot');
};
// 获取全部图书
export let getBooks = () =>{
    return axios.get('/book');
};
// 删除某一本图书
export let removeBook = (id) =>{
  return axios.delete(`/book?id=${id}`);
};
// 获取某一本书
export let findOneBook = (id) =>{
  return axios.get(`/book?id=${id}`);
};
// 修改图书
/**
 * @param id 编号
 * @param data 数据 请求体发送
 * @returns {AxiosPromise<T>}
 */
export let updateBook = (id,data) =>{
  return axios.put(`/book?id=${id}`,data);
};
export let addBook = (data)=>{
  return axios.post('/book',data);
};



//所有的接口都放这里
