"use client"
import React, { useState } from 'react'

const StatsLeaderboard = () => {

    const [hpKills, setHpKills] = useState<number>();
    const [sndKills, setSndKills] = useState<number>();
    const [controlKills, setControlKills] = useState<number>();
    const [hpKdRatio, setHpKdRatio] = useState<number>();
    const [sndKdRatio, setSndKdRatio] = useState<number>();
    const [controlRatio, setControlKdRatio] = useState<number>();

     const [players] = useState([
    { name: 'BigDog', kills: 245, deaths: 89, assists: 156,  },
    { name: 'Sam', kills: 198, deaths: 76, assists: 203, },
    { name: 'Rooms', kills: 267, deaths: 102, assists: 134, },
    { name: 'Epeck', kills: 189, deaths: 71, assists: 189, },
    { name: 'Slang Wayne', kills: 223, deaths: 83, assists: 167, },
    { name: 'Kuujii', kills: 201, deaths: 78, assists: 198, },
    { name: 'Zeloxcitys', kills: 156, deaths: 92, assists: 234, },
    { name: 'Aggy', kills: 287, deaths: 95, assists: 145, },
    { name: 'Denizen', kills: 174, deaths: 106, assists: 211,  },
    { name: 'Ezra', kills: 234, deaths: 67, assists: 187, },
    { name: 'Kev', kills: 145, deaths: 89, assists: 156, },
    { name: 'Space', kills: 278, deaths: 88, assists: 192, }
  ])

   

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
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3 font-black text-black">1</div>
                    
                  </td>
                  <td className="px-6 py-4 font-bold text-white text-lg">BigDog</td>
                  <td className="px-6 py-4 font-bold text-white text-lg">1.75</td>
                </tr>
                <tr className="bg-zinc-800 border-b border-zinc-700 hover:bg-zinc-700 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-white flex items-center">
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center mr-3 font-black text-black">2</div>
                    
                  </td>
                  <td className="px-6 py-4 text-white">Space</td>
                  <td className="px-6 py-4 text-white font-semibold">1.66</td>
                </tr>
                <tr className="bg-zinc-900 border-b border-zinc-700 hover:bg-zinc-700 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-white flex items-center">
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-3 font-black text-black">3</div>
                    
                  </td>
                  <td className="px-6 py-4 text-white">Ezra</td>
                  <td className="px-6 py-4 text-white font-semibold">1.62</td>
                </tr>
                <tr className="bg-zinc-800 border-b border-zinc-700 hover:bg-zinc-700 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-white flex items-center">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3 font-bold text-white">4</div>
                    
                  </td>
                  <td className="px-6 py-4 text-white">Aggy</td>
                  <td className="px-6 py-4 text-white font-semibold">1.57</td>
                </tr>
                <tr className="bg-zinc-900 border-b border-zinc-700 hover:bg-zinc-700 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-white flex items-center">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3 font-bold text-white">5</div>
                    
                  </td>
                  <td className="px-6 py-4 text-white">Epeck</td>
                  <td className="px-6 py-4 text-white font-semibold">1.54</td>
                </tr>
                <tr className="bg-zinc-800 border-b border-zinc-700 hover:bg-zinc-700 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-white flex items-center">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3 font-bold text-white">6</div>
                    
                  </td>
                  <td className="px-6 py-4 text-white">Rooms</td>
                  <td className="px-6 py-4 text-white font-semibold">1.49</td>
                </tr>
                <tr className="bg-zinc-900 border-b border-zinc-700 hover:bg-zinc-700 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-white flex items-center">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3 font-bold text-white">7</div>
                    
                  </td>
                  <td className="px-6 py-4 text-white">Kuujii</td>
                  <td className="px-6 py-4 text-white font-semibold">1.47</td>
                </tr>
                <tr className="bg-zinc-800 border-b border-zinc-700 hover:bg-zinc-700 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-white flex items-center">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3 font-bold text-white">8</div>
                    
                  </td>
                  <td className="px-6 py-4 text-white">Sam</td>
                  <td className="px-6 py-4 text-white font-semibold">1.44</td>
                </tr>
                <tr className="bg-zinc-900 border-b border-zinc-700 hover:bg-zinc-700 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-white flex items-center">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3 font-bold text-white">9</div>
                    
                  </td>
                  <td className="px-6 py-4 text-white">Slang Wayne</td>
                  <td className="px-6 py-4 text-white font-semibold">1.33</td>
                </tr>
                <tr className="bg-zinc-800 hover:bg-zinc-700 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-white flex items-center">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3 font-bold text-white">10</div>
                
                  </td>
                  <td className="px-6 py-4 text-white">Denizen</td>
                  <td className="px-6 py-4 text-white font-semibold">1.27</td>
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