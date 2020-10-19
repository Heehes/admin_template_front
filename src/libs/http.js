import Vue from 'vue';
import axios from 'axios';
import { Message } from 'element-ui';
import { showLoading, hideLoading } from './loading';
class HttpRequest {
    getInsideConfig() {
        const config = {
            headers: {
                'X-Auth-Token': null
            }
        }
        return config
    }
    interceptors(instance, options) {
        // 请求拦截
        instance.interceptors.request.use(config => {
            // TODO...
            if (options.showLoading)
                showLoading()
            return config
        },
            (error) => {
                return error
            })

        // 响应拦截
        instance.interceptors.response.use(res => {
            if (options.showLoading)
                hideLoading()
            const { data } = res
            return data
        }, error => {
            /***** 接收到异常响应的处理开始 *****/
                console.log(error)
            if (error && error.response) {
                switch (error.response.status) {
                    case 400:
                        Message.error("400:错误请求");
                        break;
                    case 401:
                        Message.error("401:未授权，请重新登录");
                        break;
                    case 403:
                        Message.error("403:拒绝访问");
                        break;
                    case 404:
                        Message.error("404:请求错误,未找到该资源");
                        break;
                    case 405:
                        Message.error("405:请求方法未允许");
                        break;
                    case 408:
                        Message.error("408:请求超时");
                        break;
                    case 500:
                        Message.error("500:服务器端出错");
                        break;
                    case 501:
                        Message.error("501:网络未实现");
                        break;
                    case 502:
                        Message.error("502:网络错误");
                        break;
                    case 503:
                        Message.error("503:服务不可用");
                        break;
                    case 504:
                        Message.error("504:网络超时");
                        break;
                    case 505:
                        Message.error("505:http版本不支持该请求");
                        break;
                    default:
                        Message.error(`连接错误${error.response.status}`);
                }
            } else {
                // 超时处理
                if (JSON.stringify(error).includes("timeout"))
                    Message.error("连接服务器失败");
                else
                    Message.error("服务器响应超时，请刷新当前页");
            }
            if (options.showLoading)
                hideLoading()
            return error.response
        })
    }
    request(options) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance, options)
        return instance(options)
    }
}

const http = new HttpRequest()
export default http
