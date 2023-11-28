import { Link, useNavigate } from "react-router-dom";
import { amorcitoToast, amorcitoToast2, otroToast, testToast } from "../../elements/hotToast/hotToast.tsx";
import { Alien } from "@phosphor-icons/react";
import toast, { Toaster } from 'react-hot-toast';
import NavBar from "../../elements/NavBar/NavBar.tsx";
import style from "./LandingPage.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGithub, faHtml5, faJs, faNodeJs, faNpm, faReact } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import HoverIcon from "../../elements/HoveredIcon/HoveredIcon.tsx";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faFileCode } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import MaterialCard from "./MaterialCard.tsx";
import BlogCard from "../../elements/BlogCard/BlogCard.tsx";




const LandingPage = () => {
    const navigate = useNavigate()
    const [isHovered, setIsHovered] = useState(false);

    const testerButton = () => {
        console.log("botón tester");
        testToast("Sup bro")
    }

    const aboutHandler = () => {
        otroToast("ugh")
        setTimeout(() => navigate('/about'), 500)

    }

    const amorcitoHandler = () => {
        amorcitoToast("Aquí amorcito");
        setTimeout(() => {
            console.log("hola");
            amorcitoToast2("Estudiando jsjsjs");
        }, 1500);
    }



    return (
        <div>
            <div style={{ padding: 10 }}>
                <NavBar />
            </div>
            <h1>Super Portfolio del pelao pipe como no cachai</h1>  <Alien size={32} />
            <button onClick={testerButton}>Toast tester</button>
            <button onClick={aboutHandler}>About</button>
            <div>
                <button onClick={amorcitoHandler}>Respuesta Amorcito</button>
            </div>

            <div className={style.bodyContainer}>
                <div className={style.bodyLeft}>
                    <p>Sup</p>

                    <a href="https://material-ui.com/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white&labelColor=101010"
                            alt="Material-UI"
                        />
                    </a>

                    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white&labelColor=101010"
                            alt="React"
                        />
                    </a>

                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010"
                            alt="JavaScript"
                        />
                    </a>

                    <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white&labelColor=101010"
                            alt="TypeScript"
                        />
                    </a>

                    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white&labelColor=101010"
                            alt="Tailwind CSS"
                        />
                    </a>

                    <a href="https://zustand.surge.sh/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=zustand&logoColor=white&labelColor=101010"
                            alt="Zustand"
                        />
                    </a>

                    <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white&labelColor=101010"
                            alt="Redux"
                        />
                    </a>

                    <a href="https://styled-components.com/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white&labelColor=101010"
                            alt="Styled Components"
                        />
                    </a>

                    <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white&labelColor=101010"
                            alt="Firebase"
                        />
                    </a>

                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white&labelColor=101010"
                            alt="CSS"
                        />
                    </a>

                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white&labelColor=101010"
                            alt="HTML"
                        />
                    </a>

                    <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white&labelColor=101010"
                            alt="Bootstrap"
                        />
                    </a>
                    <HoverIcon icon={faGithub} color="#B4B4B3" /> {/* GitHub */}
                    <HoverIcon icon={faCss3} color="#1572B6" /> {/* CSS */}
                    <HoverIcon icon={faNodeJs} color="#8CC84B" /> {/* Node.js */}
                    <HoverIcon icon={faJs} color="#F7DF1E" /> {/* JavaScript */}
                    <HoverIcon icon={faReact} color="#61DBFB" /> {/* React */}
                    <HoverIcon icon={faNpm} color="#CB3837" /> {/* npm */}
                    <HoverIcon icon={faHtml5} color="#E34F26" /> {/* HTML */}
                    <HoverIcon icon={faFileCode} color="#007ACC" /> {/* TypeScript */}
                    <HoverIcon icon={faDatabase} color="#007ACC" />

                </div>

                <div className={style.bodyRight}>
                    <p>yoyoyo</p>
                </div>
            </div>
            <ContenedorDos>
                <Seccion>
                    <MaterialCard />
                    <MaterialCard />
                    <MaterialCard />

                </Seccion>
                <Seccion>
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />

                </Seccion>

                <MaterialCard />
            </ContenedorDos>

            <Toaster />
        </div>
    )
}

const ContenedorDos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
`

const Seccion = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
    border: 5px solid #fff;
    text-align: center;
`


export default LandingPage;