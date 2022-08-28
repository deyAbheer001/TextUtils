import { useState } from 'react';
import Alert from '../components/alert';
import Header from '../components/header';
import TextBox from '../components/text';

const Home = ()=> {

    const [mode, setMode] = useState("light");
    const [modeText, setModeText] = useState("Enable Dark Mode");
    const [alert, setAlert] = useState(null)

    const showAlert = (type, text) => {

        setAlert({
            status: type,
            msg: text
        })

        setTimeout(() => {
            setAlert(null);

        }, 2000);
    }

    const toggleMode = () => {

        if (mode === "light") {

            setMode("dark");
            setModeText("Disable Dark Mode");
            document.body.style.backgroundColor = "rgb(3 11 51)";
            showAlert("success", "Dark Mode Enabled");
            document.title = "TextUtils App | Dark"
        }

        else {
            setMode("light");
            setModeText("Enable Dark Mode");
            document.body.style.backgroundColor = "rgb(239, 239, 241)";
            showAlert("success", "Light Mode Enabled");
            document.title = "TextUtils App | Light"
        }
    }

    return (
        <>

            <Header mode={mode} title="TextUtils" toggleMode={toggleMode} modeText={modeText} />
            <Alert alert={alert} />

            <div className="container">
            <TextBox alert={showAlert} mode={mode} label="Enter Text Below" />
            </div>
        </>
    );
}

export default Home;