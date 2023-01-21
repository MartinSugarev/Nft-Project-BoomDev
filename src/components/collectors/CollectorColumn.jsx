import styles from "./CollectorColumn.module.scss";
import { Container } from "@mui/material";
import classNames from "classnames";
import React from "react";
import Collector from "./Collector";

export default function CollectorColumn({ items = [] }) {
  return (
    <Container maxWidth={false}>
      {items.map((i, index) => {
        const type = index % 2 !== 0 ? "lighter" : "darker";
        return (
          <Collector
            key={index}
            name={i.username}
            avatar={i.avatar.url}
            verified={i.verified}
            nftsCount={i.nftsCount}
            type={type}
            id={i.id}
          />
        );
      })}
    </Container>
  );
}


