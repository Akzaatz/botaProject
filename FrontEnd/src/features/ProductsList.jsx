import { useSelector, useDispatch } from "react-redux";
import { getProductList } from "./products";

export default function ProductsList() {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  if (!products) {
    dispatch(getProductList());
  }

  console.log(products);
  return <div>ProductsList</div>;
}
