import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import NavBar from "../navbar/NavBar";
import './ListaProductos.css';

function ListaProductos() {
    //Declaración de estados locales
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    //Utilizamos el efecto de UsseEffect para cargar los datos de productos desde la API
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
// Actualiza el estado productos con los datos obtenidos y establece loading en falso
            setProductos(data);
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        });
    }, []);

    return (
        <div className="ListaProductos">
          <h2>Lista de Productos</h2>
          <NavBar />
          <p>Listado de productos</p>
          {loading ? (
            <p>Cargando...</p>
          ) : (
            <ul className="productos-lista">
              {productos.map(producto => (
                <li key={producto.id} className="producto-item">
                  <h3>{producto.title}</h3>
                  <p>Precio: ${producto.price}</p>
                  <Link to={`/DetalleProducto/${producto.id}`}>Ver Detalles</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }
    
    export default ListaProductos;