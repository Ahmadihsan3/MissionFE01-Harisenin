// src/components/Beranda.js
import React from 'react';
import Header from '../Header';
import GridBeranda from './Grid-Beranda';
import FooterBeranda from './Footer-Beranda';

const Beranda = () => {
    return (
        <div className="bg-[#FFFDF3]">
            <Header />
            <section className="relative bg-cover bg-center py-16 rounded-xl overflow-hidden mx-4 sm:mx-8 md:mx-auto max-w-[1170px] mt-6 md:mt-10 lg:mt-16" style={{ backgroundImage: "url('/assets/beranda.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="relative container mx-auto px-4 md:px-6 lg:px-10 pt-12 text-center text-white">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Revolusi Pembelajaran: Temukan <br /> Ilmu Baru melalui Platform Video <br /> Interaktif!
                    </h1>
                    <p className="text-gray-200 mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
                        Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak
                        hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
                    </p>
                    <a href="#" className="bg-green-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-green-600 text-sm md:text-base">
                        Temukan Video Course untuk Dipelajari!
                    </a>
                </div>
            </section>

            {/* Koleksi Video Pembelajaran Unggulan */}
            <section className="pt-16 bg-[#FFFDF3]">
                <div className="container max-w-[1200px] mx-auto px-4 text-start">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 leading-tight">
                            Koleksi Video Pembelajaran Unggulan
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex items-center justify-between mb-8 gap-4">
                        <div className="flex justify-start space-x-5 overflow-x-auto whitespace-nowrap flex-1 items-center no-scrollbar pr-2">
                            <a href="#" className="text-red-500 font-semibold border-b-4 border-red-500 pb-2 text-sm md:text-base">Semua Kelas</a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 transition text-sm md:text-base">Pemasaran</a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 transition text-sm md:text-base">Desain</a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 transition text-sm md:text-base">Pengembangan Diri</a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 transition text-sm md:text-base">Bisnis</a>
                        </div>
                    </div>
                    <GridBeranda />
                </div>
            </section>
            <FooterBeranda />
        </div>
    );
};

export default Beranda;
