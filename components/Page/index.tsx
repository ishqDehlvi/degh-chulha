import React from "react";
import type { FC } from "react";
import Styles from "./index.module.css";
import Layout from "@defaults/Layout";

interface Props {
}

const Page: FC<Props> = ({}) => {
  return (
    <Layout title="" description="">
      <div className={Styles.Page}></div>
    </Layout>
  );
};

export default Page;
