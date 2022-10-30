import React, { useState } from "react";

const Sokal = ({ day }) => {
  const {text,title, jikirBangla, jikirArbi, meaning, read, detail} = day;
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <div className="rounded-md my-4 p-4 text-gray-600 md:text-[18px] sm:text-[15px] shadow-[0_3px_10px_rgb(0,0,0,0.3)] bg-white">
        {title && <h2 className="font-bold text-center text-black">{title}</h2>}
        <div className="bg-gray-100 p-2 rounded-lg">
          {/* ========arbi====== */}
          {jikirArbi && <h2 className="my-2 font-semibold">{jikirArbi}</h2>}
          {/* ========text======= */}
          {text && <h2>{text}</h2> }
          {/* =======bangla========= */}
         {jikirBangla &&  <h2>
            <span className="font-bold">উচ্চারনঃ </span>
            <span className=" font-semibold">
              {jikirBangla}
            </span>
           
          </h2>}
           {/* ======meaning==== */}
          {meaning && <h2 className="my-2 text-[15px]">
            <span className="font-bold">অর্থঃ</span> {meaning}
          </h2>}
        </div>
        {/*===== read==== */}
        {read && (
          <div className="bg-green-100 text-center font-bold p-3 my-2 sm:text-[15px] md:text-[18px] text-[#009000] rounded-md">
            <h2>{read}</h2>
          </div>
        )}
        <div className="flex justify-end text-[15px]">
          {modal ? (
            <button className="text-purple-600" onClick={toggleModal}>
              close
            </button>
          ) : (
            <button
              className="text-purple-600 cursor-pointer "
              onClick={toggleModal}
            >
              see more
            </button>
          )}
        </div>

        {modal && (
          <div className="bg-gray-100 p-2 rounded-lg">
            <p>{detail}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sokal;
