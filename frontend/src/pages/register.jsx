import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

    const [visible, setVisible] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        setVisible(true);
        document.body.classList.add('auth-bg');
        return () => document.body.classList.remove('auth-bg');
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [id]: value
        }));
    };

    const onSubmitForm = async (e) => {

        e.preventDefault();

        setError('');

        try {

            const apiUrl = import.meta.env.VITE_API_URL || '';

            const response = await axios.post(
                `${apiUrl}/auth/register`,
                formData
            );

            console.log(response.data);

            alert('Registration Successful');

            navigate('/login');

        } catch (error) {

            console.error(error);

            setError(
                error.response?.data?.message ||
                'Registration failed'
            );
        }
    };

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
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">Join EduReach</h2>
                    <p className="mt-2 text-sm text-gray-600">Create an account to start your journey</p>
                </div>

                <form className="space-y-5" onSubmit={onSubmitForm}>
                    {error && (
                        <div className="p-3 text-sm text-red-500 border border-red-200 rounded-lg bg-red-50">
                            {error}
                        </div>
                    )}
                    <div>
                        <label htmlFor="name" className="block ml-1 text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 mt-1 transition duration-200 border border-gray-200 outline-none bg-gray-50 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:border-transparent"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
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
                        Register
                    </button>
                </form>

                <p className="text-sm text-center text-gray-500">
                    Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;