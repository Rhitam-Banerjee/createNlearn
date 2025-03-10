/* eslint-disable react/prop-types */
import { Logo } from "../assets";
import axios from "axios";
import urls from "../utils/urls";
import { useDispatch, useSelector } from "react-redux";
import {
  setOngoingClasses,
  setPastClasses,
  setUpcommingClasses,
} from "../reducers/detailSlice";
import { Link, useNavigate } from "react-router-dom";
const ClassGrid = ({ header = "Upcomming Classes", classes = [] }) => {
  const { admin } = useSelector((store) => store.admin);
  const { id } = admin;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getOngoingingClass = async () => {
    const response = await axios
      .get(`${urls.getClasses}?teacher_id=${id}&class_type=ongoing`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    if (response && response.status) {
      dispatch(setOngoingClasses(response.classes));
    }
  };
  const getUpcommingClass = async () => {
    const response = await axios
      .get(`${urls.getClasses}?teacher_id=${id}&class_type=upcomming`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    if (response && response.status) {
      dispatch(setUpcommingClasses(response.classes));
    }
  };
  const getPastClasses = async () => {
    const response = await axios
      .get(`${urls.getClasses}?teacher_id=${id}&class_type=past`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    if (response && response.status) {
      dispatch(setPastClasses(response.classes));
    }
  };
  const setClassMark = async (class_id, marker = "start") => {
    if (marker === "end") {
      navigate(`/feedback/${class_id}`);
    }
    // try {
    //   const response = await axios
    //     .post(`${urls.markClass}?class_id=${class_id}&mark_type=${marker}`)
    //     .then((res) => res.data)
    //     .catch((err) => console.log(err));
    //   if (response && response.status) {
    //     getUpcommingClass();
    //     getOngoingingClass();
    //     getPastClasses();
    //     if (marker === "end") {
    //       navigate(`/feedback/${class_id}`);
    //     }
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };
  // useEffect(() => {
  //   getOngoingingClass();
  //   getUpcommingClass();
  // }, []);

  return (
    <div className="mt-[50px] flex flex-col gap-[10px]">
      <span className="text-[20px] font-bold pb-[10px]">{header}</span>
      <div className="grid grid-cols-3 gap-4 text-[12px] font-semibold">
        {classes.map((singleClass, index) => {
          return (
            <div
              key={index}
              className="p-4 flex flex-col justify-start items-start gap-[10px] bg-lightGrey rounded-[5px] shadow-2xl"
            >
              <div>
                Class ID - <span>{singleClass.classId}</span>
              </div>
              <div className="flex flex-row items-center gap-[15px]">
                <div>
                  <img src={Logo} className="w-[30px]" alt="" />
                </div>
                <div className="flex flex-col">
                  <span>{singleClass.title}</span>
                </div>
              </div>
              <span>Date - {singleClass.date}</span>
              <span>
                Time - {singleClass.class_start?.slice(0, -3)} -{" "}
                {singleClass.class_end?.slice(0, -3)}
              </span>
              <span>
                No of students
                <span className="pl-[10px] text-mainColor font-semibold text-[15px]">
                  {singleClass.studentCount}
                </span>
              </span>

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
                <Link
                  to={`/feedback/${singleClass.id}`}
                  className="!text-white bg-successGreen px-4 py-2 rounded-[5px] cursor-pointer"
                >
                  View Form
                </Link>
              )}
              {header === "Ongoing Classes" && (
                <div
                  className="text-white bg-secondary px-4 py-2 rounded-[5px] cursor-pointer"
                  onClick={() => setClassMark(singleClass.id, "end")}
                >
                  End Class
                </div>
              )}
              {header === "Upcomming Classes" && (
                <div
                  className="text-white bg-successGreen px-4 py-2 rounded-[5px] cursor-pointer"
                  onClick={() => setClassMark(singleClass.id, "start")}
                >
                  Start Class
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
