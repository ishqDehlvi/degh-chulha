import type { GetStaticProps, NextPage } from "next";
import React from "react";

interface Props {
  prop: string;
}

const Home: NextPage<Props> = ({ prop }) => {
  return <></>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      prop: "prop",
    },
    revalidate: 10,
  };
};

export default Home;
