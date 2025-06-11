"use client"
import Image from 'next/image';
import Logo from '@/assets/Screenshot_20250609_131007_Discord.jpg'
import React, { useState } from 'react'

const StatsLeaderboard = () => {

  return (
    <div className="bg-black min-h-screen">
      <div className="text-white text-5xl text-center p-8 font-bold">
        Stats Leaderboard
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-white p-6 flex justify-between">
            <h2 className=" text-2xl font-bold text-black text-center tracking-wide">
              TOP 10 LEADERBOARD - HP K/D RATIO
            </h2>
            <Image src={Logo} alt='Logo' className='h-[75px] w-[75px]'/>

          </div>
          
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-500 uppercase border-b ">
                <tr>
                  <th scope="col" className="px-6 py-4 font-bold">Rank</th>
                  <th scope="col" className="px-6 py-4 font-bold">Player Name</th>
                  <th scope="col" className="px-6 py-4 font-bold">K/D Ratio</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100 transition-all duration-200 border-b border-zinc-700">
                  <td className="px-6 py-4 font-bold text-black text-lg flex items-center">
                    <div className="w-8 h-8  rounded-full flex items-center justify-center mr-3 font-black text-black">1</div>
                    
                  </td>
                  <td className="px-6 py-4 font-bold text-black text-xl">BigDog</td>
                  <td className="px-6 py-4 font-bold text-black text-xl">1.75</td>
                </tr>
                <tr className="bg-gray-100 border-b border-zinc-700 hover:bg-zinc-700 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-black flex items-center">
                    <div className="w-8 h-8  rounded-full flex items-center justify-center mr-3 font-black text-black">2</div>
                    
                  </td>
                  <td className="px-6 py-4 text-black text-lg">Space</td>
                  <td className="px-6 py-4 text-black font-semibold text-lg">1.66</td>
                </tr>
                <tr className="bg-gray-100 border-b border-zinc-700 hover:bg-zinc-700 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-black flex items-center">
                    <div className="w-8 h-8  rounded-full flex items-center justify-center mr-3 font-black text-black">3</div>
                    
                  </td>
                  <td className="px-6 py-4 text-black text-lg">Ezra</td>
                  <td className="px-6 py-4 text-black font-semibold text-lg">1.62</td>
                </tr>
                <tr className="bg-gray-100 border-b border-zinc-700 hover:bg-zinc-700 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-black flex items-center">
                    <div className="w-8 h-8  rounded-full flex items-center justify-center mr-3 font-bold text-black">4</div>
                    
                  </td>
                  <td className="px-6 py-4 text-black text-lg">Aggy</td>
                  <td className="px-6 py-4 text-black font-semibold text-lg">1.57</td>
                </tr>
                <tr className="bg-gray-100 border-b border-zinc-700 hover:bg-zinc-700 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-black flex items-center">
                    <div className="w-8 h-8  rounded-full flex items-center justify-center mr-3 font-bold text-black">5</div>
                    
                  </td>
                  <td className="px-6 py-4 text-black text-lg">Epeck</td>
                  <td className="px-6 py-4 text-black font-semibold text-lg">1.54</td>
                </tr>
                <tr className="bg-gray-100 border-b border-zinc-700 hover:bg-zinc-700 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-black flex items-center">
                    <div className="w-8 h-8  rounded-full flex items-center justify-center mr-3 font-bold text-black">6</div>
                    
                  </td>
                  <td className="px-6 py-4 text-black text-lg">Rooms</td>
                  <td className="px-6 py-4 text-black font-semibold text-lg">1.49</td>
                </tr>
                <tr className="bg-gray-100 border-b border-zinc-700 hover:bg-zinc-700 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-black flex items-center">
                    <div className="w-8 h-8  rounded-full flex items-center justify-center mr-3 font-bold text-black">7</div>
                    
                  </td>
                  <td className="px-6 py-4 text-black text-lg">Kuujii</td>
                  <td className="px-6 py-4 text-black font-semibold text-lg">1.47</td>
                </tr>
                <tr className="bg-gray-100 border-b border-zinc-700 hover:bg-zinc-700 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-black flex items-center">
                    <div className="w-8 h-8  rounded-full flex items-center justify-center mr-3 font-bold text-black">8</div>
                    
                  </td>
                  <td className="px-6 py-4 text-black text-lg">Sam</td>
                  <td className="px-6 py-4 text-black font-semibold text-lg">1.44</td>
                </tr>
                <tr className="bg-gray-100 border-b border-zinc-700 hover:bg-zinc-700 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-black flex items-center">
                    <div className="w-8 h-8  rounded-full flex items-center justify-center mr-3 font-bold text-black">9</div>
                    
                  </td>
                  <td className="px-6 py-4 text-black text-lg">Slang Wayne</td>
                  <td className="px-6 py-4 text-black font-semibold text-lg">1.33</td>
                </tr>
                <tr className="bg-gray-100 hover:bg-zinc-700 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-black flex items-center">
                    <div className="w-8 h-8  rounded-full flex items-center justify-center mr-3 font-bold text-black">10</div>
                
                  </td>
                  <td className="px-6 py-4 text-black text-lg">Denizen</td>
                  <td className="px-6 py-4 text-black font-semibold text-lg">1.27</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StatsLeaderboard