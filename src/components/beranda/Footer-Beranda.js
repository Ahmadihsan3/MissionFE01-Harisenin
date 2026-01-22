import React from 'react';

const FooterBeranda = () => {
    return (
        <footer className="bg-white py-8 border-t-[0.5px]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-between items-start space-y-8 lg:space-y-0">
                    {/* Info Perusahaan */}
                    <div className="w-full lg:w-1/3">
                        <img src="/assets/logo.png" alt="logo" className="h-6 md:h-8 mb-5" />
                        <p className="text-gray-600">
                            Gali Potensi Anda Melalui <br />
                            Pembelajaran Video di hariesok.id
                        </p>
                        <address className="text-gray-600 mt-2">
                            Jl. Usman Effendi <br />
                            No. 50 Lowokwaru, Malang +62-877-7123-1234
                        </address>
                    </div>

                    {/* Links */}
                    <div className="w-full lg:w-2/3 flex flex-wrap justify-between space-y-8 lg:space-y-0">
                        <div className="w-full sm:w-1/2 lg:w-1/3">
                            <h4 className="font-bold text-gray-900 mb-4">Kategori</h4>
                            <ul className="text-gray-600 space-y-2">
                                <li><a href="#" className="hover:underline">Digital & Teknologi</a></li>
                                <li><a href="#" className="hover:underline">Pemasaran</a></li>
                                <li><a href="#" className="hover:underline">Manajemen Bisnis</a></li>
                                <li><a href="#" className="hover:underline">Pengembangan Diri</a></li>
                                <li><a href="#" className="hover:underline">Desain</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-6 px-8">
                <hr className="border-t-2 border-grey mb-4" />
                <div className="flex items-center justify-between">
                    <p className="text-gray-500 text-left">©2023 Gerobak Sayur All Rights Reserved</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-500 hover:text-gray-800 p-2 rounded-full bg-white border border-black w-9 h-9 flex items-center justify-center">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-800 p-2 rounded-full bg-white border border-black w-9 h-9 flex items-center justify-center">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-800 p-2 rounded-full bg-white border border-black w-9 h-9 flex items-center justify-center">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-800 p-2 rounded-full bg-white border border-black w-9 h-9 flex items-center justify-center">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterBeranda;
