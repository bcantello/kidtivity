import React, {useState, createContext} from 'react';
import './App.css';
import Main from "./components/Main";

function App() {
    const [imageLink, setImageLink] = useState("")
    const [userInfo, setUserInfo] = useState(()=>{
        const result = localStorage.getItem('user')
        return result? JSON.parse(result): []
    })
    const [newActivity, setNewActivity] = useState({
        title: "",
        category: "",
        age_range: "",
        summary: "",
        supplies: "",
        body: "",
        image: imageLink,
        is_public: "True",
    });
    let activityPayload = {
        title: newActivity.title,
        category: newActivity.category,
        age_range: newActivity.age_range,
        summary: newActivity.summary,
        supplies: newActivity.supplies,
        body: newActivity.body,
        image: imageLink,
        is_public: "True"
    }
    console.log("PAYLOAD",activityPayload)

    const handleChange = (e) => {
        const value = e.target.value
        setNewActivity({...newActivity, [e.target.name]: value});
    };

    return (
        <div className="App">
            <UniversalContext.Provider value={
                {
                    userInfo,
                    setUserInfo,
                    imageLink,
                    setImageLink,
                    handleChange,
                    newActivity,
                    setNewActivity,
                    activityPayload,
                }
            }>
                <Main/>
            </UniversalContext.Provider>
        </div>
    );
}

export default App;
export const UniversalContext = createContext();
