import whyIcon1 from "../assets/whyIcon1.svg";
import whyIcon2 from "../assets/whyIcon2.svg";
import whyIcon3 from "../assets/whyIcon3.svg";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function WhyCauldron() {
  const [isHovering, setIsHovering] = useState([false, false, false]);
  const numOfLines = (text) => {
    if (text.length > 100) {
      return " md:max-w-[420px]";
    }
    return " md:max-w-[260px]";
  };
  const data = [
    {
      text: "Faceless videos allow for a consistent visual style and branding that isn’t reliant on the creator’s appearance, which can be more scalable in the long term.",
    },
    {
      text: "Change voices and choose voices that best match their brand or the tone of the content.",
    },
    {
      text: "Significantly reduce expenses related to hiring videographers and editors.",
    },
    {
      text: "Customizable subtitles ensure that videos are accessible to a broader audience, including those who are deaf or hard of hearing, and can enhance viewer engagement.",
    },
  ];
  const batchProcessingData = [
    {
      imgSrc: whyIcon1,
      text: "Streamline the video production process, and focus more on the content rather than the technical aspects of video creation.",
    },
    {
      imgSrc: whyIcon2,
      text: "Producing consistent quality and style across all videos, which helps in maintaining a cohesive brand image.",
    },
    {
      imgSrc: whyIcon3,
      text: "Easily scale the production, creating more content in less time and potentially increasing their reach and engagement.",
    },
  ];

  return (
    <div className="bg-[rgb(11,11,14)] pl-6 pr-6 text-white">
      <div className="m-auto max-w-[700px] pb-40 text-[rgb(193,201,207)]">
        <h1 className="text-4xl font-semibold">Reduced Production Costs</h1>
        <p className="mb-20 max-w-3xl">
          Efficient video production with faceless content ensures
          cost-effectiveness and scalability, driven by a prompt.
        </p>
        <div className="flex flex-wrap justify-center text-[rgb(184,193,199,0.8)] sm:justify-between">
          {data.map(({ text }) => (
            <div className={"mb-4 text-pretty" + numOfLines(text)}>
              <div className="mb-1 h-28 rounded-2xl bg-[rgb(22,24,25)]"></div>
              <p className="pl-2">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="m-auto max-w-[960px] pb-40 text-[rgb(193,201,207)]">
        <h1 className="pl-5 text-4xl font-semibold lg:pl-0">
          Batch Processing
        </h1>
        <p className="mb-20 max-w-3xl pl-5 lg:max-w-[900px] lg:pl-0">
          The ability to create multiple videos in a short amount of time is
          particularly useful for creators who need to maintain a consistent
          posting schedule.
        </p>
        <div className="flex flex-wrap justify-center">
          {batchProcessingData.map(({ imgSrc, text }, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-start justify-center text-pretty">
                <motion.img
                  onHoverStart={() => {
                    const newHovering = [...isHovering];
                    newHovering[index] = true;
                    setIsHovering(newHovering);
                  }}
                  onHoverEnd={() => {
                    const newHovering = [...isHovering];
                    newHovering[index] = false;
                    setIsHovering(newHovering);
                  }}
                  src={imgSrc}
                  alt="icon"
                  className="m-auto mb-4 w-[96px]"
                  animate={
                    isHovering[index]
                      ? {
                          filter:
                            "drop-shadow(0px 5px 10px rgba(255,255,255,0.5))",
                        }
                      : {
                          filter: "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.5))",
                        }
                  }
                  transition={{ duration: 0.5 }}
                  exit={{ filter: "" }}
                />

                <div className="m-auto p-1 pb-4">
                  <p className="max-w-[500px] text-[14px] text-[rgb(184,193,199,0.8)] sm:p-2 md:max-w-[300px] md:pl-6">
                    {text}
                  </p>
                </div>
              </div>
              {index < batchProcessingData.length - 1 && (
                <div className="bg-[#3A3F45] md:h-48 lg:ml-1 lg:w-1"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}