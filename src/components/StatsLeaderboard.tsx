"use client"
import React, { useState } from 'react'

const StatsLeaderboard = () => {

  return (
    <div className="bg-black min-h-screen">
      <div className="text-white text-5xl text-center p-8 font-bold">
        Stats Leaderboard
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-zinc-900 rounded-lg shadow-2xl overflow-hidden border border-red-600">
          <div className="bg-gradient-to-r from-red-600 to-red-800 p-6">
            <h2 className="text-2xl font-bold text-white text-center tracking-wide">
              TOP 10 LEADERBOARD - HP K/D RATIO
            </h2>
          </div>
          
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-300 uppercase bg-zinc-800 border-b border-red-600">
                <tr>
                  <th scope="col" className="px-6 py-4 font-bold">Rank</th>
                  <th scope="col" className="px-6 py-4 font-bold">Player Name</th>
                  <th scope="col" className="px-6 py-4 font-bold">K/D Ratio</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gradient-to-r from-red-600 to-red-700 border-b border-red-500 hover:from-red-500 hover:to-red-600 transition-all duration-200">
                  <td className="px-6 py-4 font-bold text-white text-lg flex items-center">
                    <div className="w-8 h-8 bg-[#D89F39] rounded-full flex items-center justify-center mr-3 font-black text-black">1</div>
                    
                  </td>
                  <td className="px-6 py-4 font-bold text-white text-xl">BigDog</td>
                  <td className="px-6 py-4 font-bold text-white text-xl">1.75</td>
                </tr>
                <tr className="bg-zinc-800 border-b border-zinc-700 hover:bg-zinc-700 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-white flex items-center">
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center mr-3 font-black text-black">2</div>
                    
                  </td>
                  <td className="px-6 py-4 text-white text-lg">Space</td>
                  <td className="px-6 py-4 text-white font-semibold text-lg">1.66</td>
                </tr>
                <tr className="bg-zinc-900 border-b border-zinc-700 hover:bg-zinc-700 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-white flex items-center">
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-3 font-black text-black">3</div>
                    
                  </td>
                  <td className="px-6 py-4 text-white text-lg">Ezra</td>
                  <td className="px-6 py-4 text-white font-semibold text-lg">1.62</td>
                </tr>
                <tr className="bg-zinc-800 border-b border-zinc-700 hover:bg-zinc-700 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-white flex items-center">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3 font-bold text-white">4</div>
                    
                  </td>
                  <td className="px-6 py-4 text-white text-lg">Aggy</td>
                  <td className="px-6 py-4 text-white font-semibold text-lg">1.57</td>
                </tr>
                <tr className="bg-zinc-900 border-b border-zinc-700 hover:bg-zinc-700 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-white flex items-center">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3 font-bold text-white">5</div>
                    
                  </td>
                  <td className="px-6 py-4 text-white text-lg">Epeck</td>
                  <td className="px-6 py-4 text-white font-semibold text-lg">1.54</td>
                </tr>
                <tr className="bg-zinc-800 border-b border-zinc-700 hover:bg-zinc-700 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-white flex items-center">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3 font-bold text-white">6</div>
                    
                  </td>
                  <td className="px-6 py-4 text-white text-lg">Rooms</td>
                  <td className="px-6 py-4 text-white font-semibold text-lg">1.49</td>
                </tr>
                <tr className="bg-zinc-900 border-b border-zinc-700 hover:bg-zinc-700 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-white flex items-center">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3 font-bold text-white">7</div>
                    
                  </td>
                  <td className="px-6 py-4 text-white text-lg">Kuujii</td>
                  <td className="px-6 py-4 text-white font-semibold text-lg">1.47</td>
                </tr>
                <tr className="bg-zinc-800 border-b border-zinc-700 hover:bg-zinc-700 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-white flex items-center">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3 font-bold text-white">8</div>
                    
                  </td>
                  <td className="px-6 py-4 text-white text-lg">Sam</td>
                  <td className="px-6 py-4 text-white font-semibold text-lg">1.44</td>
                </tr>
                <tr className="bg-zinc-900 border-b border-zinc-700 hover:bg-zinc-700 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-white flex items-center">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3 font-bold text-white">9</div>
                    
                  </td>
                  <td className="px-6 py-4 text-white text-lg">Slang Wayne</td>
                  <td className="px-6 py-4 text-white font-semibold text-lg">1.33</td>
                </tr>
                <tr className="bg-zinc-800 hover:bg-zinc-700 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-white flex items-center">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3 font-bold text-white">10</div>
                
                  </td>
                  <td className="px-6 py-4 text-white text-lg">Denizen</td>
                  <td className="px-6 py-4 text-white font-semibold text-lg">1.27</td>
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