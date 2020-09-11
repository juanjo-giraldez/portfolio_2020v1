import React from 'react';
import '../css/About.css';
import Background from '../img/Background.jpg';

export const About = () => {



    return (
        <div>
            <div>
                <h1 className="tamaño">Acerca de mí</h1>
            </div>
            <div className="info">
                <img className="info_image" src={Background} alt="imagen" />
                <div  className="contain_p">
                    <p>
                        Mi interés por aprender me llevo hasta al sector del Web Developing.
                        donde me inicie. Me propuse conocer las TICs , lanzandome a realizar
                        un Bootcamp en Desarrollo web y poseer experiencia en proyectos.
                       </p>
                    <p>Dispuesto a emprender nuevas aventuras por descubrir.....¿me
                    acompañas? .
                     </p>
                    <a
                        href="https://drive.google.com/file/d/1L2V9ZH55eLbw0I-cqoM5sPwS-Kci8ISi/view?usp=sharing"
                        target="_blank" rel="noopener noreferrer"
                    >resume</a>
                </div>
            </div>


        </div >

    )
}
