"use client";
import React, { useState } from "react";

import Logo from "@/assets/Screenshot_20250609_131007_Discord.jpg";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Import icons for mobile toggle

import UserIcon from "@/assets/user.png";
import SpotterIcon from "@/assets/binoculars.png";
import TrainerIcon from "@/assets/muscle.png";
import MessageIcon from "@/assets/paper-plane.png";
import { useRouter } from "next/navigation";
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";

const NavigationCard = () => {
    const router = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleOpenHallOfFame = () => {
    router.push('/HallOfFame');
  }


  const handleOpenProfile = () => {
    router.push('/ProfilePage');
  }

  const handleOpenStatsLeaderboard = () => {
    router.push('/StatsLeaderboard');
  }

  const handleOpenFindRosters = () => {
    router.push('/Rosters');
  }

   const handleOpenFindStandings = () => {
    router.push('/Standings');
  }

   const handleOpenPreviousSeasons = () => {
    router.push('/PreviousSeasons');
  }
  

  return (
    <>
      {/* Mobile Menu Toggle Button */}

      <div className="md:hidden fixed top-4 left-4 z-20">
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-full bg-[#0B090A] border-2 border-[#BA181B]"
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-[#BA181B]" />
          ) : (
            <Menu size={24} className="text-[#BA181B]" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`md:sticky md:top-0 md:left-0 md:h-screen md:w-[30%] lg:w-[20%]
                    flex justify-center items-stretch
                    ${isMobileMenuOpen ? 'fixed inset-0 z-10 bg-white' : 'hidden md:flex'}`}
      >
        <Sidebar className="[&>div]:bg-[#0B090A] !rounded-none shadow-2xl !overflow-hidden w-full h-full md:h-auto flex flex-col">
          <div className="px-3 py-4">
             <Image src={Logo} alt="Logo" className="h-36 w-full object-contain" priority /> 
          </div>
          <SidebarItems className="flex-grow">
            <SidebarItemGroup className="flex flex-col h-full justify-start">

              <SidebarItem
                href="#"
                className="[&:hover]:bg-white !text-white text-xl bg-[#A4161A] hover:!text-[#BA181B] hover:text-2xl h-[48px] transition-all"
                onClick={() => {handleOpenProfile()}}
              >
                 <div className="flex items-center">
                    {/* <Image className="h-10 w-10 mr-2" src={UserIcon} alt='User Icon' /> */ }
                    Profile
                </div>
              </SidebarItem>

              <SidebarItem
                href="#"
                className="[&:hover]:bg-white !text-white text-xl bg-[#A4161A]  hover:!text-[#BA181B] hover:text-2xl h-[48px] transition-all"
                onClick={() => {handleOpenStatsLeaderboard()}}
              >
              <div className="flex items-center">
                    {/* <Image className="h-10 w-10 mr-2" src={SpotterIcon} alt='Spotter Icon' /> */}
                    Stats Leaderboard
                </div>
              </SidebarItem>
              <SidebarItem
                href="#"
                className="[&:hover]:bg-white !text-white text-xl bg-[#A4161A] hover:!text-[#BA181B] hover:text-2xl h-[48px] transition-all"
                onClick={() => {handleOpenFindRosters()}}
              >
                 <div className="flex items-center">
                   {/*  <Image className="h-10 w-10 mr-2" src={TrainerIcon} alt='Trainer Icon' /> */}
                    Rosters
                </div>
              </SidebarItem>
              <SidebarItem
                href="#"
                className="[&:hover]:bg-white !text-white text-xl bg-[#A4161A] hover:!text-[#BA181B] hover:text-2xl h-[48px] transition-all"
                onClick={() => {handleOpenHallOfFame()}}
              >
                 <div className="flex items-center">
                    {/* <Image className="h-10 w-10 mr-2" src={MessageIcon} alt='Message Icon' /> */}
                    Hall of Fame
                </div>
              </SidebarItem>
              <SidebarItem
                href="#"
                className="[&:hover]:bg-white !text-white text-xl bg-[#A4161A] hover:!text-[#BA181B] hover:text-2xl h-[48px] transition-all"
                onClick={() => {handleOpenFindStandings()}}
              >
                 <div className="flex items-center">
                    {/* <Image className="h-10 w-10 mr-2" src={MessageIcon} alt='Message Icon' /> */}
                    Standings
                </div>
              </SidebarItem>
              <SidebarItem
                href="#"
                className="[&:hover]:bg-white !text-white text-xl bg-[#A4161A] hover:!text-[#BA181B] hover:text-2xl h-[48px] transition-all"
                onClick={() => {handleOpenPreviousSeasons()}}
              >
                 <div className="flex items-center">
                    {/* <Image className="h-10 w-10 mr-2" src={MessageIcon} alt='Message Icon' /> */}
                    Previous Seasons
                </div>
              </SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
      </div>
    </>
  );
};

export default NavigationCard;
