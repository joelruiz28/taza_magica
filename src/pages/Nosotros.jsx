import React, { useState } from "react";
import "./Nosotros.css";
import Footer from "../components/Footer";  
import imagenFondo from '../assets/Nosotros.jpg'; // Imagen de fondo
import { FaCoffee, FaRocket, FaHeart } from 'react-icons/fa'; // Importando íconos
import { FaApple } from 'react-icons/fa'; // Ícono de la manzana


const Nosotros = () => {
  const [active, setActive] = useState(null);  // Solo un estado para la columna activa

  const toggleInfo = (index) => {
    // Si haces clic en la columna activa, la cierra
    setActive((prev) => (prev === index ? null : index));
  };

  return (
    <section className="nosotros2-container">
      {/* Sección Conócenos */}
      <div className="fondo-imagen-nosotros">
        <img src={imagenFondo} alt="Imagen flotante" />
        <div className="texto-nosotros">
          <h2>Nosotros</h2>
        </div>
        <div className="parrafo-nosotros">
          <h2>Somos una empresa 100% Chiapaneca</h2>
          <p>
            Nos dedicamos a la producción de café de muy alta calidad, aplicando
            siempre nuestros valores, desde cada cultivador e integrantes de la
            empresa, originando una pasión y dedicación al arte de la cosecha de
            nuestro café, esto se refleja que nuestro producto compita con
            cualquiera del mundo.
          </p>
        </div>
      </div>

      {/* Sección Nosotros */}
      <div className="nosotros2-container">
        <div className="nosotros2">
          <section className="secciones-empresa">
            {/* Sección ¿Por qué elegirnos? */}
            <div className="seccion-item">
              <div className="icono">
                <FaCoffee size={50} color="#ffb400" />
              </div>
              <h2>¿Por qué elegirnos?</h2>
              <p>
                Estamos comprometidos en mantener en alto el café de Chiapas,
                conservando la pureza y calidad del café que consumen nuestros
                clientes, manteniendo siempre el entusiasmo en la elaboración de
                nuestros productos.
              </p>
            </div>

            {/* Sección Misión */}
            <div className="seccion-item">
              <div className="icono">
                <FaRocket size={50} color="#ffb400" />
              </div>
              <h2>Misión</h2>
              <p>
                La calidad total en el café es nuestra máxima misión, desde la
                mayor selección de los granos, el tueste más fino y mejor
                embazado para que nuestros clientes disfruten de su aroma y
                frescura.
              </p>
            </div>

            {/* Sección Visión */}
            <div className="seccion-item">
              <div className="icono">
                <FaHeart size={50} color="#ffb400" />
              </div>
              <h2>Visión</h2>
              <p>
                Ser el mejor y más grande representante de café mexicano para
                el mundo, a través de la mayor calidad de materias primas y un
                equipo altamente calificado.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Sección de valores con columnas */}
      <section className="secciones-valores">
        <div className="texto-valores">
          <br></br>
          <br></br>
          
          <h1>Estos valores guían todo nuestro trabajo</h1>
          <p>Comprometidos siempre en ofrecer un producto con las mejores características de un buen café.</p>
        </div>
    
        <div className="texto-fruta">
          <h1>~~~~~~~~~~~~🧆~~~~~~~~~~~~</h1>
        </div>
        <div className="columnas">
          
          {[
            { title: "Calidad", text: "Implementamos los más rigurosos estándares de calidad desde la cosecha del café, el tueste y hasta su empaque." },
            { title: "Pasión", text: "Nuestra pasión por el café, nos permite ser mejores cada día y perfeccionar cada detalle en todo lo que hacemos." },
            { title: "Compromiso", text: "Tenemos una gran responsabilidad con nuestros clientes, al ser los mejores representantes del café de Chiapas en el mundo." },
            { title: "Honestidad", text: "Ofreciendo un producto 100% Chiapaneco, elaborado con manos de agricultores de la región y llevándote un producto de calidad Gourmet." }
          ].map((item, index) => (
            <div
              key={index}
              className={`columna ${active === index ? "activo" : ""}`}
              onClick={() => toggleInfo(index)}
            >
              <h3>{item.title}</h3>
              {active === index && <p>{item.text}</p>}
              
            </div>
            
          ))}
    
        </div>
        
      </section>
      <Footer />
    </section>
    
  );
};

export default Nosotros;
