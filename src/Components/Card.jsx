import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../Context/ModeProvider';
import { BsFillCheckCircleFill, BsFillHeartFill } from 'react-icons/bs'
import { toast, ToastContainer } from 'react-toastify';


const Card = ({ card }) => {
    const { darkMode } = useContext(DarkModeContext);
    const [add, setAdd] = useState(null);
    const clickHandler = (index) => {
        setAdd((prev) => {
            return prev === index ? null : index;
        });
        notify()
    };
    const notify = () => {
        toast.dark((add ? `Removed ${card.title} From Favorait` : `Added ${card.title} To Favorait`), {
          toastId: 1,
          position: "bottom-left",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    
    return (

        <div className="relative h-full bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700" style={{maxWidth : '400px', background: darkMode ? '#362544' : 'white' }}>
            <div onClick={() => clickHandler(card._id)} style={{ position: 'absolute',right : '10px',top : '10px',padding: '10px', background: 'white', borderRadius: '10px', margin: '2px', cursor: 'pointer', color : add ? 'red' : 'gray' }}>
                <BsFillHeartFill  />
                <ToastContainer
                    theme='theme'
                />
            </div>
            <img src={card.imageSrc} alt="" className='rounded-lg' />
            <div className="p-5">
                    <p className="flex items-center mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-slate-400">Noteworthy technology acquisitions 2021 <BsFillCheckCircleFill style={{ color: '#07bc0c' }} /></p>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>Noteworthy technology acquisitions 2021</h5>
                    <p className="mb-2 text-xl font-bold tracking-tight " style={{ color: '#8b5cf6' }}>@mjbreese613</p>
                    <div className='flex justify-between'>
                        <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-slate-400">Tickets Remaining</h5>
                        <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-slate-400">Price/Ticket</h5>
                    </div>
                    <div className='flex justify-between'>
                        <p className="mb-2 text-xl font-bold tracking-tight " style={{ color: darkMode ? '#4cd964' : '#8b5cf6' }} >81/100</p>
                        <p className="mb-2 text-xl font-bold tracking-tight " style={{ color: darkMode ? '#4cd964' : '#8b5cf6' }} >0.07 SOL</p>
                    </div>
                <Link to={`raffle/${card._id}`}>
                    <button className="w-full items-center p-3 px-3 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300  dark:focus:ring-blue-800" style={{ background: darkMode ? 'transparent' : '#6366f1', border: darkMode && "2px solid #8b5cf6", color: darkMode ? '#8b5cf6' : 'white' }}>
                        <p className='text-2xl'>View Raffle</p>
                        <p className='text-sm'>Ends in 54 min 32 sec</p>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Card