/* eslint-disable react/prop-types */
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
const CalendarView = ({ allClasses = [] }) => {
  const enventDefine = [
    {
      tag: "free",
      title: "Free Time",
    },
    {
      tag: "demo",
      title: "Demo Class",
    },
    {
      tag: "paid",
      title: "Paid Class",
    },
  ];
  return (
    <div className="mt-[50px] text-[12px] w-full flex flex-col justify-start items-start bg-white rounded-[5px]">
      <div className="w-full border-b-[1px] border-unHighlightDark mb-[20px] pb-[20px]">
        <div className="p-6 w-full flex flex-row justify-start items-center gap-[20px] ">
          {enventDefine.map((event, index) => {
            return (
              <div key={index} className="flex flex-row items-center gap-[5px]">
                <div
                  className={`${
                    event.tag === "free"
                      ? "bg-green-700"
                      : event.tag === "paid"
                      ? "bg-blue-600"
                      : "bg-orange-500"
                  } w-[10px] h-[10px] rounded-full`}
                ></div>
                <div className="font-semibold">{event.title}</div>
              </div>
            );
          })}
        </div>
        <div className="ml-6 px-4 py-2 font-bold bg-mainColor w-max rounded-[5px] text-white cursor-pointer">
          ADD MY HOURS
        </div>
      </div>
      <div className="w-full p-6 ">
        <Fullcalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          events={allClasses}
          initialView={"dayGridMonth"}
          headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          eventColor="red"
        />
      </div>
    </div>
  );
};

export default CalendarView;
