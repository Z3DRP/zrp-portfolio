import "../globals.css"
import { LoaderPinwheel } from "lucide-react"
import PropTypes from "prop-types"

export default function Spinner({ size = "small"}) {
    switch (size.toLowerCase()) {
        case "small": 
            return (
                <LoaderPinwheel className="animate-spin text-lgreen" size={20} />
            )
        case "medium":
            return (
                <LoaderPinwheel className="animate-spin text-lgreen" size={24} />
            )
        case "large":
            return (
                <LoaderPinwheel className="animate-spin text-lgreen" size={32} />
            )
        case "xlarge":
            return (
                <LoaderPinwheel className="animate-spin text-lgreen" size={56} />
            )
        case "xxlarge":
            return (
                <LoaderPinwheel className="animate-spin text-lgreen" size={75} />
            )
    }
}

Spinner.propTypes = {
    size: PropTypes.oneOf(["small", "medium", "large", "xlarge", "xxlarge"])
}

