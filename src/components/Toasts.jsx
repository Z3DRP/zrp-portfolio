import { ShieldAlert } from "lucide-react";
import PropTypes from "prop-types"
import "../globals.css";


export function InfoToast({type, msg}) {
    return (
        <div className="flex gap-2 bg-slate-500 text-white p-4 rounded-lg shadow-lg">
            <ShieldAlert size={16}/>
            <div>
                <h3 className="font-bold">{type}</h3>
                <p className="text-sm">{msg}</p>
            </div>
        </div>    
    )
}

export function ErrorToast({type, msg}) {
    return (
        <div className="flex gap-2 bg-red-300 text-red-800 p-4 rounded-lg shadow-lg">
            <ShieldAlert size={16}/>
            <div>
                <h3 className="font-bold">{type}</h3>
                <p className="text-sm">{msg}</p>
            </div>
        </div>
    )
}

export function SuccessToast({type, msg}) {
    return (
        <div className="flex gap-2 bg-green-800 text-green-300 p-4 rounded-lg shadow-lg">
            <ShieldAlert size={16}/>
            <div>
                <h3 className="font-bold">{type}</h3>
                <p className="text-sm">{msg}</p>
            </div>
        </div>    
    )
}

export function WarningToast({type, msg}) {
    return (
        <div className="flex gap-2 bg-yellow-500 text-white p-4 rounded-lg shadow-lg">
            <ShieldAlert size={16}/>
            <div>
                <h3 className="font-bold">{type}</h3>
                <p className="text-sm">{msg}</p>
            </div>
        </div>    
    )
}

const toastPropTypes = {
    type: PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired,
}

InfoToast.propTypes = toastPropTypes
ErrorToast.propTypes = toastPropTypes
SuccessToast.propTypes = toastPropTypes
WarningToast.propTypes = toastPropTypes
