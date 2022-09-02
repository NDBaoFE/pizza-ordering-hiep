import { post, get } from './ApiCaller'

const productApi = {
  placeOrder: (cart = [], restuarantId) => {
    const url = `/orders/`
    return post(url, { cart, restuarantId })
  },
  getOrder: (id) => {
    const url = `/orders/${id}`
    return get(url)
  },
}

export default productApi
