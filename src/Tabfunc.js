import { useEffect, useRef, useState } from "react";

function Tabfunc() {
    const firstRef = useRef(null);
    const secRef = useRef(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        firstRef.current.focus();
    }, []);

    const btnSubmit = (event) => {
        event.preventDefault();
        if (firstRef.current.value === secRef.current.value) {
            setMessage("Correct");
        } else {
            setMessage("Incorrect");
        }
        firstRef.current.value = '';
        secRef.current.value = '';
    };

    return (
        <div style={{
            border: '1px solid black',
            width: '500px',
            margin: 'auto',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff'
        }}>
            <form onSubmit={btnSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent:'center',gap:'30px', marginBottom: '5px' }}>
                    <h3 style={{ textAlign: 'center', fontSize: '24px' }}>Login</h3>
                    <h3 style={{ textAlign: 'right', fontSize: '24px' }}>Register</h3>
                </div>
                <p style={{ textAlign: 'center', fontSize: '16px', color: '#666', marginBottom: '20px' }}>Provide your details to login</p>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="clgId" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>College Id</label>
                    <input type="text" id="clgId" placeholder="College Id" ref={firstRef} style={{
                        width: '100%',
                        padding: '10px',
                        fontSize: '16px',
                        border: '1px solid #ccc',
                        borderRadius: '5px'
                    }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="pwd" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Password</label>
                    <input type="password" id="pwd" placeholder="Password" ref={secRef} style={{
                        width: '100%',
                        padding: '10px',
                        fontSize: '16px',
                        border: '1px solid #ccc',
                        borderRadius: '5px'
                    }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <button type="submit" style={{
                        width: '100%',
                        padding: '10px',
                        backgroundColor: '#000',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease'
                    }}>Login</button>
                </div>
                {message && <h4 style={{ textAlign: 'center', marginTop: '20px', fontSize: '18px', color: 'green' }}>{message}</h4>}
            </form>
        </div>
    );
}
export default Tabfunc;
