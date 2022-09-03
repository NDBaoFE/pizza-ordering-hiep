import { post, get } from './ApiCaller'

const productApi = {
  placeOrder: (cart = [], restuarantId) => {
    const url = `/orders/`
    return post(url, { cart, restuarantId })
  },
  startBattle: (id, token) => {
    const url = `/battle/start/${id}`
    return get(url, {}, { authorization: token })
  },
  getPizza: () => {
    const url = `/restaurants/1/menu?category=Pizza&orderBy=rank`
    return get(url, {}, {})
  },
  getOrder: (id) => {
    const url = `/orders/${id}`
    return get(url)
  },
}

export default productApi
