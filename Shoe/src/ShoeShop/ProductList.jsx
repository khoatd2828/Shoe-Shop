import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BtShoeShopActions } from '../store/BtShoeShopReducer/slice'

export const ProductList = () => {
    const { productList } = useSelector((state) => state.BtShoeShopReducer)
    const dispatch = useDispatch()
  return (
    <div>
        <div className="row">
            {productList.map((val) => 
                <div className='col-4 mt-4' key={val.id}>
                    <div className="card">
                        <img src={val.image} alt="..." />
                        <div className="card-body">
                            <p>{val.name}</p>
                            <p>{val.price}</p>
                            <button className='btn btn-dark' onClick={() => {
                                dispatch(BtShoeShopActions.addProduct(val))
                            }}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}
