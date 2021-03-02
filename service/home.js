import request from './network.js'
import { baseurl } from './baseconfig.js'
export function getMultidata() {
  return request({
    url: baseurl+'/api/v1/home/multidata'
  })
}

