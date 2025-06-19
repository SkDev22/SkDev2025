import my1 from "../assets/my1.jpg";
import my2 from "../assets/my2.jpeg";
import my3 from "../assets/my3.jpg";
import my8 from "../assets/my8.jpeg";

const Images = () => {
  return (
    <div className="h-auto top-0 flex justify-between px-10 bg-black">
      <img
        src={my1}
        alt="Sahan Image 01"
        className=" w-[300px] h-[50%] rotate-x-20 -rotate-y-20 rounded-xl"
      />
      <img
        src={my8}
        alt="Sahan Image 02"
        className=" w-[300px] h-[50%] rotate-x-15 rotate-y-20 rounded-xl"
      />
      <img
        src={my3}
        alt="Sahan Image 03"
        className=" w-[300px] h-[50%] rotate-x-20 -rotate-y-20 rounded-xl"
      />
      <img
        src={my2}
        alt="Sahan Image 04"
        className=" w-[300px] h-[50%] rotate-x-15 rotate-y-20 rounded-xl"
      />
    </div>
  );
};

export default Images;
