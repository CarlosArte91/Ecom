import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import CardShopping from "./CardShopping";
import { getShopping } from "../store/actions";
import NavBarDetail from "./NavBarDetail";
import Footer from "./Footer";

export default function MisCompras() {
  const articulosShopping = useSelector((state) => state.shoppings);
  const [loading, setLoading] = useState(false)
  console.log(articulosShopping)
  const dispatch = useDispatch();

  useEffect(() => {
    const miscompras = sessionStorage.getItem("id")
    console.log("mi id", miscompras)
    dispatch(getShopping());
  }, [dispatch]);

  useEffect(() => {
    setLoading(true)
  }, [articulosShopping]);


  return (
    <div>
      <div>
        <NavBarDetail/>
      </div>
      <div className="flex flex-row flex-wrap justify-evenly gap-y-11 gap-x-6 px-2 mx-auto sm:mx-56">
      {articulosShopping.map((art) => {
        return <CardShopping key={art.id} title={art.title} image={art.image} />;
      })}
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
