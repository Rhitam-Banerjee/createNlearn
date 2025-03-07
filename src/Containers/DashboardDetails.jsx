import { useEffect, useState } from "react";
import { ClassGrid, CalendarView } from "./";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import urls from "../utils/urls";
import { setAllClasses, setOngoingClasses } from "../reducers/detailSlice";

const DashboardDetails = () => {
  const dispatch = useDispatch();
  const { admin } = useSelector((store) => store.admin);
  const { id } = admin;
  const { allClasses, ongoingClasses } = useSelector((store) => store.details);
  const [classList, setClassList] = useState([]);

  const getAllClass = async () => {
    const response = await axios
      .get(`${urls.getClasses}?teacher_id=${id}&class_type=all`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    if (response && response.status) {
      setClassList(response.classes);
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
      dispatch(setAllClasses(response.classes));
    }
  };
  useEffect(() => {
    getAllClass();
    getOngoingingClass();
    getUpcommingClass();
  }, []);
  return (
    <section>
      <ClassGrid classes={allClasses} />
      {ongoingClasses?.length > 0 && (
        <ClassGrid classes={ongoingClasses} header="Ongoing Classes" />
      )}
      <CalendarView allClasses={classList} />
    </section>
  );
};

export default DashboardDetails;
