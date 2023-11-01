import React, { useState } from "react";

function FormData() {
    const [formData, setFormData] = useState({ name: "" });
    const [userInput, setUserInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({ name: userInput });
    };

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };
    return (
        <div>
            <h1> Data Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={userInput}
                        onChange={handleInputChange}
                    />
                  
                </label>
                <button type="submit">Submit</button>
            </form>
            <p>User Data: {formData.name}</p>
        </div>
    );
}

export default FormData;
