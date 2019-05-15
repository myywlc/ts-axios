import { AxiosRequestConfig } from './types'

export default function(config: AxiosRequestConfig) {
  const { data = null, url, method = 'get' } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  request.send(data)
}
