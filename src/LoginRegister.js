// import { useEffect, useRef, useState } from "react";

// function LoginRegister() {
//     const [isRegister, setIsRegister] = useState(false);
//     const firstRef = useRef(null);
//     const secRef = useRef(null);
//     const thirdRef = useRef(null);
//     const yearRef = useRef(null);
//     const [gender, setGender] = useState('');
//     const [message, setMessage] = useState('');
//     const [collegeId, setCollegeId] = useState('');
//     const [email, setEmail] = useState('');
//     const [pwd, setPwd] = useState('');
//     const [branch, setBranch] = useState('CSE');

//     useEffect(() => {
//         firstRef.current.focus();
//     }, []);

//     const handleInputChange = (event, setState) => {
//         setState(event.target.value);
//         console.log(event.target.id, event.target.value);  // Log the field id and its value
//     };

//     const handleGenderChange = (value) => {
//         setGender(value);
//         console.log("Gender:", value);  // Log the gender value
//     };

//     const btnSubmitRegister = (event) => {
//         event.preventDefault();
//         console.log(`College ID: ${collegeId}`);
//         console.log(`Email: ${email}`);
//         console.log(`Password: ${pwd}`);
//         console.log(`Branch: ${branch}`);
//         console.log(`Year: ${yearRef.current.value}`);
//         console.log(`Gender: ${gender}`);

//         if (firstRef.current.value === secRef.current.value) {
//             setMessage("Correct");
//         } else {
//             setMessage("Incorrect");
//         }

//         setCollegeId('');
//         setEmail('');
//         setPwd('');
//         setBranch('CSE');
//         setGender('');
//         yearRef.current.value = '';
//     };

//     const btnSubmitLogin = (event) => {
//         event.preventDefault();
//         console.log(`Email: ${email}`);
//         console.log(`Password: ${pwd}`);
//         setEmail('');
//         setPwd('');
//     };

//     return (
//         <div style={{
//             border: '1px solid black',
//             width: '500px',
//             margin: 'auto',
//             padding: '20px',
//             borderRadius: '10px',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//             backgroundColor: '#fff'
//         }}>
//             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
//                 <button onClick={() => setIsRegister(false)} style={{
//                     width: '50%',
//                     padding: '10px',
//                     backgroundColor: isRegister ? '#ccc' : '#000',
//                     color: '#fff',
//                     border: 'none',
//                     borderRadius: '5px',
//                     fontSize: '16px',
//                     cursor: 'pointer',
//                     transition: 'background-color 0.3s ease'
//                 }}>Login</button>
//                 <button onClick={() => setIsRegister(true)} style={{
//                     width: '50%',
//                     padding: '10px',
//                     backgroundColor: isRegister ? '#000' : '#ccc',
//                     color: '#fff',
//                     border: 'none',
//                     borderRadius: '5px',
//                     fontSize: '16px',
//                     cursor: 'pointer',
//                     transition: 'background-color 0.3s ease'
//                 }}>Register</button>
//             </div>
//             {isRegister ? (
//                 <form onSubmit={btnSubmitRegister} style={{ display: 'flex', flexDirection: 'column' }}>
//                     <h3 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px' }}>Register</h3>
//                     <div style={{ marginBottom: '15px' }}>
//                         <label htmlFor="clgId" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>College Id</label>
//                         <input type="text" id="clgId" value={collegeId} placeholder="College Id" onChange={(e) => handleInputChange(e, setCollegeId)} style={{
//                             width: '100%',
//                             padding: '10px',
//                             fontSize: '16px',
//                             border: '1px solid #ccc',
//                             borderRadius: '5px'
//                         }} />
//                     </div>
//                     <div style={{ marginBottom: '15px' }}>
//                         <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Email</label>
//                         <input type="email" id="email" value={email} placeholder="Email" onChange={(e) => handleInputChange(e, setEmail)} ref={firstRef} style={{
//                             width: '100%',
//                             padding: '10px',
//                             fontSize: '16px',
//                             border: '1px solid #ccc',
//                             borderRadius: '5px'
//                         }} />
//                     </div>
//                     <div style={{ marginBottom: '15px' }}>
//                         <label htmlFor="pwd" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Password</label>
//                         <input type="password" id="pwd" value={pwd} placeholder="Password" onChange={(e) => handleInputChange(e, setPwd)} ref={secRef} style={{
//                             width: '100%',
//                             padding: '10px',
//                             fontSize: '16px',
//                             border: '1px solid #ccc',
//                             borderRadius: '5px'
//                         }} />
//                     </div>
//                     <div style={{ marginBottom: '15px' }}>
//                         <label htmlFor="branch" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Branch</label>
//                         <select id="branch" value={branch} onChange={(e) => handleInputChange(e, setBranch)} ref={thirdRef} style={{
//                             width: '100%',
//                             padding: '10px',
//                             fontSize: '16px',
//                             border: '1px solid #ccc',
//                             borderRadius: '5px'
//                         }}>
//                             <option value="">Select Branch</option>
//                             <option value="CSE">Computer Science Engineering</option>
//                             <option value="ECE">Electronics and Communication Engineering</option>
//                             <option value="EEE">Electrical and Electronics Engineering</option>
//                             <option value="ME">Mechanical Engineering</option>
//                             <option value="CE">Civil Engineering</option>
//                         </select>
//                     </div>
//                     <div style={{ marginBottom: '15px' }}>
//                         <label htmlFor="year" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Year</label>
//                         <select id="year" ref={yearRef} style={{
//                             width: '100%',
//                             padding: '10px',
//                             fontSize: '16px',
//                             border: '1px solid #ccc',
//                             borderRadius: '5px'
//                         }}>
//                             <option value="">Select Year</option>
//                             <option value="1">1st Year</option>
//                             <option value="2">2nd Year</option>
//                             <option value="3">3rd Year</option>
//                             <option value="4">4th Year</option>
//                         </select>
//                     </div>
//                     <div style={{ marginBottom: '15px' }}>
//                         <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Gender</label>
//                         <div style={{ display: 'flex', justifyContent: 'space-around' }}>
//                             <div>
//                                 <input type="radio" id="male" name="gender" value="Male" checked={gender === 'Male'} onChange={() => handleGenderChange('Male')} />
//                                 <label htmlFor="male" style={{ marginLeft: '5px' }}>Male</label>
//                             </div>
//                             <div>
//                                 <input type="radio" id="female" name="gender" value="Female" checked={gender === 'Female'} onChange={() => handleGenderChange('Female')} />
//                                 <label htmlFor="female" style={{ marginLeft: '5px' }}>Female</label>
//                             </div>
//                             <div>
//                                 <input type="radio" id="other" name="gender" value="Other" checked={gender === 'Other'} onChange={() => handleGenderChange('Other')} />
//                                 <label htmlFor="other" style={{ marginLeft: '5px' }}>Other</label>
//                             </div>
//                         </div>
//                     </div>
//                     <div style={{ marginBottom: '15px' }}>
//                         <button type="submit" style={{
//                             width: '100%',
//                             padding: '10px',
//                             backgroundColor: '#000',
//                             color: '#fff',
//                             border: 'none',
//                             borderRadius: '5px',
//                             fontSize: '16px',
//                             cursor: 'pointer',
//                             transition: 'background-color 0.3s ease'
//                         }}>Register</button>
//                     </div>
//                     {message && <h4 style={{ textAlign: 'center', marginTop: '20px', fontSize: '18px', color: 'green' }}>{message}</h4>}
//                 </form>
//             ) : (
//                 <form onSubmit={btnSubmitLogin} style={{ display: 'flex', flexDirection: 'column' }}>
//                     <h3 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px' }}>Login</h3>
//                     <div style={{ marginBottom: '15px' }}>
//                         <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Email</label>
//                         <input type="email" id="email" value={email} placeholder="Email" onChange={(e) => handleInputChange(e, setEmail)} ref={firstRef} style={{
//                             width: '100%',
//                             padding: '10px',
//                             fontSize: '16px',
//                             border: '1px solid #ccc',
//                             borderRadius: '5px'
//                         }} />
//                     </div>
//                     <div style={{ marginBottom: '15px' }}>
//                         <label htmlFor="pwd" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Password</label>
//                         <input type="password" id="pwd" value={pwd} placeholder="Password" onChange={(e) => handleInputChange(e, setPwd)} ref={secRef} style={{
//                             width: '100%',
//                             padding: '10px',
//                             fontSize: '16px',
//                             border: '1px solid #ccc',
//                             borderRadius: '5px'
//                         }} />
//                     </div>
//                     <div style={{ marginBottom: '15px' }}>
//                         <button type="submit" style={{
//                             width: '100%',
//                             padding: '10px',
//                             backgroundColor: '#000',
//                             color: '#fff',
//                             border: 'none',
//                             borderRadius: '5px',
//                             fontSize: '16px',
//                             cursor: 'pointer',
//                             transition: 'background-color 0.3s ease'
//                         }}>Login</button>
//                     </div>
//                 </form>
//             )}
//         </div>
//     );
// }

// export default LoginRegister;
import { useEffect, useRef, useState } from "react";

function LoginRegister() {
    const [isRegister, setIsRegister] = useState(false);
    const firstRef = useRef(null);
    const secRef = useRef(null);
    const thirdRef = useRef(null);
    const yearRef = useRef(null);
    const [gender, setGender] = useState('');
    const [message, setMessage] = useState('');
    const [collegeId, setCollegeId] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [branch, setBranch] = useState('CSE');

    useEffect(() => {
        firstRef.current.focus();
    }, []);

    const handleInputChange = (event, setState) => {
        setState(event.target.value);
        console.log(event.target.id, event.target.value);  // Log the field id and its value
    };

    const handleGenderChange = (value) => {
        setGender(value);
        console.log("Gender:", value);  // Log the gender value
    };

    const btnSubmitRegister = (event) => {
        event.preventDefault();
        console.log(`College ID: ${collegeId}`);
        console.log(`Email: ${email}`);
        console.log(`Password: ${pwd}`);
        console.log(`Branch: ${branch}`);
        console.log(`Year: ${yearRef.current.value}`);
        console.log(`Gender: ${gender}`);

        if (firstRef.current.value === secRef.current.value) {
            setMessage("Correct");
        } else {
            setMessage("Incorrect");
        }

        setCollegeId('');
        setEmail('');
        setPwd('');
        setBranch('CSE');
        setGender('');
        yearRef.current.value = '';

    };

    const btnSubmitLogin = (event) => {
        event.preventDefault();
        console.log(`Email: ${email}`);
        console.log(`Password: ${pwd}`);

        setEmail('');
        setPwd('');
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
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                <button onClick={() => setIsRegister(false)} style={{
                    width: '50%',
                    padding: '10px',
                    backgroundColor: isRegister ? '#ccc' : '#000',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                }}>Login</button>
                <button onClick={() => setIsRegister(true)} style={{
                    width: '50%',
                    padding: '10px',
                    backgroundColor: isRegister ? '#000' : '#ccc',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                }}>Register</button>
            </div>
            {isRegister ? (
                <form onSubmit={btnSubmitRegister} style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px' }}>Register</h3>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="clgId" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>College Id</label>
                        <input type="text" id="clgId" value={collegeId} placeholder="College Id" onChange={(e) => handleInputChange(e, setCollegeId)} style={{
                            width: '100%',
                            padding: '10px',
                            fontSize: '16px',
                            border: '1px solid #ccc',
                            borderRadius: '5px'
                        }} />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Email</label>
                        <input type="email" id="email" value={email} placeholder="Email" onChange={(e) => handleInputChange(e, setEmail)} ref={firstRef} style={{
                            width: '100%',
                            padding: '10px',
                            fontSize: '16px',
                            border: '1px solid #ccc',
                            borderRadius: '5px'
                        }} />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="pwd" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Password</label>
                        <input type="password" id="pwd" value={pwd} placeholder="Password" onChange={(e) => handleInputChange(e, setPwd)} ref={secRef} style={{
                            width: '100%',
                            padding: '10px',
                            fontSize: '16px',
                            border: '1px solid #ccc',
                            borderRadius: '5px'
                        }} />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="branch" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Branch</label>
                        <select id="branch" value={branch} onChange={(e) => handleInputChange(e, setBranch)} ref={thirdRef} style={{
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
                        <select id="year" ref={yearRef} style={{
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
                                <input type="radio" id="male" name="gender" value="Male" checked={gender === 'Male'} onChange={() => handleGenderChange('Male')} />
                                <label htmlFor="male" style={{ marginLeft: '5px' }}>Male</label>
                            </div>
                            <div>
                                <input type="radio" id="female" name="gender" value="Female" checked={gender === 'Female'} onChange={() => handleGenderChange('Female')} />
                                <label htmlFor="female" style={{ marginLeft: '5px' }}>Female</label>
                            </div>
                            <div>
                                <input type="radio" id="other" name="gender" value="Other" checked={gender === 'Other'} onChange={() => handleGenderChange('Other')} />
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
            ) : (
                <form onSubmit={btnSubmitLogin} style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px' }}>Login</h3>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Email</label>
                        <input type="email" id="email" value={email} placeholder="Email" onChange={(e) => handleInputChange(e, setEmail)} ref={firstRef} style={{
                            width: '100%',
                            padding: '10px',
                            fontSize: '16px',
                            border: '1px solid #ccc',
                            borderRadius: '5px'
                        }} />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="pwd" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Password</label>
                        <input type="password" id="pwd" value={pwd} placeholder="Password" onChange={(e) => handleInputChange(e, setPwd)} ref={secRef} style={{
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
                </form>
            )}
        </div>
    );
}

export default LoginRegister;
