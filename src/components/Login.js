// src/components/Login.js
import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false); // State untuk password visibility

    // Fungsi untuk toggle password visibility
    const togglePassword = () => setShowPassword(!showPassword);

    return (
        <div className="bg-[#FFFDF3]">
            <Header />
            <section className="flex items-center justify-center min-h-[90vh]">
                <div className="w-full max-w-md bg-white p-8 rounded-lg border-[0.1px]">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Masuk ke Akun</h2>
                        <p className="text-gray-500 font-normal">Yuk, lanjutin belajarmu di videobelajar.</p>
                    </div>
                    <form action="#">
                        {/* E-Mail */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">E-Mail <span className="text-red-500">*</span></label>
                            <input type="email" name="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" required />
                        </div>

                        {/* Kata Sandi */}
                        <div className="mb-4 relative">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Kata Sandi</label>
                            <input 
                                type={showPassword ? "text" : "password"} 
                                name="password" 
                                id="password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" 
                                required 
                            />
                            {/* Ikon mata untuk toggle password */}
                            <span 
                                onClick={togglePassword} 
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                                style={{ marginTop: "15px" }}
                            >
                                {showPassword ? (
                                    <i className="fa fa-eye-slash" aria-hidden="true"></i>
                                ) : (
                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                )}
                            </span>
                        </div>

                        {/* Lupa Password */}
                        <div className="text-right my-4">
                            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Lupa Password?</a>
                        </div>

                        {/* Tombol Masuk */}
                        <div className="flex items-center justify-between mb-6">
                            <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md">Masuk</button>
                        </div>

                        {/* Link Daftar */}
                        <div className="flex items-center justify-center mb-4">
                            <a href="/register" className="w-full bg-green-100 hover:bg-green-200 text-green-700 font-semibold py-2 px-4 rounded-md text-center">Daftar</a>
                        </div>

                        {/* Atau Login dengan Google */}
                        <div className="flex items-center space-x-4 mt-[-4px] mb-[5px]">
                            <hr className="flex-grow border-t border-gray-300" />
                            <p className="text-gray-500">atau</p>
                            <hr className="flex-grow border-t border-gray-300" />
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="w-full flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-md">
                                <img src="/assets/google.png" alt="Google" className="mr-2" height="24" width="24" />
                                Masuk dengan Google
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Login;
