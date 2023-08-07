import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Perfil from "./pages/Perfil";
import UserProvider from "./context/User";

function App() {
    return (
        <BrowserRouter>
            <UserProvider>
                <Routes>
                    <Route index element={<Inicio />} />
                    <Route path="/perfil" element={<Perfil />} />
                </Routes>
            </UserProvider>
        </BrowserRouter>
    );
}

export default App;
