import React, { useCallback, useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import FilterProduct from "./FilterProduct";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [allProducts, setAllProducts] = useState("");
  const login = useSelector((state) => state.login.login);
  
  const fetchProducts = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://site-cae14-default-rtdb.firebaseio.com/products.json"
      );
      const data = await response.json();
      const loadedProducts = [];
      setAllProducts(loadedProducts);

      for (const key in data) {
        loadedProducts.push({
          id: key,
          title: data[key].title,
          price: data[key].price,
          img: data[key].img,
          brand: data[key].brand,
          rating: data[key].rating,
        });
      }

      setProducts(loadedProducts);
    } catch {
      setError(true);
    }

    setIsLoading(false);
  }, []);
  
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);


  const changeValue = (event) => {
    let optionValue = event.target.value;

    if (optionValue === "apple") {
      setProducts(allProducts.filter((product) => product.brand === "apple"));
    } else if (optionValue === "samsung") {
      setProducts(allProducts.filter((product) => product.brand === "samsung"));
    } else if (optionValue === "xiaomi") {
      setProducts(allProducts.filter((product) => product.brand === "xiaomi"));
    } else if (optionValue === "huawei") {
      setProducts(allProducts.filter((product) => product.brand === "huawei"));
    } else {
      setProducts(allProducts);
    }
  };

  return (
    <>
      {login && (
        <>
          <div className="mx-auto w-10/12 border-4 border-dashed border-blue-800 h-auto relative">
            {!isLoading && !error && (
              <>
                <FilterProduct changeValue={changeValue} />
                <div className="flex flex-wrap w-11/12 mx-auto my-4 justify-around">
                  {products.map((product) => (
                    <ProductItem
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      price={product.price}
                      img={product.img}
                      rating={product.rating}
                    />
                  ))}
                </div>
              </>
            )}
            {isLoading && (
              <p className="py-40 text-3xl text-blue-900 flex text-center justify-center">
                در حال بارگذاری محصولات ...
              </p>
            )}
            {products.length === 0 && !error && !isLoading && (
              <p className="py-40 text-3xl text-blue-900 flex text-center justify-center">
                محصولی پیدا نشد
              </p>
            )}
            {error && !isLoading && (
              <p className="py-40 text-3xl text-blue-900 flex text-center justify-center">
                در بارگذاری محصولات مشکلی به وجود آمد!
              </p>
            )}
          </div>
          <AddProduct />
        </>
      )}
      {!login && (
        <Route>
          <Redirect to="/login" />
        </Route>
      )}
    </>
  );
};

export default Product;
