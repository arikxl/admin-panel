import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Link } from 'react-router-dom';

const OrderList = ({ orders }) => {

    return (
        <div className='flex'>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Total</th>
                        <th>Paid</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {orders?.map((order) => (

                        <tr key={order._id}>
                            <td>
                                <b>{order.user.name}</b>
                            </td>
                            <td>
                                {order.user.email}
                            </td>
                            <td>
                                ${order.totalPrice}
                            </td>
                            <td>
                                {
                                    order.isPaid
                                        ? moment(order.paidAt).format("DD MMM YYYY")
                                        : 'Not Paid'
                                }
                            </td>
                            <td>
                                {moment(order.createdAt).format("DD MMM YYYY")}
                            </td>
                            <td>
                                {
                                    order.isDelivered
                                        ? moment(order.isDelivered).format("DD MMM YYYY")
                                        : 'Not Paid'
                                }
                            </td>
                            <td>
                                <Link to={`/order/${order._id}`}>
                                👁
                                </Link>
                            </td>
                        </tr>


                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default OrderList