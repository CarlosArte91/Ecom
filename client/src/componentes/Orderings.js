import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  orderByAZ,
  orderByPrice,
  orderByRating,
  getArticles,
  orderBrand,
  getSmartphones,
  getNotebooks,
  getAccesories,
  getTablets,
  orderBrand2,
  getbrands
} from "../store/actions/index";
import { ASCENDENTE, DESCENDENTE, MAYOR, MENOR, MEJOR, PEOR } from "../Constants";
import NavBar from "./NavBar";

const stylesDropdown = {
  backgroundColor: "white",
}

export default function Orderings() {
  const allArticle = useSelector((state) => state.articles);
  const brands = useSelector((state)=> state.articles)
  const allSmartPhones = useSelector((state) => state.smartphones);
  let dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState("");
  // console.log("article:", allArticle)
  // console.log("Marca:", brands)

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  useEffect(() => {
    dispatch((getbrands));
  }, [dispatch]);
   
 function handleSortAZ(e){
    e.preventDefault();
    dispatch(orderByAZ(e.target.value));
    // setCurrentPage(1)
    setOrder(e.target.value);
  }
  function handleSortRating(e) {
    e.preventDefault();
    dispatch(orderByRating(e.target.value));
    // setCurrentPage(1)
    setOrder(e.target.value);
  }
  function handleSortPrice(e) {
    e.preventDefault();
    dispatch(orderByPrice(e.target.value));
    //setCurrentPage(1);
    setOrder(e.target.value);
  }
  function resetCharacters(e) {
    e.preventDefault();
    dispatch(getArticles());
  }
  function handleBrand(e){
    e.preventDefault();
    dispatch(orderBrand(e.target.value));
  }
  function handleBrand2(e){
    e.preventDefault();
    dispatch(orderBrand2(e.target.value));
  }

    let BrandMap = allArticle.map(el=>{
    return [el.marca,el]
    });
    var BrandMapArr = new Map(BrandMap); 
    let unicos = [...BrandMapArr.values()];

    // console.log (unicos);



  return (
    <div >
      <div className="flex flex-col">
        <button className="btn btn-outline btn-accent m-2" onClick={ (e) => handleSortAZ(e) }  value={ ASCENDENTE }>AZ</button>
        <button className="btn btn-outline btn-accent m-2" onClick={ (e) => handleSortAZ(e) }  value={ DESCENDENTE }>ZA</button>
        <button className="btn btn-outline btn-accent m-2" onClick={ (e) => handleSortPrice(e) }  value={ MAYOR }>Menor precio</button>
        <button className="btn btn-outline btn-accent m-2" onClick={ (e) => handleSortPrice(e) }  value={ MENOR }>Mayor precio</button>
        <button className="btn btn-outline btn-accent m-2" onClick={ (e) => handleSortRating(e) }  value={ MEJOR }>Menos gustados</button>
        <button className="btn btn-outline btn-accent m-2" onClick={ (e) => handleSortRating(e) }  value={ PEOR }>Mayor gustados</button>
        <button onClick={ (e) => resetCharacters(e) } className="btn btn-outline btn-accent m-5">Por defecto</button>
      </div>
        
        <div>            
            <select className="btn btn-outline btn-accent m-2" onChange={e => handleBrand2(e)}>  
              <option value="All">Todos las Marcas</option>     
              { 
                unicos.map((brand)=>(
                <option key={brand.id} value={brand.marca}>{brand.marca}</option> 
              ))
              }                       
          </select> 
      </div>  
    </div>
  );
}


