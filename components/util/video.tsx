import Link from "next/link";
import * as React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { useTheme } from "../layout";
import { tinaField } from "tinacms/dist/react";
import { Icon } from "./icon";

export const Actions = ({
  containerStyle = "",
  actionStyle = "",
  data,
}: {
  actionStyle?: string;
  containerStyle: string;
  data: any;
}) => {
  return (
    <div className={`flex flex-wrap items-center gap-y-4 gap-x-6 ${containerStyle}`}>
        
    </div>

  );
};
