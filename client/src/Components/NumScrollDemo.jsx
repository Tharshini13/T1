
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { ProductService } from './ProductService';

export default function NumScrollDemo() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'bg-success';

            case 'LOWSTOCK':
                return 'bg-warning';

            case 'OUTOFSTOCK':
                return 'bg-danger';

            default:
                return null;
        }
    };

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3" style={{width:"18rem"}}>
                <div className="mb-3">
                    <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} className="w-3 shadow-2" />
                </div>
                <div>
                    <h4 className="mb-1" style={{fontSize:"15px"}}>{product.name}</h4>
                    <h6 className="mt-0 mb-3" style={{fontSize:"15px"}}>${product.price}</h6>
                    <h6 className={product.inventoryStatus == "INSTOCK" ? "bg-success text-white badge":"bg-warning text-white badge"}>{product.inventoryStatus}</h6>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={products} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    )
}
        