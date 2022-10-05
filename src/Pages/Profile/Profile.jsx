import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Card from '../../Components/Card';
import hotelCards from '../../Components/FilterCard.jsx/filter.json'


const profile = [
    { name: 'Purchased' },
    { name: 'Created' },
    { name: 'Favorait' },
    { name: 'Profile', href: '/profile' },
]

const Profile = () => {
    const [active, setActive] = useState(profile[0]);
    


    return (
        <div style={{ minHeight: '100vh' }} className='pt-[150px] sm:pt-[120px]'>

            <div className='container flex ' style={{flexWrap : 'wrap'}}>
                <h1 style={{ color: '#42296A' }} className="text-4xl font-bold tracking-tight pb-3  sm:text-5xl md:text-5xl mx-10">
                    MY RAFFLES
                </h1>
                {
                    profile.map((link) => (
                        <Link to={link?.href}>
                            <h1>
                                <a key={link.name} onClick={() => setActive(link)} style={{ cursor: 'pointer', background: active === link ? 'rgba(79,70,229)' : 'none' }} className="w-full mr-1 inline-flex items-center p-4 px-7 text-sm font-medium text-center text-white bg-blue-700 rounded-3xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    {link.name}
                                </a>
                            </h1>
                        </Link>

                    ))
                }
            </div>
            {
                active?.name === "Favorait" && (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8' style={{ placeItems: 'center' }}>
                        {hotelCards[0]?.items?.slice(1, 5).map((item) => (
                            <Card key={item._id} card={item} />
                        ))}
                    </div>
                )
            }
            {
                active?.name === "Created" && (
                    <div className='container mx-auto' style={{ minHeight: '90vh' }}>
                        <div className='p-6 rounded-xl bg-[rgba(54,37,68)]' style={{ border: '2px solid rgba(120,82,150)' }}>
                            <h5 className="mb-2 text-xl font-bold tracking-tight" style={{ color: '#8b5cf6' }}>No wallet detected.</h5>
                            <h5 className="mb-2 text-xl font-bold tracking-tight" style={{ color: 'white' }}>Please connect your wallet to continue.</h5>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Profile