import React from "react";
import { InferGetStaticPropsType } from "next";
import { Blocks } from "../components/layout/blocks-renderer";
import { useTina } from "tinacms/dist/react";
import { Layout } from "../components/layout";
import databaseClient from "../tina/__generated__/databaseClient";

export default function HomePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { data } = useTina(props);

  return (
    <Layout rawData={data} data={data.global as any}>
      <Blocks {...data.page} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const tinaProps = await databaseClient.queries.contentQuery({
    relativePath: `${params.filename}.md`,
  });
  const props = {
    ...tinaProps,
    enableVisualEditing: process.env.VERCEL_ENV === "preview",
  };
  return {
    props: JSON.parse(JSON.stringify(props)) as typeof props,
  };
};

export const getStaticPaths = async () => {
  const pagesListData = await databaseClient.queries.pageConnection();
  // console.log(pagesListData);
    return {
      paths: pagesListData.data.pageConnection?.edges?.map((page) => (
        {
          params: {
            filename: page?.node?._sys.filename ?? "",
          },
        })),
      fallback: false,
    }
};
