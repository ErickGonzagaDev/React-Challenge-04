// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";

// ***********************************
// |          Import Css             |
// ***********************************

import styles from "./Perfil.module.scss";
import Aside from "./Aside";
import Repositorios from "./Repositorios";


const Perfil = () => {


    return (
        <main className={styles.container}>
            <Aside />
            <Repositorios />
        </main>
    );
};

export default Perfil;
