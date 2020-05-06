import request from '../utils/request'
const URL = 'http://localhost:3000'
export const getClassicList = (data = {}) => {
  return request.get(
    URL + '/api/applet/classic/query',
    data
  )
}