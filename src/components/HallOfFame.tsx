import Image from 'next/image'
import React from 'react'
import DenizenPhoto from "@/assets/Denizen.jpg"
import BigDogPhoto from "@/assets/Screenshot_20250609_131007_Discord.jpg"

const HallOfFame = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="text-white text-5xl text-center p-8 font-bold">
        Hall Of Fame
      </div>

        <div>
        <div className='flex justify-center'>
         <div className="relative w-[180px] h-[180px] rounded-full border-4 border-white overflow-hidden mt-5">
                <Image
                  src={DenizenPhoto}
                  priority
                  alt="User Profile"
                  fill
                  className="object-cover"
                />
            </div>
        </div>
        <div className='w-[70%] mx-auto'>
            <h1 className='text-white text-4xl text-center mt-2'>Denizen</h1>
            <div className='flex justify-center gap-4'>
                <div className='text-white text-center mt-5 bg-[#BA181B] w-2/3 text-xl rounded-3xl border-white border-2 p-5'>
                    <h1 className='font-bold text-4xl'>Bio</h1>
                    <p className='mt-4'>Lorem Text asjd asjdgnin asudng onas donioin aoisjdoing oin aosin oieng oin aoisnioenoginasio nioenaofn anoiasnf Lorem Text asjd asjdgnin asudng onas donioin aoisjdoing oin aosin oieng oin aoisnioenoginasio nioenaofn anoiasnf Lorem Text asjd asjdgnin asudng onas donioin aoisjdoing oin aosin oieng oin aoisnioenoginasio nioenaofn anoiasnf</p>
                 </div>
                <div className='text-white text-center mt-5 bg-[#BA181B] w-1/3 text-xl rounded-3xl border-white border-2 p-5'>
                    <h1 className='font-bold text-4xl'>Accolades</h1>
                    <p className='mt-4 p-2'>Championships: 1 🏆</p>
                    <p className='p-2'>Seasons Played: 8 ✅</p>
                    <p className='p-2'>MVPs: 2 🥇</p>
                    
                </div>
            </div>  
        </div>
        </div>

        <div className='mt-5'>
        <div className='flex justify-center'>
         <div className="relative w-[180px] h-[180px] rounded-full border-4 border-white overflow-hidden mt-5">
                <Image
                  src={BigDogPhoto}
                  priority
                  alt="User Profile"
                  fill
                  className="object-cover"
                />
            </div>
        </div>
        <div className='w-[70%] mx-auto'>
            <h1 className='text-white text-4xl text-center mt-2'>BigDog</h1>
            <div className='flex justify-center gap-4'>
                <div className='text-white text-center mt-5 bg-[#BA181B] w-2/3 text-xl rounded-3xl border-white border-2 p-5'>
                    <h1 className='font-bold text-4xl'>Bio</h1>
                    <p className='mt-4'>Lorem Text asjd asjdgnin asudng onas donioin aoisjdoing oin aosin oieng oin aoisnioenoginasio nioenaofn anoiasnf Lorem Text asjd asjdgnin asudng onas donioin aoisjdoing oin aosin oieng oin aoisnioenoginasio nioenaofn anoiasnf Lorem Text asjd asjdgnin asudng onas donioin aoisjdoing oin aosin oieng oin aoisnioenoginasio nioenaofn anoiasnf</p>
                 </div>
                <div className='text-white text-center mt-5 bg-[#BA181B] w-1/3 text-xl rounded-3xl border-white border-2 p-5'>
                    <h1 className='font-bold text-4xl'>Accolades</h1>
                    <p className='mt-4 p-2'>Championships: 1 🏆</p>
                    <p className='p-2'>Seasons Played: 8 ✅</p>
                    <p className='p-2'>MVPs: 2 🥇</p>
                    
                </div>
            </div>  
        </div>
        </div>
    </div>

    
  )
}

export default HallOfFame