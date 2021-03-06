import React, {useState, createContext, useEffect} from 'react';
import './App.css';
import Main from "./components/Main";
import {getPublicActivities} from "./components/services/api-helper";

function App() {
    const [imageLink, setImageLink] = useState("");
    const [publicActivities, setPublicActivities] = useState([]);
    const [primaryKey, setPrimaryKey] = useState(0)
    const [userInfo, setUserInfo] = useState(() => {
        const result = localStorage.getItem('user');
        return result ? JSON.parse(result) : []
    });
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
    };

    useEffect(() => {
        const getActivities = async () => {
            await getPublicActivities().then(res => {
                if (res.status === 200) {
                    setPublicActivities(res.data)
                } else {
                    console.log("error retrieving public activities")
                }
            }).catch(e => {
                console.log(e);
            });
        };
        getActivities();
    }, []);

    return (
        <div className="App">
            <UniversalContext.Provider value={
                {
                    userInfo,
                    setUserInfo,
                    imageLink,
                    setImageLink,
                    newActivity,
                    setNewActivity,
                    activityPayload,
                    publicActivities,
                    setPublicActivities,
                    primaryKey,
                    setPrimaryKey,
                }
            }>
                <Main/>
            </UniversalContext.Provider>
        </div>
    );
}

export default App;
export const UniversalContext = createContext();
