import React, {useState, createContext} from 'react';
import './App.css';
import Main from "./components/Main";

function App() {
    const [userInfo, setUserInfo] = useState(()=>{
        const result = localStorage.getItem('user')
        return result? JSON.parse(result): []
    })

    return (
        <div className="App">
            <UniversalContext.Provider value={
                {
                    userInfo,
                    setUserInfo,
                }
            }>
                <Main/>
            </UniversalContext.Provider>
        </div>
    );
}

export default App;
export const UniversalContext = createContext();
