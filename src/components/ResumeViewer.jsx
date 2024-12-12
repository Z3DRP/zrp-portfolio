import { useState } from "react";
import logo from "../assets/images/zlogo1.png";
import { Box, Container } from "@mui/material";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Viewer } from "@react-pdf-viewer/core";
import resumePdf from "../assets/files/zrpFSResume.pdf";

export default function ResumeViewer() {
  const [numberOfPages, setNumberOfPages] = useState(undefined);

  const onDocumentLoadSuccess = ({ numberOfPages }) => {
    setNumberOfPages(numberOfPages);
  };

  document.body.style.margin = "0";
  document.body.style.overflow = "auto";

  return (
    <Container className="h-full" sx={{ height: "100%" }}>
      <Box className="h-full border-2 border-gray-200 shadow-lg rounded overflow-hidden mb-4">
        <iframe
          src={resumePdf}
          style={{ height: "100vh", width: "100%", display: "block" }}
          alt="zach palmer logo"
          className="w-full h-full overflow-y-auto"
          title="Zach Palmer Resume"
        />
      </Box>
    </Container>
  );
}
