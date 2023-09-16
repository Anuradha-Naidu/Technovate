import Lottie from 'lottie-react'
import React from 'react'
import HistoryAnimation from "../img/history-animation.json";
import PeopleAnimation from "../img/people-animation.json";


const Work = () => {
  return (

      <section className="grid grid-cols-1 md:grid-cols-2 w-full" id="home">
      <div className="flex-1 flex items-center relative md:h-225  md:mt-0">
          {/* Image */}
          <Lottie animationData={PeopleAnimation} />
        </div>
        <div className="flex-1 flex flex-col md:items-start items-center justify-center md:h-[75%] gap-6">
          <p className="text-[2.5rem] text-center md:text-left lg:text-[3.5rem] font-bold tracking-wide md:leading-tight">
            <span className="text-lightPrimary text-[3rem] lg:text-[4rem] mb-12">
              RELIEF
            </span>
            dao
          </p>

          <p className="text-center md:text-justify text-lighttextGray md:h-[85%] text-sm flex flex-wrap gap-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially...
          </p>
        </div>
        
      </section>
  
  )
}

export default Work