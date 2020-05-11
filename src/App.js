import React, {useState, createContext} from 'react';
import './App.css';
import Main from "./components/Main";

function App() {
    const [userToken, setUserToken] = useState("");

    const handleLogin = (data) => {
        setUserToken(data.token)
    };

    return (
        <div className="App">
            <UniversalContext.Provider value={
                {
                    handleLogin
                }
            }>
                <Main/>
            </UniversalContext.Provider>
        </div>
    );
}

export default App;
export const UniversalContext = createContext();
