// ***********************************
// |         Import Padrão           |
// ***********************************

import React, { useContext} from "react";

// ***********************************
// |          Import Css             |
// ***********************************

import styles from "./Repositorios.module.scss";

// ***********************************
// |         Import Icons            |
// ***********************************

import { AiOutlineStar } from "react-icons/ai";
import { userContext } from "../../../context/User";

const Repositorios = () => {
    const { repositorios } = useContext(userContext);

    return (
        <section className={styles.repositorios}>
            { repositorios.map((repositorio) => (
                <article key={repositorio.name}>
                    <h1>{repositorio.name}</h1>
                    <p>{repositorio.description}</p>
                    <span>
                        <AiOutlineStar size={15} />
                        <p>
                            {repositorio.stargazers_count} Stars • Last update 
                            {repositorio.updated_at}
                        </p>
                    </span>
                </article>
            ))}
        </section>
    );
};

export default Repositorios;
