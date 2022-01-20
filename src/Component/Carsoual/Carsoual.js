import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

export default function Carsoual({products}) {
    // console.log("propsCarsoual", products);
    const products1 = products.slice(0, 5);
    const products2 = products.slice(6, 12);
    // console.log("products1", products1);
    // console.log("products2", products2);

    // 60   60/10=6    =>   arrays=product.length/6=10    product.map((item, index)=> )
    //for(0, i<arrays,1){  arr.push(products.slice(i, x) ) 0 i+5  5 x+5}
    //arr[0].map(item =>)

    let arrlnth = products?.length / 6;
    let arr = [];
    let l = 0, x = 6;
    for (let i = 0; i < arrlnth; i++) {
        arr.push(products.slice(l, x));
        l += 6;
        x += 6;
    }

    // console.log("arr", arr);


    return (
        <>
            <div
                id="secondcarsoul"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row mt-3">
                            {/* { console.log("arr[0]", arr[0])} */}
                        
                            {
                                arr[0]?.map((item, index) => {
                                return (
                                    <div className="col-md-2 mb-4" key={index}>
                                        <ProductCard product={item} />
                                        {/* {console.log("item", item)} */}
                                    </div>
                                );
                            })}

                    </div>
                    </div>
                    <div className="carousel-item">

                        <div className="row mt-3">

                            {
                                arr[1]?.map((item, index) => {
                                    return (
                                        <div className="col-md-2 mb-4" key={index}>
                                            <ProductCard product={item} />
                                            {/* {console.log("item", item)} */}
                                        </div>
                                    );
                                })}

                        </div>

                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#secondcarsoul"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#secondcarsoul"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
