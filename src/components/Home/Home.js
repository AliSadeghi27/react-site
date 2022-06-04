import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const Home = () => {
  const [firstName, setFirstName] = useState("");
  const getFirstName = useCallback(async () => {
    const userFirstName = await localStorage.getItem("name");
    setFirstName(userFirstName);
  }, []);
  useEffect(() => {
    getFirstName();
  }, [getFirstName]);
  const login = useSelector((state) => state.login.login);

  return (
    <div style={{minHeight: '80vh'}}>
      {login && (
        <div className="mx-auto lg:w-10/12 w-11/12 border-4 border-dashed border-blue-800 h-auto xl:h-96">
          <div className="flex justify-center my-6">
            <h2 className="font-bold text-2xl md:text-3xl">سلام {firstName}</h2>
          </div>
          <div className="w-11/12 mx-auto xl:pt-10">
            <p className="flex text-right text-sm pb-6 md:text-base lg:text-center">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
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

export default Home;
