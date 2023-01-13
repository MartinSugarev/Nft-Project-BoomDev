import classNames from "classnames";
import styles from "./ExploreTitle.module.scss";
import { Typography } from "@mui/material";
import React from "react";

export default function ExploreTitle({ text = "Explore" }) {
    
  return (
    <div className={classNames(styles["explore-title"])}>
       <Typography variant="h1">{text}</Typography>
    </div>
  );
}