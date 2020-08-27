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

                <p className="info_p ">Decidí dar un cambio de rumbo a mi ámbito laboral ,
                llevaba tiempo pensando dedicarme a la programación,
                siempre me atrajo. Ya conocía  las tecnologías de
                CISCO  (CCNA routing and switching),
                tomé la decisión y me informé de los cursos de IRONHACK.,
                Pasé la prueba . La formación me ha sido muy positiva;
                ha producido un alto impacto como experiencia y aprendizaje
                     para el cambio que buscaba , la recomiendo. </p>

            </div>

            <section>
                <div>
                    <h1>Habilidades tecnológicas</h1>
                </div>
                <div>

                    <div className="skill_tech">
                        <div>
                            <h3>Lenguajes</h3>
                            <ul>
                                <li className="javascript">JAVASCRIPT</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="skill_tech">
                    <div>
                        <h3>FrontEnd</h3>
                        <ul>
                            <li className="html">HTML</li>
                            <li className="css3">CSS3</li>
                            <li className="sass">SASS</li>
                            <li className="react">REACT</li>
                            <li className="angular">ANGULAR</li>
                            <li className="vue">VUE</li>
                            <li className="bootstrap">BOOTSTRAP</li>
                            <li className="prime_vue">PRIME-VUE</li>
                            <li className="prime_ng">PRIME-NG</li>
                        </ul>
                    </div>

                    <div>
                        <h3>BackEnd</h3>
                        <ul>
                            <li className="mongo_db">MONGO-DB</li>
                            <li className="mongoose">MONGOOSE</li>
                            <li className="apis">APIs</li>
                            <li className="node">NODE.js</li>
                            <li className="express">EXPRESS.js</li>
                            <li className="npm">NPM</li>
                            <li className="git">GIT</li>
                            <li className="docker">DOCKER</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div >

    )
}
