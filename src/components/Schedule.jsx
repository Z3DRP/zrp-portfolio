import { useEffect, useState, useCallback } from "react";
import { SuccessToast, ErrorToast } from "./Toasts";
import { useToast } from "./ToastService";
import Spinner from "./Spinner";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../globals.css";

export default function Schedule() {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [availability, setAvailability] = useState(undefined);
  const handleShowToast = useCallback((msg, type) => {
    switch (type.toLowerCase()) {
      case "error":
        toast.open(<ErrorToast type={type} msg={msg.message} />);
        break;
      case "success":
        toast.open(<SuccessToast type={type} msg={msg} />);
        break;
    }
  });
  const handleNavPrevious = () => {};
  const handleNavNext = () => {};

  useEffect(() => {
    const scheduleUrl = import.meta.VITE_SCHEDULE_API;
    const getSchedule = async () => {
      try {
        const res = await fetch(scheduleUrl);
        if (res.ok && res.status <= 500) {
          let sData = await res.json();
          setScheduleData(sData?.Agenda);
          setPeriod(sData.Period);
          handleShowToast("successfully retrieved schedule data", "success");
        } else {
          console.log(`[ERR-RES]:: ${res}`);
          handleShowToast("An internal server error occurred", "error");
        }
      } catch (err) {
        throw new Error(`error fetching data:: ${err}`);
      }
    };
    setIsLoading(true);
    getSchedule()
      .catch((err) => {
        console.log(`[ERR]:: ${err}`);
        handleShowToast(`${err}`, "error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  });

  return (
    <>
      <section id="schedule">
        <div id="schedule-container" className="min-h-52` min-w-48">
          {isLoading && (
            <div className="min-h-52">
              <Spinner size="xlarge" />
            </div>
          )}
          {!isLoading && (
            <div id="schedule-body">
              <div id="schedule-header" className="">
                <span>
                  Current Period: {currentPeriod.StartDate}-
                  {currentPeriod.EndDate}
                </span>
              </div>
              <div id="schedule-content">
                {<ScheduleTable tasks={tasks} availability={availability} />}
              </div>
            </div>
          )}
        </div>
        <div
          id="schedule-footer"
          className="flex flex-row justify-evenly mt-4 p-4"
        >
          <button
            className="text-lgreen hover:text-orange-500 dark:hover:text-orange-600"
            onClick={handleNavPrevious}
          >
            <ChevronLeft size={24} />
            Previous
          </button>
          <button
            className="text-lgreen hover:text-orange-500 dark:hover:text-orange-600"
            onClick={handleNavNext}
          >
            <ChevronRight size={24} />
            Next
          </button>
        </div>
      </section>
    </>
  );
}
