import React, { useContext } from 'react'
import { DarkModeContext } from '../Context/ModeProvider'

const ProfileInfo = () => {
    const { darkMode } = useContext(DarkModeContext)
    return (
        <div className='container  mx-auto' style={{ minHeight: '90vh' }}>
            <h1 style={{ color: '#42296A', paddingTop: '100px' }} className="text-xl font-bold tracking-tight py-8 sm:text-5xl md:text-5xl">
                <span className="block  xl:inline">USER PROFILE</span>
            </h1>
            <div className='p-6 rounded-t-xl flex' style={{overflow : "hidden", border: '2px solid rgba(120,82,150)',background : darkMode ? 'rgba(54,37,68)' : 'white' }}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>{localStorage.getItem('puKey')}</h5>
            </div>
            <div className='flex justify-between p-6 ' style={{ border: '2px solid rgba(120,82,150)', background : darkMode ? 'rgba(54,37,68)' : 'white' }}>
                <h5 className="mb-2 text-xl font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>Wallet</h5>
                <h5 className="mb-2 text-xl font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>No. of Raffles Created</h5>
                <h5 className="mb-2 text-xl font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>FFF Holder</h5>    
            </div>
            <div className='flex justify-between p-6 rounded-b-xl ' style={{ border: '2px solid rgba(120,82,150)',background : darkMode ? 'rgba(54,37,68)' : 'white' }}>
                <h5 className="mb-2 text-xl font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>{localStorage.getItem('puKey').slice(1,15)}.....</h5>
                <h5 className="mb-2 text-xl font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>0</h5>
                <h5 className="mb-2 text-xl font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>FFF Holder</h5>    
            </div>
        </div>
    )
}

export default ProfileInfo