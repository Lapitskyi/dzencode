import type {FC} from "react";
import {List} from "../assets/icons/List.tsx";
import {formatDateShort, formatTime} from "../utils/helpers/dateHelper.ts";
import {Arrow} from "../assets/icons/Arrow.tsx";
import type {IOrder} from "../types/IProducts.ts";


type CardOrderProps = {
    order: IOrder;
    currentOrder: IOrder | undefined;
    setCurrentOrder: () => void;
}

const CardOrder: FC<CardOrderProps> = ({order, currentOrder, setCurrentOrder}) => {
    return (
        <div
            className='d-flex align-items-center w-100 gap-3 py-2 pe-4 ps-2 border flex-fill position-relative cursor-pointer'
            onClick={() => setCurrentOrder()}
        >
            <List
                size={14}
                color="gray"
                className='rounded-circle border p-2 d-flex align-items-center justify-content-center'
            />
            <div className='d-flex flex-column align-items-start text-muted'>
                <div className='fs-6 text-muted'>{order.products?.length || 0}</div>
                <div> Products</div>
            </div>
            <div className='d-flex flex-column align-items-start text-muted flex-fill'>
                <div>{formatTime(order.date)}</div>
                <div>{formatDateShort(order.date)}</div>
            </div>
            {currentOrder?.id === order.id
                && <Arrow
                    size={14}
                    color="gray"
                    className="bg-light px-1 d-flex align-items-center justify-content-center h-100 position-absolute end-0 top-50 translate-middle-y"
                />
            }
        </div>
    )
}
export default CardOrder;