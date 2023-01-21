import styles from "./Collector.module.scss";
import { Container, Grid } from "@mui/material";
import classNames from "classnames";
import React from "react";
import User from "../user/User";

export default function Collector({
  name,
  avatar,
  verified,
  type,
  nftsCount,
  id,
}) {
  return (
    <div
      className={classNames({
        [styles["container"]]: true,
        [styles["container"]]: type === "lighter" ? true : false,
      })}
    >
      <Grid container direction="row" >
        <Grid item xs={3} className={classNames(styles["collector-number"])}>
          {id}
        </Grid>
        <Grid item xs={9}>
          <User
            name={name}
            avatar={avatar}
            verified={verified}
            info={nftsCount}
          />
        </Grid>
      </Grid>
    </div>
  );
}
