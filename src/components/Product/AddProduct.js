import React, { useState } from "react";

const AddProduct = () => {
  const [showForm, setShowForm] = useState(false);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [rating, setRating] = useState("");
  const [brand, setBrand] = useState("");

  const showFormHandler = (event) => {
    event.preventDefault();
    setShowForm(true);
  };
  const titleChange = (event) => {
    setTitle(event.target.value);
  };
  const priceChange = (event) => {
    setPrice(event.target.value);
  };
  const imgChange = (event) => {
    setImg(event.target.value);
  };
  const ratingChange = (event) => {
    setRating(event.target.value);
  };
  const brandChange = (event) => {
    setBrand(event.target.value);
  };
  const clearInputValue = () => {
    setTitle("");
    setPrice("");
    setImg("");
    setRating("");
    setBrand("");
  };
  const addProduct = (event) => {
    event.preventDefault();
    if (title && price && rating && img && brand) {
      let productData = { title, price, rating, img, brand };

      fetch("https://site-cae14-default-rtdb.firebaseio.com/products.json", {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(productData),
      });

      alert("اضافه کردن محصول با موفقیت انجام شد :)");
    } else {
      alert("لطفا تمام ورودی هارا پر نمایید.");
    }

    clearInputValue();
  };

  return (
    <form className="mt-28 mx-auto text-center justify-center">
      {!showForm && (
        <div className="w-full">
          <button
            onClick={showFormHandler}
            className="border border-blue-400 bg-blue-800 w-8/12 text-center py-2 rounded-xl text-blue-100 transition-all duration-300 hover:bg-blue-100 hover:text-blue-800"
          >
            اضافه کردن محصول جدید
          </button>
        </div>
      )}
      {showForm && (
        <>
          <h1 className="mb-10 font-bold text-xl md:text-2xl text-blue-900">
            اضافه کردن محصول جدید
          </h1>
          <div className="flex justify-around w-12/12 text-center mx-auto flex-col space-y-4 mb-4">
            <div className="w-10/12 mx-auto">
              <input
                type="text"
                className="border border-blue-400 outline-blue-800 bg-blue-100 px-2 py-1 rounded-xl w-10/12 placeholder:float-right"
                placeholder="نام محصول ( جارو برقی )"
                value={title}
                onChange={titleChange}
              />
            </div>
            <div className="w-10/12 mx-auto">
              <input
                type="text"
                className="border border-blue-400 outline-blue-800 bg-blue-100 px-2 py-1 rounded-xl w-10/12 placeholder:float-right"
                placeholder="قیمت ( 1,000,000 )"
                value={price}
                onChange={priceChange}
              />
            </div>
            <div className="w-10/12 mx-auto">
              <input
                type="text"
                className="border border-blue-400 outline-blue-800 bg-blue-100 px-2 py-1 rounded-xl w-10/12 placeholder:float-right"
                placeholder="عکس ( https://image.com ) (300*300)"
                value={img}
                onChange={imgChange}
              />
            </div>
            <div className="w-10/12 mx-auto">
              <input
                type="number"
                className="border border-blue-400 outline-blue-800 bg-blue-100 px-2 py-1 rounded-xl w-10/12 placeholder:float-right"
                placeholder="نمره ( 1 تا 5 )"
                min="1"
                max="5"
                value={rating}
                onChange={ratingChange}
              />
            </div>
            <div className="w-10/12 mx-auto">
              <input
                type="text"
                className="border border-blue-400 outline-blue-800 bg-blue-100 px-2 py-1 rounded-xl w-10/12 placeholder:float-right"
                placeholder="برند ( samsung )"
                value={brand}
                onChange={brandChange}
              />
            </div>
          </div>
          <button
            onClick={addProduct}
            className="border mt-10 border-blue-400 bg-blue-800 w-5/12 text-center py-2 rounded-xl text-blue-100 transition-all duration-300 hover:bg-blue-100 hover:text-blue-800"
          >
            اضافه کردن
          </button>
        </>
      )}
    </form>
  );
};

export default AddProduct;
