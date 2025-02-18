"use client";

import { PageQuery, GlobalQuery } from "../tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import { Blocks, Layout } from "./layout";
import { client } from "../tina/__generated__/databaseClient";

export function Page(props: {
  global: GlobalQuery;
  data: PageQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);
  const { global } = props;
  return ( 
      <Layout rawData={data} data={global.global as any}>
        <Blocks {...data.page} />
      </Layout>
  );
}
