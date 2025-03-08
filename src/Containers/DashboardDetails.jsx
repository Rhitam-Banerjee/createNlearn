import { ClassGrid, CalendarView } from "./";
import { useSelector } from "react-redux";

const DashboardDetails = () => {
  const { allClasses, upcommingClasses, ongoingClasses } = useSelector(
    (store) => store.details
  );

  return (
    <section>
      <ClassGrid classes={upcommingClasses} />
      {ongoingClasses?.length > 0 && (
        <ClassGrid classes={ongoingClasses} header="Ongoing Classes" />
      )}
      <CalendarView allClasses={allClasses} />
    </section>
  );
};

export default DashboardDetails;
