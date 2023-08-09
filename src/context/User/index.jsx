// ***********************************
// |         Import Padrão           |
// ***********************************

import React, { createContext, useEffect, useState } from "react";

export const userContext = createContext();

const UserProvider = ({ children }) => {
    const [nome, setNome] = useState("");
    const [usuario, setUsuario] = useState("");
    const [repositorios, setRepositorios] = useState([
        { name: "NOT FOUND",
         stargazers_count: 0,
          updated_at: " ..." 
        },
    ]);

    const handleChange = (e) => {
        setNome(e.target.value);
    };

    useEffect(() => {
        let stars = 0;

        repositorios.map((item) => (stars += item.stargazers_count));

        setUsuario({ ...usuario, stars });
    }, [repositorios]);

    const buscar = async () => {
        try {
            await fetch(`https://api.github.com/users/${nome}`)
                .then((resposta) => resposta.json())
                .then((data) => setUsuario(data));

            await fetch(`https://api.github.com/users/${nome}/repos`)
                .then((resposta) => resposta.json())
                .then((data) => setRepositorios(data));

                console.log(repositorios)

          
        } catch (Error) {
             
        }
    };

    return (
        <userContext.Provider
            value={{ handleChange, nome, buscar, usuario, repositorios }}
        >
            {children}
        </userContext.Provider>
    );
};

export default UserProvider;
