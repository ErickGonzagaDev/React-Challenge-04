// ***********************************
// |         Import Padrão           |
// ***********************************

import React, { useContext } from "react";

// ***********************************
// |          Import Css             |
// ***********************************

import styles from "./Inicio.module.scss";

// ***********************************
// |         Import Icons            |
// ***********************************

import { CiSearch } from "react-icons/ci";
import { userContext } from "../../context/User";
import { Link } from "react-router-dom";

const Inicio = () => {
    const { handleChange,buscar } = useContext(userContext);

    return (
        <main className={styles.container}>
            <section>
                <h1>Search Devs</h1>

                <section className={styles.container__search}>
                    <input
                        type="text"
                        placeholder="Type the username here..."
                        onChange={handleChange}
                    />
                    <Link to="/perfil">
                    <button onClick={buscar}>
                        <CiSearch size={30} /> Buscar
                    </button>
                    </Link>
                </section>
            </section>
        </main>
    );
};

export default Inicio;
