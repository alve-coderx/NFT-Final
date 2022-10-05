/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext, useEffect, useState } from 'react'
import { Dialog, Menu, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { MdOutlineDarkMode } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../Context/ModeProvider'
import { GiBarbedSun, } from 'react-icons/gi'
import { GrAddCircle } from 'react-icons/gr'
import { AiOutlineUser, AiOutlineHome, AiOutlinePlusCircle, AiFillInfoCircle } from 'react-icons/ai'
import { BiHomeAlt } from 'react-icons/bi'
import copy from "copy-to-clipboard";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const { setDarkMode, darkMode } = useContext(DarkModeContext);
  const [open, setOpen] = useState(false)
  const [solflare, setSolflare] = useState(localStorage.getItem('isConnected') === 'true')
  const [clip, setClip] = useState(window.location.pathname)
  const copyToClipboard = () => {
    copy(clip);
  }
  const connect = () => {
    window?.solflare?.connect()
      .then(() => {
        setSolflare(window?.solflare?.isConnected)
        localStorage.setItem('isConnected',true)
        localStorage.setItem('puKey',window?.solflare?.publicKey?.toString())
      })
  }

  const disconnect = () => {
    window?.solflare?.disconnect()
      .then(() => {
        setSolflare(window?.solflare?.isConnected)
        localStorage.setItem('isConnected',false)
        localStorage.setItem('puKey','')

      })
  }
  const { publicKey, sendTransaction,connected } = useWallet();
  console.log(connected)

  const navigation = [
    { name: 'My Raffle', href: '/my', icon: <BiHomeAlt /> },
    { name: 'My Profile', href: '/profile', icon: <AiOutlineUser /> },
    { name: 'Create Raffle', href: '/create/raffle', icon: <AiOutlinePlusCircle /> },
    { name: 'Raffles Home', href: '/', icon: <AiOutlineHome /> },
    { name: 'Buyers Guid', href: '#', icon: <AiFillInfoCircle /> },
  ]
  return (
    <div className="fixed z-10 bg-white pb-5 w-full" style={{ background: '#281E35' }} >
      <Popover >
        <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between sm:h-10 lg:justify-between " aria-label="Global">
            <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
              <div className="flex w-full items-center justify-between md:w-auto">
                <div className='lg:flex items-center block' >
                  <Link to="/">
                    <span className="sr-only">Your Company</span>
                    <img
                      alt="Your Company"
                      className="h-20 w-30 "
                      src="https://i.ibb.co/Wt787GZ/logo.png"
                    />
                  </Link>
                  <div>
                    <p style={{ color: '#42296A' }} className="hidden lg:block text-sm">Solana Network: <span className="text-sm" style={{ color: '#8b5cf6' }}> 2837 TPS </span></p>
                    <img
                      alt="Your Company"
                      className="hidden lg:block h-10 w-30 "
                      src="https://i.ibb.co/18Tgkph/adsasdasdasdas.png"
                    />
                  </div>
                </div>

                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon onClick={() => setOpen(true)} className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8 md:pr-4 items-center">
              <p onClick={() => setDarkMode(!darkMode)} style={{ cursor: 'pointer', fontSize: '20px', color: '#8b5cf6', border: '3px solid #8b5cf6', padding: "10px", borderRadius: '50px' }}>
                {
                  darkMode ?
                    <GiBarbedSun />
                    :
                    <MdOutlineDarkMode />
                }

              </p>
              <Link to="/create/raffle" style={{ background: 'linear-gradient(to right, #56ab2f, #a8e063)' }} className="text-white inline-flex items-center py-3 px-6 text-lg font-medium text-center  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <p className='text-lg text-white'>Create Raffle</p>
              </Link>

              
                  <WalletMultiButton/>
                 {
                   publicKey !== null &&
                   (
                     <>
                       <Link to='/my'>
                         <p style={{ cursor: 'pointer', background: '#6366f1' }} className="inline-flex items-center p-4 text-xl font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                           <AiOutlineUser />
                         </p>
                       </Link>
                     </>
                   )
                 }



            </div>
          </nav>
        </div>

        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                      <div className="flex h-full flex-col overflow-y-scroll bg-[rgba(54,37,68)] shadow-xl">
                        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <Dialog.Title className="text-lg font-medium text-gray-900">
                              <Link to="/">
                                <span className="sr-only">Your Company</span>
                                <img
                                  alt="Your Company"
                                  className="h-20 w-44 "
                                  src="https://i.ibb.co/Wt787GZ/logo.png"
                                />
                              </Link>
                            </Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="-m-2 p-2  text-gray-400 hover:text-gray-500"
                                onClick={() => setOpen(false)}
                              >
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon className=" h-6 w-6" aria-hidden="true" />
                              </button>
                            </div>
                          </div>

                          <div className="mt-8">
                            <div className="flow-root">
                              <p href="#" style={{ background: '#6366f1' }} className=" w-full p-4  text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Select Wallet
                              </p>
                              {navigation.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  className="flex items-center mx-3 my-2 rounded-xl px-3 py-7 text-xl font-medium text-white bg-[rgba(0,0,0,.1)] hover:bg-[#4C1D95] hover:text-white"
                                >
                                  {item.icon}
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </Popover>
    </div>

  )
}
