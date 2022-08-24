import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  orderByAZ,
  orderByPrice,
  getArticles,
  getSmartphones,
  getNotebooks,
  getAccesories,
  getTablets,
} from "../store/actions/index";
import { ASCENDENTE, DESCENDENTE, MAYOR, MENOR } from "../Constants";

const stylesDropdown = {
  backgroundColor: "white",
}

export default function Orderings() {
  const allArticle = useSelector((state) => state.articles);
  const allSmartPhones = useSelector((state) => state.smartphones);
  let dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState("");



  function handleSortAZ(e) {
    e.preventDefault();
    dispatch(orderByAZ(e.target.value));
    // setCurrentPage(1)
    setOrder(e.target.value);
  }
  function handleSortPrice(e) {
    e.preventDefault();
    dispatch(orderByPrice(e.target.value));
    //setCurrentPage(1);
    setOrder(e.target.value);
  }
  return (
    <div className="flex flex-row">
      <div className="">
        <select
          style={ stylesDropdown }
          className="select select-accent w-40 max-w-xs m-5"
          onChange={ (e) => handleSortAZ(e) }
        >
          <option disabled selected>
            Ordenar por...
          </option>
          <option value={ ASCENDENTE }>AZ</option>
          <option value={ DESCENDENTE }>ZA</option>
        </select>
      </div>

      <div className="">
        <select
          style={ stylesDropdown }
          className="select select-accent w-40 max-w-xs m-5"
          onChange={ (e) => handleSortPrice(e) }
        >
          <option disabled selected>
            Ordenar por...
          </option>
          <option value={ MAYOR }>Menor precio</option>
          <option value={ MENOR }>Mayor precio</option>
        </select>
      </div>
    </div>
  );
}