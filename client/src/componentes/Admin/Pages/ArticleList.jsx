import { useEffect, useState } from "react";
import axios from "axios";
//import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, history, useHistory } from "react-router-dom";
import s from "../Pages/articleList.module.css";
import {
  getAllArticles,
  deleteArticle,
  deleteArticleLogic,
  editArticle,
} from "../../../../src/store/actions/index.js";

export default function ArticleList() {
<<<<<<< HEAD
	const [articulo, setArticulo] = useState([]);
	const [tablaArticulo, setTablaArticulo] = useState([]);
	const [busqueda, setBusqueda] = useState("");
	const [habilitado, setHabilitado] = useState("");
	let dispatch = useDispatch(); //
	let allArticle = useSelector((state) => state.articles);
	let user = sessionStorage;
	const peticionGet = async () => {
		await axios
			.get("http://localhost:3001/delete")
			.then((response) => {
				setArticulo(response.data);
				setTablaArticulo(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};
=======
  const [articulo, setArticulo] = useState([]);
  const [tablaArticulo, setTablaArticulo] = useState([]);
  const [busqueda, setBusqueda] = useState("");
>>>>>>> 92308e701159c3909aa59d11dfa46be083091bd5

  const refreshPage = () => {
    window.location.reload();
  };
  let dispatch = useDispatch(); //
  let allArticle = useSelector((state) => state.articles);
  let user = sessionStorage;
  const peticionGet = async () => {
    await axios
      .get("http://localhost:3001/article")
      .then((response) => {
        setArticulo(response.data);
        setTablaArticulo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tablaArticulo.filter((elemento) => {
      if (
        elemento.title
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.title
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setArticulo(resultadosBusqueda);
  };

  useEffect(() => {
    peticionGet();
  }, []);

<<<<<<< HEAD
	function handleClickInhab(id) {
		try {
			dispatch(deleteArticleLogic(id));

			alert("Hecho!");
		} catch (error) {
			console.log(error);
		}
	}
=======
  function handleClickDelete(id) {
    try {
      dispatch(deleteArticle(id));
      allArticle = allArticle.filter((a) => a.id !== id);
      console.log(id);
      alert(`El Articulo con id: ${id} fue Eliminado!`);
    } catch (error) {
      console.log(error);
    }
  }
>>>>>>> 92308e701159c3909aa59d11dfa46be083091bd5

  function handleClickInhab(id) {
    try {
      dispatch(deleteArticleLogic(id));
      alert("Hecho!");
      // history.push('/admin/articulos/');
      refreshPage();
    } catch (error) {
      console.log(error);
    }
  }

<<<<<<< HEAD
	return (
		<div>
			{
				<h2 className="decoration-black	 text-2xl">
					Administrador de Artículos
				</h2>
			}
			<br />
			<div>
				<input
					value={busqueda}
					className="input input-bordered  text-white h-9 w-28 sm:w-full sm:h-12"
					placeholder="Búsqueda por nombre"
					onChange={handleChange}
				/>
			</div>
			<div>
				<div className={s.table}>
					<br />
					<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>id</th>
								<th>Marca</th>
								<th>Modelo</th>
								<th>Habilitado</th>
								<th>Stock</th>
								<th>Price</th>
								<th>Action</th>
								<th>Action</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{articulo &&
								articulo.map((art) => {
									return (
										<tr>
											<td>{art.title}</td>
											<td>{art.id}</td>
											<td>{art.detail.marca}</td>
											<td>{art.detail.modelo}</td>
											<td>
												{art.disable == false
													? "En Venta"
													: "Pendiente"}
											</td>
											<td>{art.stock}</td>
											<td>{art.price}</td>
											<td>
												{art.disable ? (
													<div>
														<label className="swap">
															<input type="checkbox" />
															<div
																className="swap-on btn btn-success btn-xs"
																onClick={() =>
																	handleClickInhab(
																		art.id
																	)
																}
															>
																Habilitar
															</div>
															<div
																className="swap-off btn btn-error btn-xs"
																onClick={() =>
																	handleClickInhab(
																		art.id
																	)
																}
															>
																Deshabilitar
															</div>
														</label>
													</div>
												) : (
													<div>
														<label className="swap">
															<input type="checkbox" />
															<div
																className="swap-off btn btn-error btn-xs"
																onClick={() =>
																	handleClickInhab(
																		//false o 0 en venta, entonces deshabilitar
																		art.id
																	)
																}
															>
																Deshabilitar
															</div>
															<div
																className="swap-on btn btn-success btn-xs" //true o 1 pendiente, entonces habilitar
																onClick={() =>
																	handleClickInhab(
																		art.id
																	)
																}
															>
																Habilitar
															</div>
														</label>
													</div>
												)}
											</td>
											<td>
												<Link
													to={`/admin/articulos/edit/${art.id}`}
												>
													<button className="btn btn-info btn-xs">
														Edit
													</button>
												</Link>
											</td>
											<td>
												<a
													href="#my-modal-2"
													class="btn btn-error btn-xs"
												>
													Delete
												</a>
												<div
													class="modal"
													id="my-modal-2"
												>
													<div class="modal-box">
														<h3 class="font-bold">
															El Articulo se
															eliminara de manera
															permanente!
														</h3>
														<div class="modal-action">
															<button
																className="btn btn-error btn-xs"
																onClick={() =>
																	handleClickDelete(
																		art.id
																	)
																}
															>
																Continuar
															</button>
															<a
																href="#"
																className="btn btn-xs"
															>
																Cancelar
															</a>
														</div>
													</div>
												</div>
											</td>
										</tr>
									);
								})}
						</tbody>
						<tfoot></tfoot>
					</table>
				</div>
			</div>
		</div>
	);
=======
  function handleClickEdit(id) {
    try {
      dispatch(editArticle(id));
      alert(`El Articulo con id: ${id} ha sido modificado!`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h2 className="text-black text-2xl">Administrador de Articulos</h2>
      <br />
      <div>
        <input
          value={busqueda}
          className="input input-bordered  text-white h-9 w-28 sm:w-full sm:h-12"
          placeholder="Búsqueda por nombre"
          onChange={handleChange}
        />
      </div>
      <div>
        <div className={s.table}>
          <br />
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>id</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Habilitado</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {articulo &&
                articulo.map((art) => {
                  return (
                    <tr>
                      <td>{art.title}</td>
                      <td>{art.id}</td>
                      <td>{art.detail.marca}</td>
                      <td>{art.detail.modelo}</td>
                      <td>{art.disable}</td>
                      <td>{art.stock}</td>
                      <td>{art.price}</td>
                      <td>
                        {!art.disable ? (
                          <div>
                            <button
                              className="btn btn-success btn-xs"
                              onClick={() => handleClickInhab(art.id)}
                            >
                              Habilitado
                            </button>
                          </div>
                        ) : (
                          <div>
                            <button
                              className="btn btn-error btn-xs"
                              onClick={() => handleClickInhab(art.id)}
                            >
                              Deshabilitado
                            </button>
                          </div>
                        )}
                      </td>
                      <td>
                        <Link to={`/admin/articulos/edit/${art.id}`}>
                          <button className="btn btn-info btn-xs">Edit</button>
                        </Link>
                      </td>
                      <td>
                        <a href="#my-modal-2" class="btn btn-error btn-xs">
                          Delete
                        </a>
                        <div class="modal" id="my-modal-2">
                          <div class="modal-box">
                            <h3 class="font-bold">
                              El Articulo se eliminara de manera permanente!
                            </h3>
                            <div class="modal-action">
                              <button
                                className="btn btn-error btn-xs"
                                onClick={() => handleClickDelete(art.id)}
                              >
                                Continuar
                              </button>
                              <a href="#" className="btn btn-xs">
                                Cancelar
                              </a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div>
    </div>
  );
>>>>>>> 92308e701159c3909aa59d11dfa46be083091bd5
}
