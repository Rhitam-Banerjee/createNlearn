import { useSelector } from "react-redux";
import { DashboardDetails, DashboardProfile, ClassGrid } from "./";
import axios from "axios";
import urls from "../utils/urls";
import { useEffect, useState } from "react";
const DashboardMain = () => {
  const { activePage } = useSelector((store) => store.admin);

  const { admin } = useSelector((store) => store.admin);
  const { id } = admin;
  const [pastClasses, setPastClasses] = useState([]);
  const getAllClass = async () => {
    const response = await axios
      .get(`${urls.getClasses}?teacher_id=${id}&class_type=past`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    if (response && response.status) {
      setPastClasses(response.classes);
    }
  };
  useEffect(() => {
    getAllClass();
  }, [activePage]);

  return (
    <div className="ml-[200px] w-full h-full p-[50px] pt-[20px]">
      {activePage === "Dashboard" ? (
        <DashboardDetails />
      ) : activePage === "Past Class" ? (
        <ClassGrid header={"Past Classes"} classes={pastClasses} />
      ) : (
        <DashboardProfile />
      )}
    </div>
  );
};

export default DashboardMain;
