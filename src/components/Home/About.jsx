import { about1, about2, about3, aboutGirl } from "../../assets";
import styles from "../../styles";
import img from "../../assets/17.jpeg"

const About = () => (
  <div className={`${styles.coloredBg}`}>
    <div className=" flex flex-col py-24 md:w-[50%] w-full items-center justify-between">
      <div className="flex flex-col justify-start items-start sm:px-0 px-8 ">
        <p className="text-[#5C8692] font-normal font-manrope uppercase sm:text-[16px] text-[14px]">
          Mission
        </p>
        <h2 className="text-[#141414] font-playfair sm:text-[60px] text-[45px] mt-2 font-bold leading-[115%] max-w-[510px]">
          Lorem ipsum dolor sit, amet consectetur !
        </h2>
        <p className="text-[#5C8692] font-normal font-manrope sm:text-[18px] text-[16px] max-w-[508px] mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo culpa fugit sunt recusandae eligendi molestias, corrupti maxime dignissimos at dolorum sint velit numquam. Excepturi quia culpa libero sit soluta voluptatem.
        </p>
      </div>

      <div className="flex sm:flex-nowrap flex-wrap sm:flex-row flex-col sm:justify-start justify-center sm:items-start items-center mt-4 gap-4">
        <div className="flex flex-col items-center justify-center border-2 bg-white px-3 py-2 border-[#5C8692] w-[165px] h-[180px]">
          <img src={about1} alt="about1" />
          <p className="text-[#141414] font-playfair text-center sm:text-[22px] text-[25px] font-bold leading-[115%] mt-4 max-w-[143px]">
            cow 1
          </p>
        </div>
        <div className="flex flex-col items-center justify-center border-2 bg-white px-3 py-2 border-[#5C8692] w-[165px] h-[180px]">
          <img src={about2} alt="about2" />
          <p className="text-[#141414] font-playfair text-center sm:text-[22px] text-[25px]  font-bold leading-[115%] mt-4 max-w-[143px]">
            cow 2
          </p>
        </div>
        <div className="flex flex-col items-center justify-center border-2 bg-white px-3 py-2 border-[#5C8692] w-[165px] h-[180px]">
          <img src={about3} alt="about3" />
          <p className="text-[#141414] text-center font-playfair sm:text-[22px] text-[25px]  font-bold leading-[115%] mt-4 max-w-[143px]">
            cow 3
          </p>
        </div>
      </div>
    </div>
    <div className="bg-[#84A8B2] md:w-[50%] w-full">
      <div className=" bg-bg1 w-full flex lg:py-40 md:py-48 py-36 md:pr-2 pr-4 md:pl-0 pl-4 sm:relative md:justify-start justify-center">
        <img
          src={img}
          alt="aboutGirl"
          className="sm:w-[500px] sm:h-[576px] relative sm:object-cover object-contain border-[#EBF3F5] border-solid sm:border-8 md:border-l-0 border-l-4 border-4 p-4 md:pl-0 pl-4"
        />
      </div>
    </div>
  </div>
);

export default About;
