import '../globals.css'
import { CircleDot } from "lucide-react"

export default function Footer() {
    return (
        <footer className="p-4 mt-4font-sans flex justify-center items-center bg-dgreen dark:bg-ddgreen h-20 dark:text-dlgreen">
            <div className="flex items-center flex-row flex-shrink-0 text-stone-100 mt-8">
                <div className="flex items-center flex-row m-2 dark:text-dlgreen">
                    <span className="m-2 dark:text-dlgreen">
                        <CircleDot size={32} />
                    </span>
                    zachpalmer1017@gmail.com
                </div>
                <div className="flex items-center flex-row m-2 dark:text-dlgreen">
                    <span className="m-2 dark:text-dlgreen">
                        <CircleDot size={32} />
                    </span>
                    618-208-9496      
                </div>
            </div>
        </footer>
    )
}