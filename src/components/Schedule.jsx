import { useEffect, useState, useCallback } from "react";
import { SuccessToast, ErrorToast } from "./Toasts";
import { useToast } from "./ToastService";
import Spinner from "./Spinner";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { enqueueSnackbar, useSnackbar } from "notistack";
import "../globals.css";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const sendEvent = (conn, eventName, payload) => {
  const event = new Event(eventName, payload);
  try {
    conn.send(JSON.stringify(event));
  } catch (err) {
    console.log(err);
    enqueueSnackbar(`could not send message through websocket: ${err}`, {
      variant: "error",
    });
    throw Error(`could not send message through websocket: ${err}`);
  }
};

export default function Schedule() {
  const toast = useToast();
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [availability, setAvailability] = useState(undefined);
  const [schedule, setSchedule] = useState(undefined);
  const [message, setMessage] = useState();
  const [error, setError] = useState();
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
  const routeEvent = (e) => {
    if (e.type === undefined) {
      enqueueSnackbar('no "type" field in event', { variant: "error" });
      return;
    }
    switch (e.type) {
      case "broadcast_schedule":
        console.log("broadcast");
        break;
      case "insert_response":
        console.log("insert res");
        break;
      case "update_response":
        console.log("update");
        break;
      case "remove_response":
        console.log("remove");
        break;
      default:
        console.log("unsupported");
    }
  };

  useEffect(() => {
    if (!window["WebSocket"]) {
      console.log("browser does not support websockets");
      enqueueSnackbar("browser does not support websockets", {
        variant: "error",
      });
      return;
    }

    const scheduleUrl = import.meta.VITE_SCHEDULE_API;
    const conn = new WebSocket(scheduleUrl);

    conn.onmessage = (e) => {
      console.log(e);
      routeEvent(e);
    };
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
            <Box className="min-h-52">
              <Spinner size="xlarge" />
            </Box>
          )}
          {!isLoading && (
            <Card id="schedule-body">
              <CardHeader id="schedule-header" className="">
                <Typography variant="subtitle1">
                  Current Period: {currentPeriod?.StartDate}-
                  {currentPeriod?.EndDate}
                </Typography>
              </CardHeader>
              <CardContent id="schedule-content">
                <Stack container spacing={2}>
                  <Grid
                    container
                    display="flex"
                    flexDirection="row"
                    spacing={2}
                  >
                    {
                      //<ScheduleTable tasks={tasks} availability={availability} />
                      schedule?.availability?.map((avb) => (
                        <Stack
                          key={avb.id}
                          display="flex"
                          flexDirection="row"
                          spacing={2}
                        >
                          <Typography>{avb.formattedDateTime}</Typography>
                        </Stack>

                        //here is the start of the time cells
                      ))
                    }
                  </Grid>
                </Stack>
              </CardContent>
            </Card>
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
