import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ProductList } from './ProductList'
import { Cart } from './Cart'

export const BtShoeShop = () => {
  return (
    <div className='mt-5 container'>
        <div className="d-flex justify-content-between">
          <p className='fs-2' data-bs-toggle="modal" data-bs-target="#modalCart">Giỏ hàng</p>
        </div>
        <ProductList/>
        <Cart/>
    </div>
  )
}
