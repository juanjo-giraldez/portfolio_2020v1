import React from 'react';
import Typical from 'react-typical';

export const Home = () => {
    return (
        <div className="hero">
            <div className="contenedor">
                <div className="contenido">
                    <div>
                        <Typical className="place_down"
                            steps={[
                                'Hola soy JuanJo Giráldez', 1500,
                                'Front-end', 1000,
                                'Back-end', 1000,
                                'Angular-React-Vue', 1000,
                                'Css / Sass', 1000,
                                'JavaScript / Node.js', 1000,
                                'TDD', 1000,
                                'Git / Git-flow', 1000, 
                                'Adopta un Web Developer', 1500] 
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
