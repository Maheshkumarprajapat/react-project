import React, { useState } from 'react'

export default function Eventfun() {
    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    function myfun(e) {
        e.preventDefault();
        console.log(name, email, password)
    }
    return (
        <div>
            <form>
                <input type="text" name="Hello" value={name} onChange={(e) => setName(e.target.value)} /><br />
                <input type="email" name="Hello" value={email} onChange={(e) => setemail(e.target.value)} /><br />
                <input type="password" name="Hello" value={password} onChange={(e) => setpassword(e.target.value)} /><br />
                <button onClick={myfun}>Submit</button>
            </form>
        </div>
    )
}
