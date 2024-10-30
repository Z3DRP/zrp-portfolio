import "../globals.css"
import PropTypes from "prop-types"
import Spinner from "./Spinner"
import { Hash, Eraser } from "lucide-react"

export default function ZypherForm ({
    handleMsgChange, handleShiftChange, handleShiftCountChange, handleHashCountChange, handleAlternateChange, handleIgnoreSpaceChange,
    handleZypher, handleClear, isLoading, hasError, result, message, ignoreSpace, alternate, shift, shiftCount, hashCount
}){
    return (
        <form className="w-full max-w-3xl mt-4">
            <div className="flex flex-col -mr-6">
                <div id="row-1" className="flex flex-row w-full justify-evenly justify-items-stretch">
                    <div className="w-full md:w-1/2 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2 dark:text-lgreen" htmlFor="message">Message</label>
                        <input 
                        className="appearance-none block w-full rounded py-3 px-4 mb-3 leading-tight bg-lgreen text-dgreen focus:outline-none focus:bg-dlgreen dark:bg-dlgreen dark:text-ddgreen"
                        id="message"
                        type="text"
                        placeholder="Enter a Message"
                        onChange={handleMsgChange}
                        value={message}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3 ml-4 justify-self-end">
                        <label className="block uppercase tracking wide text-xs font-bold mb-2" htmlFor="ignoreSpace">Ignore Space</label>
                        <input id="ignoreSpace"
                        className="rounded text-dgreen focus:outline-none focus:bg-dlgreen dark:bg-dlgreen dark:text-ddgreen"
                        type="checkbox"
                        onChange={handleIgnoreSpaceChange}
                        value={ignoreSpace}
                        />
                    </div>
                    <div className="w-full md:w1/2 px-3 justify-self-stretch">
                        <label className="block uppercase tracking wide text-xs font-bold mb-2" htmlFor="alternate">Alternate</label>
                        <input
                            id="alternate"
                            className="rounded bg-lgreen focus:outline-none focus:bg-dlgreen text-dgreen dark:bg-dlgreen dark:text-ddgreen"
                            type="checkbox"
                            onChange={handleAlternateChange}
                            value={alternate}
                        />
                    </div>
                </div>
                <div id="row-2" className="flex flex-row w-full">
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="span-col-1 w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="shift">Shift</label>
                            <input
                                id="shift"
                                className="rounded px-4 bg-lgreen focus:outline-none focus:bg-dlgreen text-dgreen dark:bg-dlgreen dark:text-ddgreen"
                                type="number"
                                step="1"
                                onChange={handleShiftChange}
                                value={shift}
                            />
                        </div>
                        <div className="span-col-1 w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="shiftCount">Shift Count</label>
                            <input
                                id="shiftCount"
                                className="rounded px-4 bg-lgreen focus:outline-none focus:bg-dlgreen text-dgreen dark:bg-dlgreen dark:text-ddgreen"
                                type="number"
                                step="1"
                                onChange={handleShiftCountChange}
                                value={shiftCount}
                            />
                        </div>
                        <div className="span-col-1 w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="hashCount">Hash Count</label>
                            <input
                                id="hashCount"
                                className="rounded px-4 bg-lgreen focus:outline-none focus:bg-dlgreen text-dgreen dark:bg-dlgreen dark:text-ddgreen"
                                type="number"
                                step="1"
                                onChange={handleHashCountChange}
                                value={hashCount}
                            />
                        </div>
                    </div>

                </div>
                <div className="flex flex-col w-full">
                    <div className="mt-4 w-full">
                            {isLoading && <Spinner />}
                            {hasError && <h3 className="text-red-500">An error occurred</h3>}
                            {!isLoading && !hasError && (
                                <>
                                    <textarea className="px-2 w-full rounded-md border-none text-dgreen bg-lgreen dark:bg-dlgreen dark:text-ddgreen mb-2" rows="5" cols="76" value={result} readOnly>
                                    </textarea>
                                </>
                            )}
                    </div>
                    <button onClick={handleZypher} className="px-4 py-4 my-4 bg-orange-500 text-dgreen hover:bg-dlgreen hover:text-dmgreen dark:bg-orange-500 dark:text-ddgreen rounded flex flex-row justify-center w-full text-xl font-semibold mr-2 mt-2 dark:hover:bg-dmgreen dark:hover:text-dlgreen" disabled={isLoading}>
                        <span className="mr-2"><Hash size={24} /></span> {isLoading ? "Processing" : "Zypher It"}
                    </button>
                    <button onClick={handleClear} className="px-4 py-4 my-4 bg-mgreen text-dgreen hover:bg-dlgreen hover:text-dmgreen dark:bg-mgreen dark:text-ddgreen rounded flex flex-row justify-center w-full text-xl font-semibold mr-2 mt-2 dark:hover:bg-dmgreen dark:hover:text-dlgreen" disabled={isLoading}>
                        <span className="mr-2"><Eraser size={24} /></span> Clear
                    </button>
                </div>
            </div>
        </form>
    )
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
    ignoreSpace: PropTypes.bool.isRequired
}