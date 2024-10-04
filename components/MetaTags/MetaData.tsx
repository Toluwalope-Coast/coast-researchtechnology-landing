import { DashboardLayoutProps } from "@/lib/type";
import Head from "next/head";
import React from "react";

export const MetaData: React.FC<DashboardLayoutProps> = ({
  title,
  description,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
};
