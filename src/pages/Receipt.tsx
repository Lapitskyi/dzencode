import Select from "../components/Select.tsx";
import {useEffect, useMemo, useState} from "react";
import {useDeleteProduct, useFetchProducts, useProducts} from "../store/selectors/productsSelector.ts";
import type {IProducts} from "../types/IProducts.ts";
import CardProduct from "../components/CardProduct.tsx";


const Receipt = () => {

    const products: IProducts[] = useProducts();
    const getProducts = useFetchProducts();
    const productDelete = useDeleteProduct();

    const [typeProduct, setTypeProduct] = useState<string>('all');
    const [specificationProduct, setSpecificationProduct] = useState<string>('all');

    const uniqueTypes = useMemo(() => {
        return ['all', ...new Set(products.map(item => item.type))]
    }, [products]);

    const uniqueSpecification = useMemo(() => {
        return typeProduct !== 'all'
            ? ['all', ...new Set(products
                ?.filter(item => item.type.toLowerCase() === typeProduct.toLowerCase())
                .map(s => s.specification))] : []
    }, [typeProduct, products])

    const filterProduct = useMemo(() => {

        const result = products?.filter(item => item.type.toLowerCase() === typeProduct.toLowerCase())

        if (typeProduct !== 'all' && specificationProduct === 'all' && result.length > 0) {
            return result
        }
        if (typeProduct !== 'all' && specificationProduct !== 'all' && result.length > 0) {
            return result.filter(
                (product) =>
                    product.specification.toLowerCase() === specificationProduct.toLowerCase()
            );
        }

        return products
    }, [typeProduct, specificationProduct, products])

    const deleteProduct = (id: number) => {
        productDelete(id)
        setSpecificationProduct('all')
    }

    useEffect(() => {
        setSpecificationProduct('all')
    }, [typeProduct])

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
                            options={uniqueTypes.map(item => ({value: item.toString(), label: item.toString()}))}
                            value={typeProduct}
                            onChange={(val) => setTypeProduct(String(val))}
                        />
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <div>Specification</div>
                        <Select
                            className='custom-w-250'
                            disabled={typeProduct === 'all'}
                            options={uniqueSpecification.map(item => ({
                                value: item.toString(),
                                label: item.toString()
                            }))}
                            value={specificationProduct}
                            onChange={(val) => {
                                console.log('value', val)
                                setSpecificationProduct(String(val))
                            }
                            }
                        />
                    </div>
                </div>
            </div>

            <div className="product-list-scroll w-100">
                <div className="d-flex flex-wrap gap-3">
                    {filterProduct?.map((product) => (
                        < CardProduct
                            key={product.id}
                            product={product}
                            deleteProduct={() => deleteProduct(product.id)}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}
export default Receipt