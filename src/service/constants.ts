export const API_URL = ''

export const Endpoints = {
    products:'/products',
    productDelete:(id:number)=>`${Endpoints.products}/${id}`,
    orders: '/orders',
}