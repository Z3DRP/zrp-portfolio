import { useState } from "react";
import logo from "../assets/images/zlogo1.png";
import { Box } from "@mui/material";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Viewer } from "@react-pdf-viewer/core";
import resumePdf from "../assets/files/zrpFSResume.pdf";

export default function ResumeViewer() {
  const [numberOfPages, setNumberOfPages] = useState(undefined);

  const onDocumentLoadSuccess = ({ numberOfPages }) => {
    setNumberOfPages(numberOfPages);
  };
  return (
    <Box className="border-2 border-gray-200 shadow-lg rounded overflow-hidden mb-4">
      <iframe
        src={resumePdf}
        alt="zach palmer logo"
        className="w-full h-96"
        title="Zach Palmer Resume"
      />
      {
        //<Viewer fileUrl={resumePdf} />
      }
    </Box>
  );
}

