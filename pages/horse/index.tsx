import type { NextPage } from "next"
import Layout from "@components/Layout"
import HorseContainer from '@containers/horse'

const Horse: NextPage = () => {
  return (
    <Layout>
      <HorseContainer/>
    </Layout>
  );
};

export default Horse;
