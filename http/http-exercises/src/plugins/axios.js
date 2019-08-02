import Vue from 'vue'
import axios from 'axios'

// if is accessing axios in a global way \/
// axios.defaults.baseURL = 'xxxxx'
// axios.defaults.headers.common['Authorization'] = 'abc123'
// axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'xxxxx',
            // headers: {
            //     get: {
            //         "Authorization": "abc123"
            //     }
            // }
            headers: {
                "Authorization": "abc123"
            }
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            // if (config.method == 'post') {
            //     config.method = 'put'
            // }
            console.log(config.method)
            return config
        }, error => Promise.reject(error))

        Vue.prototype.$http.interceptors.response.use(res => {
            // const array = []
            // for(let key in res.data) {
            //     array.push({ id: key, ...res.data[key] })
            //     // array.push({ id: key, name: res.data[key].name, email: res.data[key].email })
            // }

            // res.data = array;
            return res;
        }, error => Promise.reject(error))

    }
})