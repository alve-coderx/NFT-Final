import React, { useContext, useState } from 'react'
import { DarkModeContext } from '../../Context/ModeProvider'
import { IoIosArrowBack } from 'react-icons/io'
import { FiEye } from 'react-icons/fi'
import { MdOutlineShare } from 'react-icons/md'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import "./style.css"
import { IoMdAddCircleOutline } from 'react-icons/io'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
  } from '@solana/wallet-adapter-react-ui';
const CreateRaffle = () => {
    const { darkMode } = useContext(DarkModeContext)
    const [show, setShow] = useState();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
        height: '60vh',
        bgcolor: 'rgb(34, 19, 46)',
        border: '2px solid #000',
        boxShadow: 24,
        border: '4px solid #8b5cf6',
        borderRadius: '20px',
        p: 4,
    };
    return (
        <div className='container mx-auto' style={{ minHeight: '90vh' }}>
            {
                !window?.solflare?.publicKey?.toString() ?
                    (
                        <>
                            <h1 style={{ color: '#42296A', paddingTop: '100px' }} className="text-xl font-bold tracking-tight py-8 sm:text-5xl md:text-5xl">
                                <span className="block  xl:inline">CREATE NEW RAFFLE</span>
                            </h1>
                            <div className='p-6 rounded-xl bg-[rgba(54,37,68)]' style={{ border: '2px solid rgba(120,82,150)' }}>
                                <h5 className="mb-2 text-xl font-bold tracking-tight" style={{ color: '#8b5cf6' }}>No wallet detected.</h5>
                                <h5 className="mb-2 text-xl font-bold tracking-tight" style={{ color: 'white' }}>Please connect your wallet to continue.</h5>
                            </div>
                        </>
                    )
                    :

                    (

                        <div style={{ minHeight: '100vh' }} className='  py-[140px] sm:flex md:flex block sm:justify-between'>
                            <div>
                                <div className="relative border-4 p-10 hover:border-[#8b5cf6] sm:max-w-sm md:max-w-md rounded-xl  shadow-md  ">
                                    <div className="py-5">
                                        <button onClick={handleOpen} style={{ display: "flex", flexDirection: 'column' }} className="w-full  items-center p-3 px-3 text-sm font-medium  rounded-2xl focus:ring-4 focus:outline-none focus:ring-blue-300  dark:focus:ring-blue-800">
                                            <p className='text-6xl hover:text-[#8b5cf6] text-white'><IoMdAddCircleOutline /></p>
                                            <p className='text-2xl hover:text-[#8b5cf6] text-white'>Choose NFT for Raffle</p>
                                        </button>
                                        <Modal
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box >
                                                <Box sx={style}>
                                                    <p  style={{color : 'white',fontSize : '40px' ,position : 'absolute',right : '0', top : '-46px', cursor : 'pointer'}}><AiOutlineCloseCircle onClick={handleClose}/></p>
                                                    <Typography style={{ color: '#8b5cf6' }} id="modal-modal-title" variant="h6" component="h2">
                                                        Choose NFT for Raffle Prize
                                                    </Typography>
                                                    <Typography style={{ color: '#8b5cf6' }} id="modal-modal-description" sx={{ mt: 2 }}>
                                                        Contact us to get your NFT verified
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                            <div className='p-5 w-full rounded-lg max-w-[710px]' style={{ backgroundColor: darkMode ? '#362544' : 'white' }}>
                                <div className='mb-10'>
                                    <div className='flex justify-between mb-10'>
                                        <div className="relative mx-2">
                                            <p className="mb-1 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'gray' : 'black' }}>Raffle End Date</p>
                                            <input style={{ background: 'none' }} name="start" type="text" className="bg-[trasnparent]  border border-[#8b5cf6] text-gray-900 sm:text-xl rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-5 dark:bg-[trasnparent] dark:border-[#8b5cf6] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="dd/mm/yy--:-- --" />
                                            <div className="flex absolute inset-y-6 left-0 bottom-0 items-center pl-3 pointer-events-none">
                                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                            </div>
                                        </div>
                                        <div className='relative mx-2'>
                                            <p className="mb-1 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'gray' : 'black' }}>Ticket Supply</p>
                                            <input style={{ background: 'none' }} name="start" type="text" className="bg-[trasnparent]  border border-[#8b5cf6] text-gray-900 sm:text-xl rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-5 dark:bg-[trasnparent] dark:border-[#8b5cf6] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                                        </div>
                                        <div className='relative mx-2 '>
                                            <p className="mb-1 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'gray' : 'black' }}>Ticket Supply</p>
                                            <div className='flex'>
                                                <input style={{ background: 'none' }} name="start" type="text" className="bg-[trasnparent]  border border-[#8b5cf6] text-gray-900 sm:text-xl rounded-l-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-5 dark:bg-[trasnparent] dark:border-[#8b5cf6] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                                                <input style={{ background: 'none' }} name="start" type="text" className="bg-[trasnparent]  border border-[#8b5cf6] text-gray-900 sm:text-xl rounded-r-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-5 dark:bg-[trasnparent] dark:border-[#8b5cf6] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="FOXY" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className='mb-10'>
                                        <div>
                                            <p className="mb-2 text-sm font-bold tracking-tight" style={{ color: darkMode ? '#8b5cf6' : 'gray' }}><input onChange={() => setShow(!show)} type="checkbox" /> Enable Advanced Mode</p>
                                            <p className="mb-2 text-lg font-bold tracking-tight" style={{ color: 'orange' }}>  Holder Only Mode</p>

                                        </div>
                                        {
                                            show ? (
                                                <>
                                                    <input style={{ background: 'none' }} name="start" type="text" className="placClr border border-[#8b5cf6] text-[#8b5cf6] sm:text-xl rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-[trasnparent] dark:border-[#8b5cf6] dark:placeholder-gray-400 dark:text-[#8b5cf6] dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter 1st Creator Address" /><br />
                                                    <input style={{ background: 'none' }} name="start" type="text" className="placClr border border-[#8b5cf6] text-[#8b5cf6] sm:text-xl rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-[trasnparent] dark:border-[#8b5cf6] dark:placeholder-gray-400 dark:text-[#8b5cf6] dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter 2nd Creator Address" /><br />
                                                    <input style={{ background: 'none' }} name="start" type="text" className="placClr border border-[#8b5cf6] text-[#8b5cf6] sm:text-xl rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-[trasnparent] dark:border-[#8b5cf6] dark:placeholder-gray-400 dark:text-[#8b5cf6] dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter 3rd Creator Address" /><br />
                                                    <h3 className="mb-2 text-lg font-bold tracking-tight" style={{ color: 'orange' }}>Ticket Limit Per Wallet</h3>
                                                    <input style={{ background: 'none' }} name="start" type="text" className="placClr border border-[#8b5cf6] text-gray-900 sm:text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-[trasnparent] dark:border-[#8b5cf6] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="No Limit" /><br />
                                                    <h3 className="mb-2 text-lg font-bold tracking-tight" style={{ color: 'orange' }}>Number of winners (e.g. WL spots)</h3>
                                                    <input style={{ background: 'none' }} name="start" type="text" className="placClr border border-[#8b5cf6] text-gray-900 sm:text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-[trasnparent] dark:border-[#8b5cf6] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Max 250" /><br />
                                                </>

                                            )
                                                :
                                                ''
                                        }

                                    </div>
                                    <div className='flex justify-between mb-10'>
                                        <div>
                                            <p className="mb-2 text-sm font-bold tracking-tight" style={{ color: darkMode ? '#8b5cf6' : 'gray' }}><input type='checkbox' /> I accept the terms & conditions below. </p>
                                        </div>
                                        <Link to="/create/raffle" style={{ background: '#a3e635' }} className="inline-flex items-center p-4 px-7 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Create Raffle
                                        </Link>
                                    </div>
                                </div>
                                <div className=' p-5 rounded-lg' style={{ background: darkMode ? '#392450' : '#EDE9FE', border: darkMode && '2px solid #8b5cf6' }}>
                                    <p style={{ color: '#8b5cf6' }} className="mb-2 text-sm font-bold tracking-tight ">Terms & Conditions:</p>
                                    <p className="mb-2 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>1. When you create a raffle, the NFT prize you have chosen will be transferred from your wallet into our escrow.</p>
                                    <p className="mb-2 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>2. An up-front rent fee, charged in SOL will be taken in proportion to number of tickets. This will be auto refunded after the raffle concludes.</p>
                                    <p className="mb-2 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>3. Holder only raffles cost 1 SOL per raffle withdrawn at the time of creation.</p>
                                    <p className="mb-2 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>4. Raffles will proceed regardless if all tickets are sold or not.</p>
                                    <p className="mb-2 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>5. The creator can end the raffle after the specified date and time.</p>
                                    <p className="mb-2 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>6. The raffle should run for a minimum of 24 hours.</p>
                                    <p className="mb-2 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>7. Rafffle will take a 5% commission fee from the ticket sales.</p>
                                    <p className="mb-2 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>8. Rafffle will take a 5% commission fee from the ticket sales.</p>
                                    <p className="mb-2 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>9. Additionally, they get to be on "Featured" section of the home page.</p>
                                    <p className="mb-2 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>10. Your NFT will be returned if there's no ticket sales.</p>

                                </div>
                            </div>

                        </div>
                    )
            }
        </div>
    )
}

export default CreateRaffle