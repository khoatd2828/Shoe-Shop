import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BtShoeShopActions } from '../store/BtShoeShopReducer/slice'

export const Cart = () => {
    const {carts} = useSelector((state) => state.BtShoeShopReducer)
    const dispatch = useDispatch()
  return (
    <div>
        <div className="modal" id='modalCart' tabIndex={-1}>
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Mã sản phẩm</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Hình ảnh</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Tổng</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    carts.map((val) => {
                                        return (
                                        <tr key={val.id}> 
                                            <td>{val.id}</td>
                                            <td>{val.id}</td>
                                            <td>{val.name}</td>
                                            <td>
                                                <img width={100} height={100} src={val.image} alt="..." />
                                            </td>
                                            <td>{val.price}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => {
                                                    dispatch(BtShoeShopActions.handleCartQuantity({ id: val.id, quantityChange: -1 }))
                                                }}>-</button>
                                                <span className="mx-3">{val.cartQuantity}</span>
                                                <button className="btn btn-success" onClick={() => {
                                                    dispatch(BtShoeShopActions.handleCartQuantity({ id: val.id, quantityChange: 1 }))
                                                }}>+</button>
                                            </td>
                                            <td>{val.price * val.cartQuantity}</td>
                                            <td>
                                                <button className="btn-outline-dark" onClick={() => {
                                                    dispatch(BtShoeShopActions.deleteProduct(val.id))
                                                    console.log(val.id)
                                                }}>X</button>
                                            </td>
                                        </tr>
                                    )})
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
