import React from 'react';
import '../css/Skills.css';

export const Skills = () => {
    return (
        <div>
            <section className="contain">
                {/* <div>
                    <h1>Habilidades tecnológicas</h1>
                </div>
                <div>

                    { <div className="languages">
                        <div>
                            <h3>Lenguajes</h3>
                            <ul>
                                <li className="javascript">JAVASCRIPT</li>
                            </ul>
                        </div>
                    </div> }
                </div> */}
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
                            <li className="javascript">JAVASCRIPT</li>
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
        </div>
    )
}
