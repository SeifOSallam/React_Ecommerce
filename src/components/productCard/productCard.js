import { useDispatch } from 'react-redux';
import './productCard.css'
import { Link } from 'react-router-dom';
import { addCartItem } from '../../store/slices/cartSlice';

function ProductCard(props){
    const dispatch = useDispatch();
    const addItemToCart = (item) => {
        dispatch(addCartItem(item))
    }
    return(
        <div className="w-25 p-4" style={{height: "400px"}}>
            <div className="card shadow border-0 h-100 position-relative">
                {
                    props.product.stock > 0?
                    <span id="instock" className="text-white position-absolute">In Stock</span>:
                    <span id="outstock" className="text-white position-absolute">Out Of Stock</span>
                }
                <Link to={ `/products/${props.id}`} className="h-50" >
                    <img src={props.product.thumbnail} className="card-img-top h-100" alt=""/>
                </Link>
                <div className="card-body position-relative p-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">{props.product.title}</h5>
                        <div className="d-flex flex-column">
                            <span className="card-text ogprice">
                                {props.product.price}$
                            </span>
                            <span className="card-text">
                                {(props.product.price - (props.product.price * props.product.discountPercentage/100)).toFixed(1)}$
                            </span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <button className="mt-5" id="addtocart" onClick={() => addItemToCart(props.product)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;