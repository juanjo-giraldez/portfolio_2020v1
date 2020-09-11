import React from 'react';
import '../css/contact.css';

export const Contact = () => {
    return (
        <>


            <h1 className="title">Contacta conmigo</h1>

            <table className="contact">
                <tbody>
                    <tr>
                        <td>
                            <p>Email:</p>
                        </td>
                        <th><a href='mailto:jjgiraldezjurado@gmail.com'>jjgiraldezjurado@gmail.com</a></th>
                    </tr>
                    <tr>
                        <td>
                            <p>LinkedIn:</p>
                        </td>
                        <th><a href='https://www.linkedin.com/in/juanjogiráldez'
                            target="_blank" rel="noopener noreferrer">juanjo-giraldez</a></th>
                    </tr>
                    <tr>
                        <td>
                            <p>Github:</p>
                        </td>
                        <th><a href='https://github.com/juanjo-giraldez'
                            target="_blank" rel="noopener noreferrer">juanjo-giraldez</a></th>
                    </tr>
                    <tr>
                        <td>
                            <p>Gitlab:</p>
                        </td>
                        <th><a href='https://gitlab.com/juanjogiraldez_kairosds'
                            target="_blank" rel="noopener noreferrer">juanjogiraldez_kairosds</a></th>
                    </tr>
                </tbody>
            </table>

        </>
    )
}


