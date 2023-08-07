// ***********************************
// |         Import Padrão           |
// ***********************************

import React, { createContext, useState } from "react";

export const userContext = createContext();

const UserProvider = ({ children }) => {
    const [nome, setNome] = useState("");
    const [usuario, setUsuario] = useState("");

    const handleChange = (e) => {
        setNome(e.target.value);
    };

    const buscar = async () => {
        
        try {
            await fetch(`https://api.github.com/users/${nome}`)
                .then((resposta) => resposta.json())
                .then((data) => setUsuario(data));

            console.log(usuario);
        } catch (error) {
            alert("perfil não foi encontrado");
        }
    };

    return (
        <userContext.Provider value={{ handleChange, nome, buscar }}>
            {children}
        </userContext.Provider>
    );
};

export default UserProvider;
