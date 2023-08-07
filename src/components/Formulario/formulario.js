import "./formulario.css";
import Campo from "../Campo/Campo";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/boton";
import { useState } from "react";
import {v4 as uuid} from "uuid";

function Formulario(props){

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");
    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");

    const {registrarColaborador, crearEquipo} = props;

    const manejarEnvio = (event) =>{
        event.preventDefault();
        const datosEnviar = {
            id: uuid(),
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo,
            fav: false
        }
        registrarColaborador(datosEnviar);
    }

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault();
        crearEquipo({titulo, colorPrimario: color});
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear al nuevo colaborador</h2>
            <Campo titulo="Nombre" placeholder="Ingrese nombre" required valor={nombre} actualizarValor={actualizarNombre}/>
            <Campo titulo="Puesto" placeholder="Ingrese puesto" required valor={puesto} actualizarValor={actualizarPuesto}/>
            <Campo titulo="Foto" placeholder="Ingrese enlace de foto" required valor={foto} actualizarValor={actualizarFoto}/>
            <ListaOpciones valor = {equipo} actualizarValor={actualizarEquipo} equipos={props.data}/>
            <Boton title="Crear Colaborador"/>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el nuevo Equipo</h2>
            <Campo titulo="Titulo" placeholder="Ingrese el titulo" required valor={titulo} actualizarValor={actualizarTitulo}/>
            <Campo titulo="Color" placeholder="Ingrese el color en HEX" required valor={color} actualizarValor={actualizarColor} 
                type = "color"    
            />
            <Boton title="Register Team"/>
        </form>    
    </section>
}

export default Formulario;