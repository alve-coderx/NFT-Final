import React, { useEffect, useState } from 'react'
import Card from '../Card';
import hotelCards from './filter.json'
import { AiOutlineCloseCircle } from 'react-icons/ai'
const FilterCard = () => {
    const [active, setActive] = useState(hotelCards[0]);
    const [isOpen, setIsOpen] = React.useState(false);
    const [subName, setSubName] = useState(hotelCards[0]);
    const [toggle, setToggle] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    return (
        <div className=''>
            <div >
                <div className={scrollPosition >= 1000 ? 'fixed w-full contianer lg:top-[80px] md:top-[80px] sm:top-[80px] top-[124px] py-5 block sm:justify-between sm:items-center sm:flex' : 'block sm:justify-between sm:items-center sm:flex w-full' } style={{zIndex : '1' ,backgroundColor: '#22132E' }}>
                    <div className='flex w-[390px]'>
                        {
                            hotelCards.map((link) => (
                                <a key={link.name} onClick={() => setActive(link)} style={{ cursor: 'pointer', background: active === link ? 'rgba(79,70,229)' : 'none' }} className="w-full mr-1 inline-flex items-center py-3 px-7 text-sm font-medium text-center text-white bg-blue-700 rounded-3xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    {link.name}
                                </a>

                            ))
                        }
                    </div>
                    <div className='flex items-center pr-5'>
                        <div className="relative mr-2">
                            <input style={{ background: 'transparent' }} type="search" id="default-search" className="block p-3 pl-10 w-full text-sm text-gray-900  rounded-3xl border border-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-white" placeholder="Search Raffle..." required />
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                        </div>
                        <button onClick={() => setToggle(!toggle)} type="button" className="text-white bg-white border border-white focus:outline-none hover:bg-[tras] focus:ring-4 focus:ring-gray-200 font-medium rounded-3xl text-sm px-5 py-3 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-white dark:hover:bg-gray-700 dark:hover:border-white dark:focus:ring-gray-700">Filter/Short</button>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8    ' style={{placeItems:  'center'}}>
                    {active?.items?.map((item) => (
                        <Card key={item._id} card={item} />
                    ))}
                </div>
            </div>
            {
                toggle && (
                    <div style={{ minWidth: '250px', marginLeft: '40px',background : 'rgb(40, 30, 53)' }} className={scrollPosition >= 1000 ? 'p-10 fixed z-1 top-[150px] right-[0]' : 'p-10 fixed z-1 top-[80px] right-[0]'}>
                        <div className='flex items-center justify-between' >
                            <h1 style={{ color: '#42296A' }} className="text-3xl font-bold tracking-tight pb-3  sm:text-5xl md:text-5xl">
                                <span className="block  xl:inline">SORT</span>
                            </h1>
                            <h1 onClick={() => setToggle(!toggle)} style={{ cursor: 'pointer', color: '#42296A' }} className="text-3xl font-bold tracking-tight pb-3  sm:text-5xl md:text-5xl">
                                <span className="block  xl:inline"><AiOutlineCloseCircle /></span>
                            </h1>
                        </div>
                        <div>
                            {
                                hotelCards.map((link) => (
                                    <h1 key={link.subname} onClick={() => setActive(link)} style={{ cursor: 'pointer' }} className="text-3xl dark:text-white hover:dark:text-[#42296A] font-bold tracking-tight pb-4  sm:text-5xl md:text-2xl">
                                        <span className="block  xl:inline">{link?.subname}</span>
                                    </h1>
                                ))
                            }
                        </div>
                        <div style={{ minWidth: '200px' }}>
                            <h1 style={{ color: '#42296A' }} className="text-3xl font-bold tracking-tight pb-3  sm:text-5xl md:text-5xl">
                                <span className="block  xl:inline">Filter</span>
                            </h1><br />
                            <h1 onClick={() => setToggle(!toggle)} style={{ cursor: 'pointer' }} className="text-3xl dark:text-white  font-bold tracking-tight pb-4  sm:text-5xl md:text-2xl">
                                <span className="block  xl:inline">Token</span>
                            </h1>
                            <input style={{ borderColor: '#42296A', backgroundColor: 'transparent', color: '#42296A' }} type="search" id="default-search" className="block p-4 pl-10 w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Token" required />
                            <h1 onClick={() => setToggle(!toggle)} style={{ cursor: 'pointer' }} className="text-3xl dark:text-white  font-bold tracking-tight pb-4  sm:text-5xl md:text-2xl">
                                <span className="block  xl:inline">Collection</span>
                            </h1>
                            <input style={{ borderColor: '#42296A', backgroundColor: 'transparent', color: '#42296A' }} type="search" id="default-search" className="block p-4 pl-10 w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Collection" required />

                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default FilterCard