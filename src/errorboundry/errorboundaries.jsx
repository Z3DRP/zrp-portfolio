import React from "react";
import PropTypes from "prop-types";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false}
    }

    static getDerivedStateFromError(error) {
        console.log(error)
        return {hasError: true}
    }

    componentDidCatch(error, info) {
        console.error(`Error caught by Error Boundary: ${error}:: ${info.componentStack}`)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex items-center justify-center min-h-[500px] text-lgreen text-3xl">
                    <div className="grid grid-rows-2 justify-center justify-items-center">
                        <h1 className="row-span-1" >An unexpected error occurred</h1>
                        <h4 className="row=span-1 text-xl">Please try again later</h4>
                    </div>
                </div>
            )
        }
        return this.props.children
    }

}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
}
