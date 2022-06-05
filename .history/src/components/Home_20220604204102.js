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
                    type="text"
                    onChange={(event) => setName(event.target.value)}
                    required
                />    
            </div>
            <div>
                <input
                    placeholder="Room"
                    type="text"
                    onChange={(event) => setRoom(event.target.value)}
                    required
                />    
            </div>
            <Link
                onClick={(e) => }
        </div>
    )
}

