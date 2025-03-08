import { useDispatch, useSelector } from "react-redux";
import { DashboardDetails, DashboardProfile, ClassGrid } from "./";
import axios from "axios";
import urls from "../utils/urls";
import { useEffect } from "react";
import {
  setAllClasses,
  setOngoingClasses,
  setPastClasses,
  setUpcommingClasses,
} from "../reducers/detailSlice";
const DashboardMain = () => {
  const { activePage } = useSelector((store) => store.admin);
  const dispatch = useDispatch();

  const { admin } = useSelector((store) => store.admin);
  const { id } = admin;
  const { pastClasses } = useSelector((store) => store.details);

  const getAllClass = async () => {
    const response = await axios
      .get(`${urls.getClasses}?teacher_id=${id}&class_type=all`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    if (response && response.status) {
      dispatch(setAllClasses(response.classes));
    }
  };
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
  useEffect(() => {
    getAllClass();
    getOngoingingClass();
    getUpcommingClass();
    getPastClasses();
  }, []);

  return (
    <div className="ml-[200px] w-full h-full p-[50px] pt-[0px]">
      {activePage === "Dashboard" ? (
        <DashboardDetails allClasses />
      ) : activePage === "Past Class" ? (
        <ClassGrid header={"Past Classes"} classes={pastClasses} />
      ) : (
        <DashboardProfile />
      )}
    </div>
  );
};

export default DashboardMain;
