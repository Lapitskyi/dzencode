import {type FC, useState} from "react";
import type {IProducts} from "../types/IProducts.ts";
import {formatDateShort} from "../utils/helpers/dateHelper.ts";
import {Delete} from "../assets/icons/Delete.tsx";
import Modal from "./Modal.tsx";

type CardProductProps = {
    product: IProducts,
    deleteProduct: () => void,
}

const CardProduct: FC<CardProductProps> = ({product, deleteProduct}) => {
    const [open, setOpen] = useState<boolean>(false)

    const deleteEl = () => {
        deleteProduct()
        setOpen(false)
    }
    return (
        <div className='d-flex gap-3 align-items-center p-2 border w-100 text-muted'>
            <div
                className={`custom-w-8 custom-h-8 d-block rounded align-self-center  ${product?.isNew ? 'cs-green-bg' : 'bg-black'}`}
            />
            <img
                className='d-flex  align-items-center justify-content-center  custom-w-66 custom-h-50  border p-2'
                src={product.photo}
                alt="photo"
            />
            <div
                className='custom-w-250 d-flex flex-column align-self-start align-items-start gap-1 text-muted truncate-single'>
                <div>
                    {product.title}
                </div>
                <div>{product.serialNumber}</div>
            </div>

            <div className='text-muted custom-w-70 text-end gap-2 text-nowrap'>
                <div>
                    from {formatDateShort(product.guarantee.start)}
                </div>
                <div>
                    to {formatDateShort(product.guarantee.end)}
                </div>
            </div>
            <div>{product?.isNew ? 'new' : 'used'}</div>
            <div className='text-muted custom-w-70 text-start text-nowrap'>
                {product.price.map((p) => (
                    <div key={p.symbol}>{p.value}{p.symbol}</div>
                ))}
            </div>
            <div className='truncate-multi align-self-start custom-w-250'>
                {product.specification}
            </div>

            <div className='text-start custom-w-70 text-nowrap'>
                {formatDateShort(product.date)}
            </div>

            <Delete
                role="button"
                onClick={() => setOpen(true)}
                className='d-flex align-self-center justify-content-center p-3 '
                size={12}
                color='gray'
            />
            {open
                && <Modal
                    isOpen={open}
                    onClose={() => setOpen(false)}
                    title='Are you sure you want to delete receipt?'
                    classFooter='cs-green-bg'
                    footer={
                        <>
                            <button
                                className="btn bg-transparent text-white px-4 py-1"
                                onClick={() => setOpen(false)}>
                                cancel
                            </button>
                            <button
                                onClick={() => deleteEl()}
                                className="btn d-flex align-items-center justify-content-center bg-white text-danger px-4 py-1 gap-2 rounded-4">
                                <Delete
                                    role="button"

                                    className='d-flex align-self-center justify-content-center'
                                    size={10}
                                    color='red'
                                />
                                Delete
                            </button>
                        </>
                    }
                >
                    <div className='d-flex align-items-center gap-3'>
                        <div
                            className={`custom-w-8 custom-h-8 d-block rounded align-self-center  ${product?.isNew ? 'cs-green-bg' : 'bg-black'}`}
                        />
                        <img
                            className='d-flex  align-items-center justify-content-center  custom-w-66 custom-h-50  border p-2'
                            src={product.photo}
                            alt="photo"
                        />
                        <div
                            className='custom-w-250 d-flex flex-column align-self-start align-items-start gap-1 text-muted truncate-single'>
                            <div>
                                {product.title}
                            </div>
                            <div>{product.serialNumber}</div>
                        </div>
                    </div>

                </Modal>}
        </div>


    )
}

export default CardProduct;