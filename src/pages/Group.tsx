import {
    useFetchOrders,
    useOrders,
    useRemoveProductOrder
} from "../store/selectors/productsSelector.ts";
import {useEffect, useState} from "react";
import type {IOrder} from "../types/IProducts.ts";
import {Cross} from "../assets/icons/Cross.tsx";
import CardProduct from "../components/CardProduct.tsx";
import CardOrder from "../components/CardOrder.tsx";

const Group = () => {
    const orders = useOrders()
    const getOrders = useFetchOrders()
    const removeProductOrder = useRemoveProductOrder();

    const [currentOrder, setCurrentOrder] = useState<IOrder | undefined>(undefined)

    const deleteProduct = (orderId: number, productId: number) => {
        removeProductOrder(orderId, productId)
        if (!currentOrder) return;

        const res ={
            ...currentOrder,
            products:currentOrder.products.filter(item=>item.id !== productId)
        }

        if(!res.products?.length) {
            setCurrentOrder(undefined)
            return;
        }

        setCurrentOrder(res)
    }

    useEffect(() => {
        getOrders()
    }, [])

    return (
        <div className="d-flex flex-lg-row flex-column w-100 align-items-start gap-4 p-2 p-md-4">
            <div className='d-flex flex-column gap-2 col-12  col-lg-4'>
                {orders?.map((order) => (
                    order.products?.length ? <CardOrder
                        key={order.id}
                        order={order}
                        currentOrder={currentOrder}
                        setCurrentOrder={() => setCurrentOrder(order)}
                    /> : null
                ))}
            </div>
            {currentOrder &&
                <div
                    className='d-flex flex-column  col-12  col-lg-5 gap-2 p-2 border  position-relative '
                >
                    <Cross
                        onClick={() => setCurrentOrder(undefined)}
                        size={14}
                        color="black"
                        className='position-absolute top-0 start-100 translate-middle rounded-circle bg-light p-2 d-flex align-items-center justify-content-center'
                    />
                    <h2>{currentOrder.title}</h2>
                    <div className='d-flex flex-column gap-2 text-muted'>
                        {currentOrder.products.map((product) => (
                            < CardProduct
                                key={product.id}
                                shorCard
                                product={product}
                                deleteProduct={() => deleteProduct(currentOrder.id, product.id)}
                            />
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}
export default Group