"use client";
import { useState } from "react";
import "../globals.css";
import Spinner from "./Spinner";
import { Hash } from "lucide-react";
import { useToast } from "./ToastService";
import { SuccessToast, ErrorToast } from "./Toasts";
import ZypherForm from "./ZypherForm";
import { useSnackbar } from "notistack";

export default function Zypher() {
  const { enqueueSnackbar } = useSnackbar();
  const [zypherResult, setZypherResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [plaintxt, setInput] = useState("");
  const [shift, setShift] = useState(0);
  const [shiftCount, setShiftCount] = useState(0);
  const [hashCount, setHashCount] = useState(0);
  const [alternate, setAlternate] = useState(false);
  const [ignoreSpace, setIgnoreSpace] = useState(false);
  const [hasError, setHasError] = useState(undefined);
  const handleErrorToast = (msg, type) => {
    enqueueSnackbar(msg, { variant: "error" });
  };

  const handleSuccessToast = (msg, type) => {
    enqueueSnackbar(msg, { variant: "success" });
  };
  // const [restrictHashShift, setRestrictHashShift] = useState(false)
  // const handleShowMsg = (msg, type) => {
  //     // showToast(msg, type)
  // }

  const hasParams = () => {
    let isMissing = false;
    let params = [];
    if (plaintxt == undefined || plaintxt == undefined) {
      isMissing = true;
      params.append("text");
    }

    if (shift == undefined) {
      isMissing = true;
      params.append("shift");
    }

    if (shiftCount == undefined) {
      isMissing = true;
      params.append("shiftCount");
    }

    if (hashCount == undefined) {
      isMissing = true;
      params.append("hashCount");
    }
    return { isMissingParams: isMissing, missingParams: params };
  };

  const isValidValues = () => {
    let isValid = true;
    let params = [];

    if (shift < 0) {
      isValid = false;
      params.append("shift");
    }
    if (shiftCount < 0) {
      isValid = false;
      params.append("shift count");
    }
    if (hashCount < 0) {
      isValid = false;
      params.append("hash count ");
    }

    return { isValidParams: isValid, badParams: params };
  };

  const clearZypherState = () => {
    setInput("");
    setShift(0);
    setShiftCount(0);
    setHashCount(0);
    setAlternate(false);
    setIgnoreSpace(false);
  };

  const fetchZypher = (zy) => {
    return new Promise((resolve, reject) => {
      let zypherApiUrl = import.meta.env.VITE_ZYPHER_API;
      try {
        fetch(
          `${zypherApiUrl}?txt=${zy.txt}&shft=${zy.shf}&shftcount=${zy.shfCount}&hshcount=${zy.hshCount}&alt=${zy.alt}&ignspace=${zy.ignSpace}&restricthash=false`,
          { method: "POST" },
        ).then((res) => {
          console.log(`resposne:: ${res}`);
          if (res.ok && res.status < 500) {
            resolve(res.json());
          } else {
            reject(res);
          }
        });
      } catch (err) {
        console.log(`[ERROR-RESs]:: ${err}`);
        reject(err);
      }
    });
  };

  const handleZypher = async () => {
    const { isMissingParams, missingParams } = hasParams();
    if (isMissingParams) {
      setHasError(true);
      handleErrorToast(
        `Error, the following values are required for a zypher: ${[...missingParams]}`,
        "error",
      );
      return;
    }

    const { isValidParams, badParams } = isValidValues();
    if (!isValidParams) {
      setHasError(true);
      handleErrorToast(
        `Error, the following values must be non-negative numbers: ${[...badParams]}`,
        "error",
      );
      return;
    }

    setIsLoading(true);
    await fetchZypher({
      txt: plaintxt,
      shf: shift,
      shfCount: shiftCount,
      hshCount: hashCount,
      alt: alternate,
      ignSpace: ignoreSpace,
      rsthsh: false,
    })
      .then((data) => {
        console.log(`zypher result:: ${data?.result}`);
        setHasError(false);
        handleSuccessToast(
          "zypher has been calculated successfully",
          "success",
        );
        setZypherResult(data.result);
      })
      .catch((err) => {
        console.log(`[ERR]:: ${err}`);
        setHasError(true);
        handleErrorToast(`Error, ${err}`, "error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <article className="grid grid-cols-4 grid-rows-1 gap-x-4 justify-items-stretch justify-evenly rounded-lg m-4 text-lgreen bg-dgreen dark:bg-dgreen">
      <div
        id="info-section"
        className="col-span-2 rounded-md border-solid bg-neutral-800 border-lgreen "
      >
        <div className="    max-w-3xl p-4 mx-8 mt-8 mb-8">
          <h2 className="text-xl mb-4 text-orange-500 font-semibold">
            Zypher Encryption Tool
          </h2>
          <p
            className="leading-relaxed text-justify bg-neutral-800 p-2 rounded-md"
            id="zyphash-description"
          >
            A tool I made to try to mitigate hash colisions and make it harder
            for any plain text I hash to be cracked. The Zyphash algorithm is
            customizable which allows for fine grain control. The idea is a
            plain text value is first fed through a Zypher then fed through a
            hash, the iteration count for both of these can be set allowing for
            multiple rounds of cyphering and hashing. I was going to hash after
            every shift but I ran into some issues. I ended up taking A page
            from Bitcoin and just applying the hash N number of times after all
            shifting is done. It is a one way encryption process so to validate
            any passwords, etc the value will have to be fed through the Zyphash
            algorithm with the same parameters in order for the values to match.
            Enter a value into the Zyphash section and play around with the
            settings to see how it works. The Zyphash algorithm lets you
            customize the following settings:
          </p>
          {/* <ul className="mt-4">
                        <li>Hash Iteraction count (the number of times the hashing algorithm should be applied)</li>
                        <li>Cypher Shift count (which is the number a character should shift by, if set to 3 A would shift to D)</li>
                        <li>Alternate flag (tells the algorithm to shift odd number characters to shift by the negative of shift count)</li>
                        <li>Cypher Iteration count (the number of times the plaintext value should have the zypher algorithm appllied to it)</li>
                    </ul> */}
        </div>
      </div>
      <div
        id="zypher-body"
        className="col-span-2 justify-items-stretch rounded bg-dgreen dark:bg-dgreen w-full p-4 mt-8"
      >
        <ZypherForm
          handleMsgChange={(e) => setInput(e.target.value)}
          handleShiftChange={(e) => setShift(e.target.value)}
          handleShiftCountChange={(e) => setShiftCount(e.target.value)}
          handleHashCountChange={(e) => setHashCount(e.target.value)}
          handleIgnoreSpaceChange={(e) => setIgnoreSpace(e.target.value)}
          handleAlternateChange={(e) => setAlternate(e.target.value)}
          handleZypher={handleZypher}
          handleClear={clearZypherState}
          isLoading={isLoading}
          hasError={hasError}
          result={zypherResult}
          message={plaintxt}
          shift={shift}
          shiftCount={shiftCount}
          hashCount={hashCount}
          alternate={alternate}
          ignoreSpace={ignoreSpace}
        />
        {/* <div className="col-span-6">
                    <div className="mt-4">
                        <label className="block mr-2 mb-2">Enter a message to zypher:</label>
                        <input 
                            type="text" 
                            value={plaintxt} 
                            onChange={(e) => setInput(e.target.value)} 
                            className="border-none text-dgreen dark:bg-ddgreen dark:text-dlgreen p-2 w-[75%] mr-2 rounded"
                        />
                    </div>
                </div>
                <div className='col-span-6 row-start-2'>
                    <div className="my-4">
                            <label className="block mb-2 mr-8">Shift:</label>
                            <input
                                type="number"
                                step="1"
                                value={shift}
                                onChange={(e) => setShift(e.target.value)}
                                className="border-none text-dgreen dark:bg-ddgreen dark:text-dlgreen p-2 w-full rounded-md"
                            />
                    </div>
                    <div className="my-4">
                            <label className="block mb-2 mr-8">Shift Count:</label>
                            <input
                                type="number"
                                step="1"
                                value={shiftCount}
                                onChange={(e) => setShiftCount(e.target.value)}
                                className="border-none text-dgreen dark:bg-ddgreen dark:text-dlgreen p-2 w-full rounded-md"
                            />
                    </div>
                    <div className="my-4">
                            <label className="block mb-2 ml-8">Hash Count:</label>
                            <input 
                                type="number"
                                step="1"
                                value={hashCount}
                                onChange={(e) => setHashCount(e.target.value)}
                                className="border-none text-dgreen dark:bg-ddgreen dark:text-dlgreen p-2 w-full ml-8 rounded-md"
                            />
                    </div>
                    <div className="my-4 flex flex-row w-[35%]">
                        <label className="block mb-2 mr-2 w-full">Alternate Shift:</label>
                        <input
                            type="checkbox"
                            value={alternate}
                            onChange={(e) => setAlternate(e.target.checked)}
                            className="border-none text-dgreen dark:bg-ddgreen dark:text-dlgreen p-2 w-full"
                        />
                    </div>
                    <div className="my-4 w-[35%] justify-start">
                        <label className="block mb-2 w-full">Ignore Space:</label>
                        <input
                            type="checkbox"
                            value={ignoreSpace}
                            onChange={(e) => setIgnoreSpace(e.target.checked)}
                            className="border-none text-dgreen dark:bg-ddgreen dark:text-dlgreen p-2 w-full"
                        />
                    </div>
                </div>
                <div id="zypher-res" className="">
                    <div className="mt-4 w-[30%]">
                        {isLoading && <Spinner />}
                        {hasError && <h3 className="text-red-500">An error occurred</h3>}
                        {!isLoading && !hasError && (
                            <>
                                <textarea className="rounded-md border-none text-dgreen dark:bg-ddgreen dark:text-dlgreen" rows="5" cols="76" value={zypherResult} readOnly>
                                </textarea>
                            </>
                        )}
                    </div>
                    <button onClick={handleZypher} className="px-4 py-2 bg-mgreen text-dgreen hover:bg-dlgreen hover:text-dmgreen dark:bg-dgreen dark:text-dlgreen rounded flex flex-row justify-center w-9/12 text-lg mr-2 mt-2 dark:hover:bg-dmgreen dark:hover:text-ddgreen" disabled={isLoading}>
                        {isLoading ? "Processing" : "Zypher It"} <span className="ml-2"><Hash size={24} /></span>
                    </button>
                </div> */}
      </div>
    </article>
  );
}

