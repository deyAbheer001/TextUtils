import Button from "./button";
import { useState } from "react";


const TextBox = (props) => {

    const [text, setText] = useState("");

    function getText(e) {

        setText(e.target.value);
    }

    function handleUpClick() {

        setText(text.toUpperCase());
        props.alert("info", "Text Changed To Upper Case");
    }

    function handleLoClick() {

        setText(text.toLowerCase());
        props.alert("info", "Text Changed To Lower Case");
    }

    function handleCpClick() {

        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.alert("info", "Text Copied");
    }

    function handleSpClick() {

        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.alert("info", "All Extra Space Removed");
    }

    function handleClClick() {

        setText("");
        props.alert("info", "All Text Cleared");
    }

    return (

        <>
            <div className={`mb-3 my-5 form-control-lg text-${props.mode === "light" ? "dark" : "light"
            }`}>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.label}</label>
                <textarea className={`text-color form-control text-${
                props.mode === "light"?"dark":"light"
            }`} style={{
                    backgroundColor: `${props.mode === "light" ? "white" : "#1c2b53"
            }`}} onChange={getText} id="myBox" value={text} rows="5"></textarea>
            </div>

            <Button fn={handleUpClick} class="btn btn-primary" use="Uppercase" />
            <Button fn={handleLoClick} class="btn btn-success" use="Lowercase" />
            <Button fn={handleSpClick} class="btn btn-warning" use="Remove ExtraSpace" />
            <Button fn={handleCpClick} class="btn btn-info" use="Copy Text" />
            <Button fn={handleClClick} class="btn btn-danger" use="Clear All" />

            <div className={`mx-3 my-5 text-${
                props.mode === "light"?"dark":"light"
            }`}>
                <h2>Your Text Summary</h2>
                <p>Words : {text.split(" ").length} | Characters : {text.length}</p>
                <p>{0.004 * text.split(" ").length} minutes read</p>
                <h2>{(text.length) > 0 ? "Text Preview" : ""}</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextBox;