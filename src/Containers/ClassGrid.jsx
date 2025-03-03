/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Logo } from "../assets";
const ClassGrid = ({ header = "Upcomming Classes", classes = [] }) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <span className="text-[20px] font-bold pb-[10px]">{header}</span>
      {header === "Upcomming Classes" && (
        <Link
          to={"/create-class"}
          className="py-2 px-3 bg-mainColor font-semibold !text-white w-max rounded-[5px] cursor-pointer"
        >
          Schedule Extra Class/PTM
        </Link>
      )}
      <div className="grid grid-cols-3 gap-4 text-[12px] font-semibold">
        {classes.map((singleClass, index) => {
          return (
            <div
              key={index}
              className="p-4 flex flex-col justify-start items-start gap-[10px] bg-lightGrey rounded-[5px] shadow-2xl"
            >
              <div className="flex flex-row items-center gap-[15px]">
                <div>
                  <img src={Logo} className="w-[30px]" alt="" />
                </div>
                <div className="flex flex-col">
                  <span>{singleClass.title}</span>
                  <span>{singleClass.course}</span>
                </div>
              </div>
              <span>{singleClass.time}</span>
              <span>{singleClass.date}</span>
              <span>
                No of students
                <span className="pl-[10px] text-mainColor font-semibold text-[15px]">
                  {singleClass.studentCount}
                </span>
              </span>
              <div className="flex flex-row items-center gap-[10px]">
                <span>Tags</span>
                <div className="flex flex-row flex-wrap gap-[10px]">
                  {singleClass.tags.map((tags, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-mainColor text-white px-2 py-1 rounded-[5px]"
                      >
                        {tags}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row flex-wrap gap-[10px]">
                {singleClass.studentName.map((student, index) => {
                  return (
                    <div
                      key={index}
                      className="border-mainColor border-[2px] text-mainColor px-2 py-1 rounded-[5px]"
                    >
                      {student}
                    </div>
                  );
                })}
              </div>
              {header === "Past Classes" && (
                <div className="text-white bg-secondary px-4 py-2 rounded-[5px] cursor-pointer">
                  RATE CLASS
                </div>
              )}
              {header === "Upcomming Classes" && (
                <div className="text-white bg-successGreen px-4 py-2 rounded-[5px] cursor-pointer">
                  START CLASS
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClassGrid;
