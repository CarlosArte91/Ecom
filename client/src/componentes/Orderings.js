import {useSelector, useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {
	orderByAZ,
	orderByPrice,
	orderByRating,
	getArticles,
	getSmartphones,
	getNotebooks,
	getAccesories,
	getTablets,
	orderBrand2,
	getbrands,
} from "../store/actions/index";
import {ASCENDENTE, DESCENDENTE, MAYOR, MENOR, MEJOR, PEOR} from "../Constants";
//import NavBar from "./NavBar";
const stylesDropdown = {
	backgroundColor: "white",
};
export default function Orderings() {
	const allArticle = useSelector((state) => state.articles);
	let brands = useSelector((state) => state.brand);
	//const allSmartPhones = useSelector((state) => state.smartphones);
	let dispatch = useDispatch();
	//const [loading, setLoading] = useState(false);
	const [order, setOrder] = useState("");

	/*     useEffect(() => {
        dispatch(getbrands());
        dispatch(getArticles());
    }, [dispatch]); */

	function handleSortAZ(e) {
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
	function handleBrand2(e) {
		e.preventDefault();
		dispatch(orderBrand2(e.target.value));
	}

	let BrandMap = brands.map((el) => {
		return [el.detail.marca, el];
	});
	let BrandMapArr = new Map(BrandMap);
	let unicos = [...BrandMapArr.values()];
	console.log("unicos", unicos);
	return (
		<div>
			<div className="flex flex-col">
				<div>
					<select
						className="btn btn-primary btn-sm m-2 no-animation"
						onChange={(e) => handleBrand2(e)}
					>
						<option value="All">Todas las Marcas</option>
						{unicos.map((brand) => (
							<option key={brand.id} value={brand.detail.marca}>
								{brand.detail.marca}
							</option>
						))}
					</select>
				</div>
				<button
					className="btn btn-sm btn-primary m-1"
					onClick={(e) => handleSortAZ(e)}
					value={ASCENDENTE}
				>
					AZ
				</button>
				<button
					className="btn btn-sm btn-primary m-1"
					onClick={(e) => handleSortAZ(e)}
					value={DESCENDENTE}
				>
					ZA
				</button>
				<button
					className="btn btn-sm btn-primary m-1"
					onClick={(e) => handleSortPrice(e)}
					value={MAYOR}
				>
					Menor precio
				</button>
				<button
					className="btn btn-sm btn-primary m-1"
					onClick={(e) => handleSortPrice(e)}
					value={MENOR}
				>
					Mayor precio
				</button>
				<button
					className="btn btn-sm btn-primary m-1"
					onClick={(e) => handleSortRating(e)}
					value={MEJOR}
				>
					Menos gustados
				</button>
				<button
					className="btn btn-sm btn-primary m-1"
					onClick={(e) => handleSortRating(e)}
					value={PEOR}
				>
					Mayor gustados
				</button>
				<button
					onClick={(e) => resetCharacters(e)}
					className="btn btn-sm md:btn-md btn-primary m-3"
				>
					Por defecto
				</button>
			</div>
		</div>
	);
}
