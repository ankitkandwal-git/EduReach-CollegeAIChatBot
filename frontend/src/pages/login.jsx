import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [visible, setVisible] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const onSubmitForm = async(e) =>{
        e.preventDefault();
        setError('');
        try{
            const apiUrl = import.meta.env.VITE_API_URL || '';
            const response = await axios.post(`${apiUrl}/auth/login`, formData);
            
            if(response.data.token){
                localStorage.setItem('token', response.data.token);
                alert('Login successful!');
                navigate('/dashboard');
            } else {
                setError('Login failed: No token received.');
            }
        }catch(error){
            setError(error.response?.data?.message || 'Something went wrong during login');
            console.error('Login error:', error.response?.data || error.message);
        }
        
    }
    useEffect(() => {
        setVisible(true);
        document.body.classList.add('auth-bg');
        return () => document.body.classList.remove('auth-bg');
    }, []);

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center w-screen min-h-screen px-4 py-12 overflow-x-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
            <div className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 bg-blue-400 rounded-full w-96 h-96 opacity-20 translate-x-1/3 translate-y-1/3 blur-3xl"></div>

            <div
                className={`relative transition-all duration-1000 ease-out transform ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                } w-full max-w-md p-10 space-y-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20`}
            >
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">Welcome Back</h2>
                    <p className="mt-2 text-sm text-gray-600">Please enter your details to sign in</p>
                </div>

                <form className="space-y-5" onSubmit={onSubmitForm}>
                    {error && (
                        <div className="p-3 text-sm text-red-500 border border-red-200 rounded-lg bg-red-50">
                            {error}
                        </div>
                    )}
                    <div>
                        <label htmlFor="email" className="block ml-1 text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 mt-1 transition duration-200 border border-gray-200 outline-none bg-gray-50 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:border-transparent"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block ml-1 text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 mt-1 transition duration-200 border border-gray-200 outline-none bg-gray-50 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:border-transparent"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full px-4 py-3 font-bold text-white transition-all duration-300 transform shadow-lg bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-700 hover:to-purple-700 focus:ring-4 focus:ring-indigo-300 hover:-translate-y-1 active:scale-95"
                    >
                        Sign In
                    </button>
                </form>

                <p className="text-sm text-center text-gray-500">
                    Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
                </p>
            </div>
        </div>
    )
}

export default Login