import { FaCartShopping } from "react-icons/fa6";
import { AiFillEye } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/Hooks";
import { addToCart } from "../../redux/features/CartSlice";
import { IProductTypes } from "../../redux/types/ProductsTypes";
import { setSelectedProduct } from "../../redux/features/ProductSelectSlice";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "../../redux/app/Store";
import {
  IWishlistItem,
  addToWishlist,
  removeFromWishlist,
} from "../../redux/features/WishlistSlice";

const ProductsCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state: RootState) => state.auth);
  const wishlist = useAppSelector((state: RootState) => state.wishlist);

  const addCart = (product: IProductTypes) => {
    dispatch(addToCart(product));
    toast.success("Item Added to cart");
  };

  const viewProductDetails = (product: IProductTypes) => {
    dispatch(setSelectedProduct(product)); // Set the selected product in the ProductSelectSlice
    navigate(`/product/${product.id}`);
  };

  const addToWishlistHandler = (product: IProductTypes) => {
    if (user.token === null || user.userDetails === null) {
      toast.error("Login to add to wishlist 💘");
      return;
    }
    const isAlreadyInWishlist = wishlist.items.some(
      (item) => item.id === product.id
    );

    if (isAlreadyInWishlist) {
      // If it's in the wishlist, remove it
      dispatch(removeFromWishlist(product.id));
      toast.info("Item Removed from wishlist");
    } else {
      // If it's not in the wishlist, add it
      const wishlistItem: IWishlistItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        brand: product.brand,
      };
      dispatch(addToWishlist(wishlistItem));
      toast.info("Item Added to wishlist");
    }
  };

  return (
    <>
      <div key={product.id} className="p-4 relative">
        <div className="group relative block overflow-hidden rounded-xl">
          <img
            src={product.images[0]}
            alt=""
            onClick={() => viewProductDetails(product)}
            className="cursor-pointer h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
            onError={(e) => {
              e.target.src =
                "https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg"; // Provide a fallback image URL
            }}
          />

          <div className="absolute top-4 end-4 z-100">
            <div className="flex flex-col gap-4 rounded-full bg-white p-1.5 text-gray-900 transition group-hover:text-gray-900/75">
              <AiFillEye
                onClick={() => viewProductDetails(product)}
                className="hover:text-accent text-2xl cursor-pointer"
              />
              <GiSelfLove
                onClick={() => addToWishlistHandler(product)}
                className={`hover:text-red-500 text-2xl cursor-pointer ${
                  wishlist.items?.some((item) => item.id === product.id)
                    ? "text-red-500"
                    : ""
                }`}
              />
            </div>
          </div>

          <div className="relative border border-gray-100 bg-white p-6">
            <span
              className={`whitespace-nowrap text-white px-3 py-1.5 text-xs font-medium ${
                product.featured === "New Arrivals"
                  ? "bg-green-600"
                  : product.featured === "Top Rated"
                  ? "bg-orange-500"
                  : product.featured === "Best Sellers"
                  ? "bg-pink-500"
                  : ""
              }`}
            >
              {product.featured}
            </span>

            <h3 className="mt-4 text-lg font-medium text-gray-900">
              {product.title}
            </h3>
            <p className="mt-1.5 text-sm text-gray-700">$ {product.price}</p>
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => addCart(product)}
                className="btn btn-primary btn-md text-white transition hover:scale-105"
              >
                Add to Cart <FaCartShopping />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
