import React from 'react'
import coverpage from '../images/coverpage.png'
import frame from '../images/frame.png'
import computer from '../images/computer.png'
import search from '../images/search.png'
import { HiMinus } from 'react-icons/hi';
import { HiPlus } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Comp from '../components/Comp'

export default function Home() {
    return (
        <div >
            <div class="relative">
                <img src={coverpage} alt='' class="w-full" />

                <img src={frame} alt='' class="absolute inset-0 m-auto mx-20 translate-y-40" />
                {/* <Link to={<Comp />} > */}
                <button class="absolute inset-10  mt-100 rounded-lg bg-orange-400 p-2 h-10 w-80 text-white">Get free consultation</button>
                {/* </Link> */}
            </div>

            <div className="p-10 md:flex md:flex-row md:justify-center gap-x-10">
                <div className="mt-6 md:w-1/3 ml-10">
                    <img src={computer} alt='' className="mx-40" />
                </div>
                <div className="md:w-2/3">
                    <p className="text-gray-700 mb-5 mt-40 mr-40">
                        <div className="text-xl text-violet-700">
                            Web and Mobile app development
                        </div>
                        Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
                    </p>
                    <button className="rounded-lg bg-orange-400 p-2 w-40 text-white">LERN MORE</button>
                </div>
            </div>

            <div className="flex flex-justify-center ">

                <p className="mt-20 text-gray-700 mx-80 mb-6 mr-20  ">

                    <div className='text-xl text-violet-700 mb-5 '>
                        Digital Strategy Consulting
                    </div>
                    <div className='mr-10'>
                        Your digital strategy should complement the overal
                        l marketing strategy of the company. In online marketing, each component will
                        never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
                        <br />
                        <button className='mt-3 rounded-lg bg-orange-400 p-2 w-40 text-white'>LERN MORE</button>
                    </div>
                </p>

                <div className="flex justify-center mr-60">
                    <img src={search} alt='' class="mx-44" />
                </div>

            </div>


            <div className="p-6 sm:p-10 flex flex-col items-center">
                <div className="text-3xl  text-violet-700">Frequently asked questions

                </div>

                <div>
                    <div className="mt-10 text-lg  text-violet-700 flex gap-40">
                        Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
                        <HiMinus className='my-2' />
                    </div>
                </div>

                <div className="text-lg text-black w-full md:w-1/2 md:ml-24">Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</div>

                <div className="mt-10 text-lg  text-violet-700 flex gap-40">
                    <p>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</p>
                    <HiPlus className="my-2" />
                </div>


                <div className="mt-10 text-lg  text-violet-700 flex gap-40">
                    Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
                    <HiPlus className='my-2' />
                </div>
            </div>
        </div>

    )
}
