import logo from "../assets/images/zlogo1.png"

export default function ResumeViewer() {
    return (
        <div className="border-2 border-gray-200 shadow-lg rounded overflow-hidden mb-4">
            <iframe
                src={logo}
                alt="zach palmer logo"
                className="w-full h-96"
                title="Zach Palmer Resume"
            />
        </div>
    );
}