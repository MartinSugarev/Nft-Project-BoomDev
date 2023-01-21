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
  number,
}) {
  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classNames({
        [styles["container"]]: true,
        [styles["container"]]: type === "lighter" ? true : false,
      })}
    >
      <Grid container direction="row">
        <Grid item xs={3} className={classNames(styles["collector-number"])}>
          {number}
        </Grid>
        <Grid item>
          <User
            name={name}
            avatar={avatar}
            verified={verified}
            info={nftsCount}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
