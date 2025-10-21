import Select from "../components/Select.tsx";
import {useEffect, useState} from "react";
import {useFetchProducts, useProducts} from "../store/selectors/productsSelector.ts";
import type {IProducts} from "../types/IProducts.ts";

const options = [
    {value: 1, label: "One"},
    {value: 2, label: "Two"},
    {value: 3, label: "Three"},
];

const Receipt = () => {
    const [typeProduct, setTypeProduct] = useState<string>('one');
    const [specificationProduct, setSpecificationProduct] = useState<string>('one');
    const products: IProducts[] = useProducts();
    const getProducts = useFetchProducts();

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className='d-flex flex-column justify-content-center align-items-start gap-5 p-5'>
            <div className='d-flex justify-content-start align-items-center gap-5'>
                <h2>Products <span>  / 25</span></h2>
                <div className='d-flex align-items-start  gap-5'>
                    <div className='d-flex align-items-center gap-2'>
                        <div>Type</div>
                        <Select
                            className='select'
                            options={options}
                            value={typeProduct}
                            onChange={(val) => setTypeProduct(String(val))}
                        />
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <div>Specification</div>
                        <Select
                            className='select'
                            options={options}
                            value={specificationProduct}
                            onChange={(val) => setSpecificationProduct(String(val))}
                        />
                    </div>
                </div>
            </div>


            <div>
                {products.map((product) => (
                    <div key={product.id}> {product.title}</div>
                ))}
            </div>
        </div>
    )
}
export default Receipt