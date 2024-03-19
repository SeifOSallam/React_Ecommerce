import { useParams } from 'react-router-dom';
import './productDetails.css'
import { useEffect, useState } from 'react';
import Loader from '../loader/loader';

function ProductDetails(props){
    const productID = useParams().productID;
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productID}`)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            setProduct(res)
            setLoading(false)
        })
    })

    if (loading) {
        return(
        <div>
            <Loader></Loader>
        </div>);
    }
    return(
        <div class="container main mt-5">
            <div class="row h-100">
                <div class="col border d-flex flex-column h-100 p-0">
                    <div class="h-75 img">
                        <img class="h-100 w-100" src={product.thumbnail} alt=""/>
                    </div>
                    <div class="container h-100">
                        <div class="row h-100">
                            <div class="col img">
                                <img class="h-100 w-100" src={product.images[0]} alt=""/>
                            </div>
                            <div class="col img">
                                <img class="h-100 w-100" src={product.images[1]} alt=""/>
                            </div>
                            <div class="col img">
                                <img class="h-100 w-100"src={product.images[2]} alt=""/>
                            </div>
                            <div class="col img">
                                <img class="h-100 w-100" src={product.images[3]} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col ">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <div>
                        <i class="fa fa-star orangeElements"></i>
                        <i class="fa fa-star orangeElements"></i>
                        <i class="fa fa-star orangeElements"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <div class="py-4 border-top border-bottom">
                        <h2>{product.price.toFixed(2)}$</h2>
                    </div>
                    {
                        product.stock > 0?
                        <span id="instock" class="text-white">In Stock</span>:
                        <span id="outstock" class="text-white">Out Of Stock</span>
                    }
                    <br/>
                    <br/>
                    <p>More Information</p>
                    <div class="container w-50 ms-2 p-0">
                        <div class="row">
                            <div class="col minfo graybg w-100 text-center">
                                {product.category}
                            </div>
                            <div class="col minfo graybg w-100 ms-3 text-center">
                                {product.brand}
                            </div>
                        </div>
                    </div>
                    <div class="d-flex mt-3 align-items-center">
                        <div class="d-flex align-items-center plusminusbtncntnr graybg">
                            <div class="border-0 graybg h-100 flex-fill d-flex justify-content-center plusminusbtn">
                                <button class="border-0 graybg" click = "decreaseNum(number.innerText)"><i class="fas fa-minus"></i></button>
                            </div>
                            <div class="graybg h-100 d-flex justify-content-center flex-fill">
                                <span class="graybg" id="number">1</span>
                            </div>
                            <div class="border-0 graybg h-100 flex-fill d-flex justify-content-center plusminusbtn">
                                <button class="border-0 graybg" click = "increaseNum(number.innerText)"><i class="fas fa-plus"></i></button>
                            </div>
                        </div>
                        {
                            product.stock > 0?
                            <div class="d-flex flex-column ms-3">
                                <span>Only <span className='orangeElements'>{product.stock} Items</span> Left!</span>
                                <span>Don't miss it</span>
                            </div>:""
                        }
                    </div>
                    <div class="container w-75 ms-2 p-0 mt-3">
                        <div class="row">
                            <div class="col buy clickable minfo graybg w-100 text-center">
                                Buy Now
                            </div>
                            <div class="col addcart clickable minfo w-100 ms-3 text-center"
                            click = "addToCart()">
                                Add to Cart
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProductDetails;