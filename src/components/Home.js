import React from 'react';
import Typical from 'react-typical';
import '../css/home.css';

export const Home = () => {
    return (
        <div className="hero">
            <div className="contenedor">
                <div className="contenido">
                    {/* <h2 className="subtitulo">Hola,</h2> */}
                    <div>
                        <Typical className="place_down"
                            steps={[
                                'Hola soy JuanJo Giráldez', 1500,
                                'Front-end', 1000,
                                'Back-end', 1000,
                                'Soy el Amo de Angular', 1000,
                                'Odio Css', 1000,
                                'Adopta un Web Developer', 1500, 
                                '¿Cuánto vale un Dracma?', 1000] 
                            }
                            loop={Infinity}
                            wrapper="h3"

                        />
                    </div>

                </div>
            </div>

        </div>
    )
}
