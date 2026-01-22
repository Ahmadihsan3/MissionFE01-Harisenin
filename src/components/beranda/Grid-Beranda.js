import React from 'react';

const GridBeranda = () => {
    // Data untuk grid
    const gridItems = [
        { image: '/assets/grid 1.png', title: 'Big 4 Auditor Financial Analyst', description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik', avatar: '/assets/avatar-grid1.png', price: 'Rp 300K' },
        { image: '/assets/grid 2.png', title: 'Data Science & AI Expert', description: 'Pelajari keterampilan teknis untuk memulai karir di Data Science', avatar: '/assets/avatar-grid2.png', price: 'Rp 250K' },
        { image: '/assets/grid 3.png', title: 'Certified Business Analyst', description: 'Tingkatkan kemampuan analisis bisnis dengan kursus terkemuka', avatar: '/assets/avatar-grid3.png', price: 'Rp 280K' },
        { image: '/assets/grid 4.png', title: 'Digital Marketing Mastery', description: 'Kuasai digital marketing untuk mengembangkan bisnis', avatar: '/assets/avatar-grid4.png', price: 'Rp 270K' },
        { image: '/assets/grid 5.png', title: 'Finance for Non-Finance', description: 'Pelajari dasar-dasar keuangan untuk pemula', avatar: '/assets/avatar-grid5.png', price: 'Rp 320K' },
        { image: '/assets/grid 6.png', title: 'UX/UI Design Essentials', description: 'Desain aplikasi dengan pengalaman pengguna yang luar biasa', avatar: '/assets/avatar-grid6.png', price: 'Rp 350K' },
        { image: '/assets/grid 7.png', title: 'Project Management Fundamentals', description: 'Pelajari dasar-dasar manajemen proyek dan kepemimpinan', avatar: '/assets/avatar-grid7.png', price: 'Rp 330K' },
        { image: '/assets/grid 8.png', title: 'Leadership Skills Development', description: 'Kembangkan keterampilan kepemimpinan untuk sukses dalam karir', avatar: '/assets/avatar-grid8.png', price: 'Rp 360K' },
        { image: '/assets/grid 9.png', title: 'Public Speaking & Communication', description: 'Pelajari keterampilan berbicara di depan umum dengan percaya diri', avatar: '/assets/avatar-grid9.png', price: 'Rp 310K' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {gridItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg border overflow-hidden h-full flex flex-col">
                    <img src={item.image} alt="Image" className="w-full h-48 object-cover p-4 rounded-[25px]" />
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-lg font-semibold mb-2 line-clamp-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2 min-h-[40px]">
                            {item.description}
                        </p>
                        <div className="flex items-center mb-4 mt-auto">
                            <img src={item.avatar} alt="Avatar" className="w-10 h-10 mr-4 rounded-full object-cover" />
                            <div>
                                <p className="text-gray-900 font-medium line-clamp-1">Jenna Ortega</p>
                                <p className="text-gray-600 text-sm line-clamp-1">Senior Accountant di <span className="text-gray-500 font-bold">Gojek</span></p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-yellow-500">
                                <span className="text-xl">★★★★☆</span>
                                <span className="text-gray-600">(86)</span>
                            </div>
                            <div className="text-green-500 font-bold">
                                {item.price}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GridBeranda;
