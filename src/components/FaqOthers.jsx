import * as React from "react";
import { makeStyles } from "@mui/styles";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";

const useStyle = makeStyles((theme) => ({
  title: {
    boxShadow: "0 3px 1px -2px #eee !important",
    padding: "15px 0px 15px 0px !important",
    background: 'red'
  },
  title_inner: {
    // padding: "0px !important",
  },
  title_text: {
    padding: "0px !important",
  },
  button: {
    color: "#fff !important",
    marginTop: "30px !important",
  },
  center: {
    textAlign: "center",
  },
}));

export default function FaqOthers() {
  const classes = useStyle();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className={classes.title}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.title_inner}
        >
          <Typography variant="body2">
            How can i get high-end anaylizing process?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.title_inner}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            perferendis molestiae voluptates vero animi ex corrupti, maiores
            tempore, iusto, rem nemo officiis consectetur. Sunt, nobis omnis
            consectetur deleniti nam vero!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        className={classes.title}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.title_inner}
        >
          <Typography variant="body2">
            How can i get excellence track record?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.title_inner}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            perferendis molestiae voluptates vero animi ex corrupti, maiores
            tempore, iusto, rem nemo officiis consectetur. Sunt, nobis omnis
            consectetur deleniti nam vero!2
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className={classes.title}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.title_inner}
        >
          <Typography variant="body2">
            How can i get dedicated support?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.title_inner}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            perferendis molestiae voluptates vero animi ex corrupti, maiores
            tempore, iusto, rem nemo officiis consectetur. Sunt, nobis omnis
            consectetur deleniti nam vero!3
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        className={classes.title}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.title_inner}
        >
          <Typography variant="body2">How can i get ssl hosting?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.title_inner}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            perferendis molestiae voluptates vero animi ex corrupti, maiores
            tempore, iusto, rem nemo officiis consectetur. Sunt, nobis omnis
            consectetur deleniti nam vero!4
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
