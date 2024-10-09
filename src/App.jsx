import React, { useEffect } from 'react';
import {gsap} from 'gsap'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import Lenis from 'lenis'


const App = () => {
    useEffect(() => {
        const lenis = new Lenis();
        lenis.on("scroll", (e) => {
            console.log(e);
        });
        //gsap animation for the card
        document.querySelectorAll('.card').forEach(card =>{
            gsap.to(card,{
                scale:0.7,
                opacity:0,
                scrollTrigger:{
                    trigger:card,
                    start:'top 15%',
                    end:'bottom 15%',
                    scrub:true,
                }
            })
        })

        function raf(time){
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    },[]);
    return(
        <div className="w-full flex flex-col gap-4 text-white text-center items-center py-[15vh]">
            <div className="card card1 sticky top-[15vh] w-[27vw] py-[15vh] rounded-[25px] px-[20px] flex flex-col items-center bg-[#2e251e]">
                <img className="w-[180px] aspect-square" src="/images/1.png" alt="first visual"/>
                <h1 className='text-4xl font-thin'>
                    The<br /><span className="font-bold">Algorithm</span>
                </h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, iusto!
                </p>
            </div>
            <div className="card card2 sticky top-[15vh] w-[27vw] py-[15vh] rounded-[25px] px-[20px] flex flex-col items-center bg-[#2e251e]">
                <img className="w-[180px] aspect-square" src="/images/2.png" alt="first visual"/>
                <h1 className='text-4xl font-thin'>
                    The<br /><span className="font-bold">Dogma</span>
                </h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, iusto!
                </p>
            </div>
            <div className="card card3 sticky top-[15vh] w-[27vw] py-[16vh] rounded-[25px] px-[20px] flex flex-col items-center bg-[#2e251e]">
                <img className="w-[180px] aspect-square" src="/images/3.png" alt="first visual"/>
                <h1 className='text-4xl font-thin'>
                    The<br /><span className="font-bold">Architects</span>
                </h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, iusto!
                </p>
            </div>

            <div className="card card4 sticky top-[15vh] w-[27vw] py-[15vh] rounded-[25px] px-[20px] flex flex-col items-center bg-[#2e251e]">
                <img className="w-[180px] aspect-square" src="/images/4.png" alt="first visual"/>
                <h1 className='text-4xl font-thin'>
                    The<br /><span className="font-bold">Algorithm</span>
                </h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, iusto!
                </p>
            </div>
            <div className="card card5 sticky top-[15vh] w-[27vw] py-[15vh] rounded-[25px] px-[20px] flex flex-col items-center bg-[#2e251e]">
                <img className="w-[180px] aspect-square" src="/images/5.png" alt="first visual"/>
                <h1 className='text-4xl font-thin'>
                    The<br /><span className="font-bold">Dogma</span>
                </h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, iusto!
                </p>
            </div>
            <div className="card card6 sticky top-[15vh] w-[27vw] py-[16vh] rounded-[25px] px-[20px] flex flex-col items-center bg-[#2e251e]">
                <img className="w-[180px] aspect-square" src="/images/6.png" alt="first visual"/>
                <h1 className='text-4xl font-thin'>
                    The<br /><span className="font-bold">Architects</span>
                </h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, iusto!
                </p>
            </div>
        </div>
    )
}

export default App 