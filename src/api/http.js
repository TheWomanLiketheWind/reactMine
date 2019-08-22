import Request from './index.js'
import { formatGetUri } from '../util/index.js'
const api = {}

api.login = (params) => Request.post(`/auth/oauth/token${formatGetUri(params)}`)

export default api