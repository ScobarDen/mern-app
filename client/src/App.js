import React from "react";
import 'materialize-css';
import {useRoutes} from "./routes";
import {BrowserRouter} from "react-router-dom";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import Navbar from "./components/Navbar";

function App() {
    const {login, logout, token, userId} = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(!!token); // TODO: если убрать StrictMode, то все работает
    return (
        <AuthContext.Provider value={{
            login,
            logout,
            token,
            userId,
            isAuthenticated
        }}>
            <BrowserRouter>
                {isAuthenticated && <Navbar/>}
                <div className="container">
                    {routes}
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
