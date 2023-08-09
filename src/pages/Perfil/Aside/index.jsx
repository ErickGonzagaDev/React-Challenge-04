// ***********************************
// |         Import Padrão           |
// ***********************************

import React, { useContext, useEffect, useState } from "react";

// ***********************************
// |          Import Css             |
// ***********************************

import styles from "./Aside.module.scss";

// ***********************************
// |         Import Icons            |
// ***********************************

import { MdGroups } from "react-icons/md";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";

import { GoOrganization } from "react-icons/go";
import { CiLocationOn, CiTwitter } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { userContext } from "../../../context/User";
import { Link } from "react-router-dom";

const Aside = () => {
    const { usuario } = useContext(userContext);

    const [perfil, setPerfil] = useState("");

    useEffect(() => {
        setPerfil(usuario);
    }, [usuario]);

    return (
        <aside>
            <section className={styles.perfil}>
                <img src={`https://github.com/${perfil.login}.png`} alt="" />
                <section className={styles.perfil__Descricao}>
                    <h1>{!perfil.name ? "Developer's full name" : perfil.name}</h1>
                    <h2>{!perfil.login? "@username" : perfil.login}</h2>
                    <p>{!perfil.bio ? "-/-" : perfil.bio}</p>
                </section>

                <section className={styles.perfil__Numeros}>
                    <span>
                        <MdGroups /> <p> {!perfil.followers ? "0" : perfil.followers} followers</p>
                    </span>
                    <span>
                        <AiOutlineHeart /> <p> {!perfil.following ? "0" :perfil.following} following</p>
                    </span>
                    <span>
                        <AiOutlineStar /> <p> {perfil.stars} stars</p>
                    </span>
                </section>

                <section className={styles.perfil__Complementos}>
                    <span>
                        <GoOrganization /> <p>{!perfil.company  ?  '-/-' : perfil.company}</p>
                    </span>
                    <span>
                        <CiLocationOn /> <p>{!perfil.location  ?  '-/-' : perfil.location}</p>
                    </span>
                    <span>
                        <AiOutlineMail /> <p>{!perfil.email  ?  '-/-' : perfil.email}</p>
                    </span>
                    <span>
                        <BsLink45Deg /> <p> <a href={perfil.html_url} target="_blank" rel="noopener noreferrer">GitHub</a></p>
                    </span>
                    <span>
                        <CiTwitter /> <p>{!perfil.twitter_username  ?  '-/-' : perfil.twitter_username}</p>
                    </span>
                </section>
                <Link className={styles.botao} to="/">
                <button>Voltar</button>
                </Link>
            </section>
        </aside>
    );
};

export default Aside;
