import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const ProductItemPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://site-cae14-default-rtdb.firebaseio.com/products.json"
      );
      const data = await response.json();
      const loadedProducts = [];

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

      setProducts(loadedProducts.find((product) => product.id === params.id));
    } catch {
      setError(true);
    }

    setIsLoading(false);
  }, [params.id]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const login = useSelector((state) => state.login.login);

  return (
    <div style={{ minHeight: "80vh" }}>
      {login && (
        <div className="mx-auto w-11/12 lg:w-10/12 border-4 border-dashed border-blue-800 h-auto flex flex-col md:flex-row">
          {!isLoading && (
            <>
              <div className="w-full border md:w1/2 border-blue-200 h-auto flex justify-center items-center py-10">
                <img src={products.img} alt={products.title} className="w-96" />
              </div>
              <div className="w-full h-auto md:w1/2 flex items-center justify-around flex-col py-4">
                <h1 className="text-xl md:text-2xl text-blue-900">
                  {products.title}
                </h1>
                <h2 className="text-lg md:text-xl text-blue-900">
                  {products.price} تومان
                </h2>
              </div>
            </>
          )}
          {isLoading && (
            <p className="py-40 text-3xl text-blue-900 flex mx-auto text-center justify-center">
              در حال بارگذاری محصول ...
            </p>
          )}
          {error && !isLoading && (
            <p className="py-40 text-3xl text-blue-900 flex mx-auto text-center justify-center">
              در بارگذاری محصول مشکلی به وجود آمد!
            </p>
          )}
        </div>
      )}
      {!login && (
        <Route>
          <Redirect to="/login" />
        </Route>
      )}
    </div>
  );
};

export default ProductItemPage;
