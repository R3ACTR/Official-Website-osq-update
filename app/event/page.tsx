"use client";
import React from "react";
import Image from "next/image";

import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";



export default function EventPage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen w-full flex-col items-center justify-center bg-[#0E1016]">
        <section className="relative z-10 w-full pt-32 pb-20">
          <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
            
            <AnimatedTitle
              text={"EVENT DETAILS"}
              className={
                "mb-10 text-center text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
              }
              wordSpace={"mr-[14px]"}
              charSpace={"mr-[0.001em]"}
            />

            <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
              {/* Left Column: Image/Visual */}
              <div className="w-full lg:w-1/2 flex justify-center">
                 <div className="relative w-full max-w-[500px] overflow-hidden rounded-xl bg-[#1c1e24] border border-[#2d2f36] p-2">
                     <Image
                        src="/Events/OSQ_participant_reg.png"
                        alt="Event Visual"
                        width={500}
                        height={600}
                        className="w-full h-auto object-contain rounded-lg"
                     />
                 </div>
              </div>

              {/* Right Column: Details & Embed */}
              <div className="w-full lg:w-1/2 flex flex-col gap-8">
                <div>
                    <h2 className="text-3xl font-bold text-[#e4ded7] mb-4">Innovation Sprint 2026</h2>
                    <AnimatedBody
                        text="Join us for an exciting journey into the world of open source and innovation. This event brings together developers, creators, and visionaries."
                        className="text-[#e4ded7]/80 text-lg leading-relaxed mb-6"
                    />
                    <div className="flex flex-wrap gap-4 mb-8">
                        <span className="px-4 py-2 bg-[#2d2f36] text-[#e4ded7] rounded-full text-sm font-semibold">
                            🚀 OSQ
                        </span>
                        <span className="px-4 py-2 bg-[#2d2f36] text-[#e4ded7] rounded-full text-sm font-semibold">
                            📅 Feb 1, 2026
                        </span>
                        <span className="px-4 py-2 bg-[#2d2f36] text-[#e4ded7] rounded-full text-sm font-semibold">
                            📍 Online
                        </span>
                    </div>
                </div>

                {/* Embedded Post */}
                <div className="w-full bg-white rounded-lg overflow-hidden">
                     <iframe 
                        src="https://www.linkedin.com/posts/opensourcequest-osq-registration-share-7417951925255716864-wyyC?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEjiN_8BlSd1W6z_6EAook36LBOqpd_PXJw" 
                        height="500" 
                        width="100%" 
                        frameBorder="0" 
                        allowFullScreen={true} 
                        title="Embedded post"
                        className="w-full"
                    ></iframe>
                </div>

              </div>
            </div>
          </div>
        </section>
        

        <Footer />
      </main>
    </>
  );
}
