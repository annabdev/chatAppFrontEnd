import React, { useState } from "react"
import { Link } from "react-router-dom";

const Home = () = => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <input
                    placeholder="Name"
                    type
            </div>
        </div>
    )
}

