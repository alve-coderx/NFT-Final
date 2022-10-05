import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import data from '../../Components/data.json'
import { FiEye } from 'react-icons/fi'
import { IoIosArrowBack } from 'react-icons/io'
import { MdOutlineShare } from 'react-icons/md'
import { BsFillFlagFill, BsFillHeartFill } from 'react-icons/bs'
import { FaIdCard } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import copy from "copy-to-clipboard";  
import './style.css'
import { DarkModeContext } from '../../Context/ModeProvider'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify';
import { Circles } from 'react-loader-spinner'

const hotelCards = [
  { name: 'Details' },
  { name: 'Participants' },
  { name: 'Trasnsaction' }
]

const RaffleDetails = () => {
  const { id } = useParams()
  const [selectedItem, setSelectedItem] = useState(data.filter(item => item._id == id))
  const [active, setActive] = useState(hotelCards[0]);
  const { darkMode } = useContext(DarkModeContext);
  const [add, setAdd] = useState(null);
  const [clip,setClip]=useState(window.location.pathname)

  const copyToClipboard = () => {
    copy(clip);
    copied()
 }
  const copied = () => {
    toast.dark((`Copied` ), {
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
  const clickHandler = (index) => {
    setAdd((prev) => {
      return prev === index ? null : index;
    });
    notify()
  };
  const notify = () => {
    toast.dark(( add ? `Removed ${selectedItem[0].title} From Favorait` : !add ? `Added ${selectedItem[0].title} To Favorait` : ''), {
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
    <>

      {
        active ? (
          <div style={{ minHeight: '100vh' }} className='lg:px-[100px]  py-[140px] grid lg:grid-cols-2 grid-cols-1 gap-0'>

            <div>
              <div className="relative sm:max-w-sm md:max-w-md rounded-lg  shadow-md  ">
                <p onClick={() => clickHandler(selectedItem[0]._id)} style={{ position: 'absolute',right : '10px',top : '10px', padding: '10px', background: 'white', borderRadius: '10px',  cursor: 'pointer', color: add ? 'red' : 'gray' }}>
                  <BsFillHeartFill />
                  <ToastContainer
                    theme='theme'
                  />
                </p>
                <img className="rounded-3xl" src={selectedItem[0]?.imageSrc} alt="" />
                <div className="py-5">
                  <button className="w-full bg-[#6366f1] items-center p-3 px-3 text-sm font-medium text-center text-white rounded-2xl focus:ring-4 focus:outline-none focus:ring-blue-300  dark:focus:ring-blue-800">
                    <p className='text-2xl'>Select Wallet</p>
                  </button>
                </div>
              </div>
            </div>
            <div className='p-5  rounded-lg' style={{ backgroundColor: darkMode ? '#362544' : 'white' }}>
              <div>
                <div className='flex justify-between'>
                  <p className="mb-2 text-sm font-bold tracking-tight " style={{ color: darkMode ? '#8b5cf6' : 'gray' }}>Noteworthy technology </p>
                  <Link to='/'><p className="flex items-center text-lg font-bold tracking-tight text-gray-900 dark:text-slate-400" style={{ color: '#8b5cf6' }}><IoIosArrowBack /> Back </p></Link>

                </div>
                <div className='flex justify-between'>
                  <h5 className="flex items-center mb-2 text-2xl font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>Noteworthy technology <span className='ml-2 text-2xl font-bold' style={{ color: '#8b5cf6' }}><FiEye /></span></h5>
                  <p className="flex items-center text-lg font-bold tracking-tight text-gray-900 dark:text-slate-400" style={{ color: '#8b5cf6',cursor : 'pointer' }} onClick={copyToClipboard}><MdOutlineShare /> share </p>

                </div>
                <div className='flex justify-between'>
                  <div>
                    <p className="mb-2 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>NFT Floor Price: <span style={{ color: '#8b5cf6' }}>36.429 </span> Total Ticket Value: <span style={{ color: '#8b5cf6' }}>36.429 </span> </p>
                  </div>
                  <p className="flex items-center text-lg font-bold tracking-tight text-red-600	" ><BsFillFlagFill /> Report </p>
                </div>

              </div>
              <div className='p-5'>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'center', borderBottom: '2px solid gray', paddingBottom: '5px' }}>
                  {
                    hotelCards.map((link) => (
                      <p key={link.name} onClick={() => setActive(link)} style={{ cursor: 'pointer', fontWeight: 'bolder', background: active === link ? 'rgba(79,70,229)' : 'none', color: active === link ? 'white' : "#6366f1" }} className="mr-1 inline-flex items-center py-2 px-7 text-lg  text-center text-white  rounded-3xl  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {link.name}
                      </p>

                    ))
                  }
                </div>
                <div>
                  {
                    active?.name === 'Details' ?
                      (
                        <div>
                          <div className='flex justify-between py-5 '>
                            <div>
                              <p className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-slate-400">Ticket Sales Ends in:</p>
                              <h5 className="flex items-center mb-2 text-2xl font-bold tracking-tight  " style={{ color: darkMode ? 'white' : 'black' }}>5 hrs 8 mins 59 s</h5>
                            </div>
                            <div>
                              <p className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-slate-400">Ticket Cost:</p>
                              <h5 className="flex items-center mb-2 text-2xl font-bold tracking-tight  " style={{ color: darkMode ? 'white' : 'black' }}>10 REJECT</h5>
                            </div>
                          </div>
                          <div className='flex justify-between'>
                            <div>
                              <p className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-slate-400">Raffle Start Date:</p>
                              <h5 className="flex items-center mb-2 text-2xl font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>Sep 26, 2022</h5>
                            </div>
                            <div>
                              <p className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-slate-400">Tickets Remaining:</p>
                              <h5 className="flex items-center mb-2 text-2xl font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>684 / 3000</h5>
                            </div>
                          </div>
                          <div className='flex justify-between'>
                            <div>
                              <p className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-slate-400">Raffler:</p>
                              <h5 className="flex items-center mb-2 text-2xl font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>MonkeRejects <span style={{ color: '#8b5cf6' }} className='ml-2'><FaIdCard /></span> <span style={{ color: 'skyblue' }} className='ml-2'><AiOutlineTwitter /></span></h5>
                            </div>
                          </div>
                          <div className=' p-5 rounded-lg' style={{ background: darkMode ? '#392450' : '#EDE9FE', border: darkMode && '2px solid #8b5cf6' }}>
                            <p style={{ color: '#8b5cf6' }} className="mb-2 text-sm font-bold tracking-tight ">Terms & Conditions:</p>
                            <p className="mb-2 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>1. Here's a guide to buy into raffles.</p>
                            <p className="mb-2 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>2. All NFT prizes are held by rafffle in escrow and can be claimed by the winner or creator once the draw is done.</p>
                            <p className="mb-2 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>3. Raffle tickets cannot be refunded once bought.</p>
                            <p className="mb-2 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>4. Raffle tickets will not be refunded if you did not win the raffle.</p>
                            <p className="mb-2 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>5. You can only buy 20% of total tickets.</p>

                          </div>
                        </div>
                      )
                      :
                      active?.name === 'Participants' ?
                        (
                          <div>
                            <div className='scrollbar' style={{ overflowY: 'scroll', height: '400px' }}>
                              <table className="w-full text-sm text-left" style={{ color: darkMode ? "white" : 'black' }}>
                                <thead className="text-lg uppercase">
                                  <tr>
                                    <th scope="col" className="py-3 px-6">
                                      Wallet
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                      Ticket Bought
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {
                                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 11].map((ind) => (
                                      <tr className={darkMode ? `dark:hover:bg-[rgba(139,92,246)]` : `dark:hover:bg-[gray]`} style={{ color: darkMode ? "white" : 'black' }}>
                                        <th scope="row" className="py-4 px-6 font-xl whitespace-nowrap ">
                                          qstNWZCoEXK7Ro3kUbdasdasdasdas51231s3c0sa.0d
                                        </th>
                                        <th scope="row" className="py-4 px-6 font-xl whitespace-nowrap ">
                                          1
                                        </th>

                                      </tr>
                                    ))
                                  }

                                </tbody>
                              </table>

                            </div>
                            <div className=' p-5 rounded-lg' style={{ background: darkMode ? '#392450' : '#EDE9FE', border: darkMode && '2px solid #8b5cf6' }}>
                              <p style={{ color: '#8b5cf6' }} className="mb-2 text-sm font-bold tracking-tight ">Terms & Conditions:</p>
                              <p className="mb-2 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>1. Here's a guide to buy into raffles.</p>
                              <p className="mb-2 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>2. All NFT prizes are held by rafffle in escrow and can be claimed by the winner or creator once the draw is done.</p>
                              <p className="mb-2 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>3. Raffle tickets cannot be refunded once bought.</p>
                              <p className="mb-2 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>4. Raffle tickets will not be refunded if you did not win the raffle.</p>
                              <p className="mb-2 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>5. You can only buy 20% of total tickets.</p>

                            </div>
                          </div>
                        )
                        :
                        active?.name === 'Trasnsaction' ?
                          (
                            <div>
                              <div className='scrollbar' style={{ overflowY: 'scroll', height: '400px' }}>
                                <table className="w-full text-sm text-left" style={{ color: darkMode ? "white" : 'black' }}>
                                  <thead className="text-lg uppercase">
                                    <tr>
                                      <th scope="col" className="py-3 px-6">
                                        Tnx
                                      </th>
                                      <th scope="col" className="py-3 px-6">
                                        Buyers
                                      </th>
                                      <th scope="col" className="py-3 px-6">
                                        Date
                                      </th>
                                      <th scope="col" className="py-3 px-6">
                                        Tickets
                                      </th>

                                    </tr>
                                  </thead>
                                  <tbody>
                                    {
                                      [1, 2, 3, 4, 5, 6, 7, 8, 9, 11].map((ind) => (
                                        <tr className={darkMode ? `dark:hover:bg-[rgba(139,92,246)]` : `dark:hover:bg-[gray]`} style={{ color: darkMode ? "white" : 'black' }}>
                                          <th scope="row" className="py-4 px-6 font-xl whitespace-nowrap ">
                                            qstNWZCoEXK7Ro3kUb
                                          </th>
                                          <th scope="row" className="py-4 px-6 font-xl whitespace-nowrap ">
                                            T7ujw3LUG9sxXHuvkiYX3JgHw
                                          </th>
                                          <th scope="row" className="py-4 px-6 font-xl whitespace-nowrap ">
                                            29 Sep 18:19
                                          </th>
                                          <th scope="row" className="py-4 px-6 font-xl whitespace-nowrap ">
                                            1
                                          </th>

                                        </tr>
                                      ))
                                    }

                                  </tbody>
                                </table>

                              </div>
                              <div className=' p-5 rounded-lg' style={{ background: darkMode ? '#392450' : '#EDE9FE', border: darkMode && '2px solid #8b5cf6' }}>
                                <p style={{ color: '#8b5cf6' }} className="mb-2 text-sm font-bold tracking-tight ">Terms & Conditions:</p>
                                <p className="mb-2 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>1. Here's a guide to buy into raffles.</p>
                                <p className="mb-2 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>2. All NFT prizes are held by rafffle in escrow and can be claimed by the winner or creator once the draw is done.</p>
                                <p className="mb-2 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>3. Raffle tickets cannot be refunded once bought.</p>
                                <p className="mb-2 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>4. Raffle tickets will not be refunded if you did not win the raffle.</p>
                                <p className="mb-2 text-sm font-bold tracking-tight" style={{ color: darkMode ? 'white' : 'black' }}>5. You can only buy 20% of total tickets.</p>

                              </div>
                            </div>
                          )
                          :
                          ""

                  }
                </div>
              </div>
            </div>
          </div>
        )
          :
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperclassName=""
            visible={true}
          />
      }
    </>
  )
}

export default RaffleDetails