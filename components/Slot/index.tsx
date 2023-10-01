import React from "react";
import type { FC } from "react";
import Styles from "./index.module.css";
import Layout from "@defaults/Layout";

interface Props {
}

const Slot: FC<Props> = ({}) => {
  return (
    <Layout title="" description="">
      <div className={Styles.Slot}></div>
    </Layout>
  );
};

export default Slot;
