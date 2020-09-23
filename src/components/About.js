import React from 'react';
import Background from '../img/Background.jpg';

export const About = () => {

    return (
        <div>
            <div>
                <h1 className="tamaño">Acerca de mí</h1>
            </div>
            <div className="info">
                <img className="info_image" src={Background} alt="imagen" />
                <div className="contain_p">
                    <p>
                        Entusiasta por el universo de la tecnología y por los nuevos avances; me propuse formarme
                        en Web Development realizando un Bootcamp.
                        </p>
                    <p>
                        Mi fin es alcanzar algún proyecto que me permita seguir avanzando en mis conocimientos
                        en desarrollo y ponerlos en práctica.
                        </p>
                    <p>
                        Mejorar a traves de desafios y progresar.
                        </p>
                    <p> Dispuesto a descubrir nuevos retos  para crecer .....¿me
                    acompañas a emprender esta aventura? .
                     </p>
                    <a
                        href="https://docs.google.com/presentation/d/1x1PlCmmiRAS6Zcb2VzqdJsG5g9teNt4L_0QsKgad0tw/edit?usp=sharing"
                        target="_blank" rel="noopener noreferrer"
                    >resume</a>
                </div>
            </div>
        </div >

    )
}
