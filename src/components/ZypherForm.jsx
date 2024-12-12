import "../globals.css";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import { Hash, Eraser } from "lucide-react";
import { Button, IconButton } from "@mui/material";

export default function ZypherForm({
  handleMsgChange,
  handleShiftChange,
  handleShiftCountChange,
  handleHashCountChange,
  handleAlternateChange,
  handleIgnoreSpaceChange,
  handleZypher,
  handleClear,
  isLoading,
  hasError,
  result,
  message,
  ignoreSpace,
  alternate,
  shift,
  shiftCount,
  hashCount,
}) {
  return (
    <form className="lg:w-full md:max-w-xl lg:max-w-3xl mt-4">
      <div className="flex flex-col -mr-6">
        <div
          id="row-1"
          className="flex flex-row w-full justify-evenly justify-items-stretch"
        >
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2 dark:text-lgreen"
              htmlFor="message"
            >
              Message
            </label>
            <input
              className="appearance-none bg-gwhite block w-full rounded py-3 px-4 mb-3 leading-tight text-dgreen focus:outline-none focus:bg-dlgreen dark:text-ddgreen"
              id="message"
              type="text"
              placeholder="Enter a Message"
              onChange={handleMsgChange}
              value={message}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 ml-4 justify-self-end">
            <label
              className="block uppercase tracking wide text-xs font-bold mb-2"
              htmlFor="ignoreSpace"
            >
              Ignore Space
            </label>
            <input
              id="ignoreSpace"
              className="rounded bg-gwhite text-dgreen focus:outline-none focus:bg-dlgreen"
              type="checkbox"
              onChange={handleIgnoreSpaceChange}
              value={ignoreSpace}
            />
          </div>
          <div className="w-full md:w1/2 px-3 justify-self-stretch">
            <label
              className="block uppercase tracking wide text-xs font-bold mb-2"
              htmlFor="alternate"
            >
              Alternate
            </label>
            <input
              id="alternate"
              className="rounded bg-gwhite focus:outline-none focus:bg-dlgreen text-dgreen"
              type="checkbox"
              onChange={handleAlternateChange}
              value={alternate}
            />
          </div>
        </div>
        <div id="row-2" className="flex flex-row w-full">
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="span-col-1 w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="shift"
              >
                Shift
              </label>
              <input
                id="shift"
                className="rounded bg-gwhite px-4 focus:outline-none focus:bg-dlgreen text-dgreen "
                type="number"
                step="1"
                onChange={handleShiftChange}
                value={shift}
              />
            </div>
            <div className="span-col-1 w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="shiftCount"
              >
                Shift Count
              </label>
              <input
                id="shiftCount"
                className="rounded bg-gwhite px-4 focus:outline-none focus:bg-dlgreen text-dgreen "
                type="number"
                step="1"
                onChange={handleShiftCountChange}
                value={shiftCount}
              />
            </div>
            <div className="span-col-1 w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="hashCount"
              >
                Hash Count
              </label>
              <input
                id="hashCount"
                className="rounded bg-gwhite px-4 focus:outline-none focus:bg-dlgreen text-dgreen "
                type="number"
                step="1"
                onChange={handleHashCountChange}
                value={hashCount}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="mt-4 lg:w-full">
            {isLoading && <Spinner />}
            {hasError && <h3 className="text-red-500">An error occurred</h3>}
            {!isLoading && !hasError && (
              <>
                <textarea
                  className="px-2 lg:w-full md:max-w-3xl bg-gwhite rounded-md border-none text-dgreen mb-2"
                  rows="5"
                  cols="76"
                  value={result}
                  readOnly
                ></textarea>
              </>
            )}
          </div>
          <Button
            variant="contained"
            onClick={handleZypher}
            disabled={isLoading}
            className="lg:w-full bg-primorange text-neutral-800 h-12 border-l-2 border-l-white p-4 rounded-md font-semibold  lg:text-lg md:max-w-3xl md:mr-8 mr-2 hover:bg-porange"
          >
            <span className="mr-2">
              <Hash size={24} />
            </span>{" "}
            {isLoading ? "Processing" : "Zypher It"}
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClear}
            className="lg:w-full p-4 my-4 text-primorange hover:bg-porange hover:text-dmgreen dark:text-ddgreen rounded-md lg:text-lg font-semibold md:max-w-3xl md:mr-8 mr-2 mt-2 h-12"
            disabled={isLoading}
          >
            <span className="mr-2">
              <Eraser size={24} />
            </span>{" "}
            Clear
          </Button>
        </div>
      </div>
    </form>
  );
}

ZypherForm.propTypes = {
  handleMsgChange: PropTypes.func.isRequired,
  handleShiftChange: PropTypes.func.isRequired,
  handleShiftCountChange: PropTypes.func.isRequired,
  handleHashCountChange: PropTypes.func.isRequired,
  handleAlternateChange: PropTypes.func.isRequired,
  handleIgnoreSpaceChange: PropTypes.func.isRequired,
  handleZypher: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  result: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  shift: PropTypes.string.isRequired,
  shiftCount: PropTypes.number.isRequired,
  hashCount: PropTypes.number.isRequired,
  alternate: PropTypes.bool.isRequired,
  ignoreSpace: PropTypes.bool.isRequired,
};
