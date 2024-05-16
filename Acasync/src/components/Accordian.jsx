import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { imagefrombuffer } from "imagefrombuffer";

export default function Accordian({ subject, announcement, file }) {
  return (
    <div>
      <Accordion sx={{ backgroundColor: "black", color: "white" }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon sx={{ color: "violet" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {subject}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{announcement}</Typography>
          {file && file.contentType.includes("image") && (
            <img
              id="pic"
              src={imagefrombuffer({
                type: file?.contentType,
                data: file?.data?.data,
              })}
              alt="Profile"
            />
          )}
          {file && file.contentType.includes("pdf") && (
            <a
              href={URL.createObjectURL(
                new Blob([file.data.data], { type: file.contentType })
              )}
              download
            >
              Download PDF
            </a>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
