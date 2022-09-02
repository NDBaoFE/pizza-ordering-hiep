import { post, get } from './ApiCaller'

const productApi = {
  login: (token) => {
    const url = '/auth/login'
    return post(url, { idToken: token }, {}, {})
  },
  startBattle: (id, token) => {
    const url = `/battle/start/${id}`
    return get(url, {}, { authorization: token })
  },
  getPizza: () => {
    const url = `/restaurants/1/menu?category=Pizza&orderBy=rank`
    return get(url, {}, {})
  },
}

export default productApi
