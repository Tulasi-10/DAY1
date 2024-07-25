import { useEffect, useRef, useState } from "react";

function App() {
    const [isRegister, setIsRegister] = useState(true);

    const toggleForm = () => {
        setIsRegister(!isRegister);
    };

    return (
        <div>
            <button onClick={toggleForm} style={{
                display: 'block',
                margin: '20px auto',
                padding: '10px 20px',
                backgroundColor: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
            }}>
                {isRegister ? 'Switch to Login' : 'Switch to Register'}
            </button>
            {isRegister ? <Register /> : <Login />}
        </div>
    );
}

function Login() {
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
                <h3 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '5px' }}>Login</h3>
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

function Register() {
    const firstRef = useRef(null);
    const [collegeId, setCollegeId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [branch, setBranch] = useState('');
    const [year, setYear] = useState('');
    const [gender, setGender] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        firstRef.current.focus();
    }, []);

    useEffect(() => {
        console.log({
            collegeId,
            email,
            password,
            branch,
            year,
            gender
        });
    }, [collegeId, email, password, branch, year, gender]);

    const btnSubmit = (event) => {
        event.preventDefault();
        if (collegeId === password) {
            setMessage("Correct");
        } else {
            setMessage("Incorrect");
        }
        setCollegeId('');
        setEmail('');
        setPassword('');
        setBranch('');
        setYear('');
        setGender('');
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
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '5px' }}>
                    <h3 style={{ textAlign: 'center', fontSize: '24px' }}>Register</h3>
                </div>
                <p style={{ textAlign: 'center', fontSize: '16px', color: '#666', marginBottom: '20px' }}>Provide your details to Register</p>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="clgId" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>College Id</label>
                    <input type="text" id="clgId" placeholder="College Id" value={collegeId} onChange={(e) => setCollegeId(e.target.value)} style={{
                        width: '100%',
                        padding: '10px',
                        fontSize: '16px',
                        border: '1px solid #ccc',
                        borderRadius: '5px'
                    }} ref={firstRef} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Email</label>
                    <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{
                        width: '100%',
                        padding: '10px',
                        fontSize: '16px',
                        border: '1px solid #ccc',
                        borderRadius: '5px'
                    }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="pwd" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Password</label>
                    <input type="password" id="pwd" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{
                        width: '100%',
                        padding: '10px',
                        fontSize: '16px',
                        border: '1px solid #ccc',
                        borderRadius: '5px'
                    }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="branch" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Branch</label>
                    <select id="branch" value={branch} onChange={(e) => setBranch(e.target.value)} style={{
                        width: '100%',
                        padding: '10px',
                        fontSize: '16px',
                        border: '1px solid #ccc',
                        borderRadius: '5px'
                    }}>
                        <option value="">Select Branch</option>
                        <option value="CSE">Computer Science Engineering</option>
                        <option value="ECE">Electronics and Communication Engineering</option>
                        <option value="EEE">Electrical and Electronics Engineering</option>
                        <option value="ME">Mechanical Engineering</option>
                        <option value="CE">Civil Engineering</option>
                    </select>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="year" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Year</label>
                    <select id="year" value={year} onChange={(e) => setYear(e.target.value)} style={{
                        width: '100%',
                        padding: '10px',
                        fontSize: '16px',
                        border: '1px solid #ccc',
                        borderRadius: '5px'
                    }}>
                        <option value="">Select Year</option>
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year</option>
                        <option value="4">4th Year</option>
                    </select>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Gender</label>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div>
                            <input type="radio" id="male" name="gender" value="Male" checked={gender === 'Male'} onChange={() => setGender('Male')} />
                            <label htmlFor="male" style={{ marginLeft: '5px' }}>Male</label>
                        </div>
                        <div>
                            <input type="radio" id="female" name="gender" value="Female" checked={gender === 'Female'} onChange={() => setGender('Female')} />
                            <label htmlFor="female" style={{ marginLeft: '5px' }}>Female</label>
                        </div>
                        <div>
                            <input type="radio" id="other" name="gender" value="Other" checked={gender === 'Other'} onChange={() => setGender('Other')} />
                            <label htmlFor="other" style={{ marginLeft: '5px' }}>Other</label>
                        </div>
                    </div>
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
                    }}>Register</button>
                </div>
                {message && <h4 style={{ textAlign: 'center', marginTop: '20px', fontSize: '18px', color: 'green' }}>{message}</h4>}
            </form>
        </div>
    );
}

export default App;
