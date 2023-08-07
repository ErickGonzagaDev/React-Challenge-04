// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";

// ***********************************
// |          Import Css             |
// ***********************************

import styles from "./Aside.module.scss"

// ***********************************
// |         Import Icons            |
// ***********************************

import { MdGroups } from "react-icons/md";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";

import { GoOrganization } from "react-icons/go";
import { CiLocationOn, CiTwitter } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";

const Aside = ()=>{
    return(
        <aside>
                <section className={styles.perfil}>
                    <img src="https://github.com/erickgonzagadev.png" alt="" />
                    <section className={styles.perfil__Descricao}>
                        <h1>Developer's full name</h1>
                        <h2>@username</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed tincidunt congue ligula in rutrum. Morbi
                            nec lacus condimentum, hendrerit mi eu, feugiat.
                        </p>
                    </section>

                    <section className={styles.perfil__Numeros}>
                        <span>
                            <MdGroups /> <p> 200 followers</p>
                        </span>
                        <span>
                            <AiOutlineHeart /> <p> 130 following</p>
                        </span>
                        <span>
                            <AiOutlineStar /> <p> 100 stars</p>
                        </span>
                    </section>

                    <section className={styles.perfil__Complementos}>
                        <span>
                            
                            <GoOrganization /> <p>organization</p>
                        </span>
                        <span>
                            
                            <CiLocationOn /> <p>location</p>
                        </span>
                        <span>
                            
                            <AiOutlineMail /> <p>email</p>
                        </span>
                        <span>
                            
                            <BsLink45Deg /> <p>www.mywebsite.com</p>
                        </span>
                        <span>
                            
                            <CiTwitter /> <p>@myTwitter</p>
                        </span>
                    </section>
                <button>Voltar</button>
                </section>

            </aside>
    )
}

export default Aside