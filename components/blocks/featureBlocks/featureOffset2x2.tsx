import { Section } from "../../util/section";
import { Icon } from "../../util/icon";
import { iconSchema } from "../../util/icon";
import {
  PageBlocksFeatureOffset,
  PageBlocksFeatureOffsetItems,
} from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import type { Template } from "tinacms";
import { actionSchema } from "../../util/actions";

export const FeatureOffset2x2Grid = ({ data }: { data: PageBlocksFeatureOffset }) => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-32 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3 bg-white">
      {data.tagline && (
        <h2
          data-tina-field={tinaField(data, "tagline")}
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-1"
        >
          {data.tagline}
          <span className="absolute w-full h-full left-0 top-0 rounded-full -z-1 bg-current opacity-7"></span>
        </h2>
      )}
      <div className="grid max-w-2xl lg:max-w-4xl grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:col-span-2 lg:gap-y-16 lg:gap-x-28">
        {data.items &&
          data.items.map(function (block, i) {
            return <FeatureOffset2x2GridItem key={i} data={block || {}} />;
          })}
      </div>
    </section>
  );
};

export const FeatureOffset2x2GridItem = ({
  data,
}: {
  data: PageBlocksFeatureOffsetItems;
}) => {
  return (
    <div
      data-tina-field={tinaField(data)}
      className="mx-auto max-w-2xl sm:mt-8 lg:mt-10 lg:max-w-none"
    >
      <div className="flex max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
            {data.icon && (
              <Icon
                tinaField={tinaField(data, "icon")}
                data={{ size: "xl", ...data.icon }}
              />
            )}
            {data.title && (
              <h3
                data-tina-field={tinaField(data, "title")}
                className="flex items-center gap-x-3 break-words text-large font-semibold leading-7 text-gray-900"
              >
                {data.title}
              </h3>
            )}
          </div>
          <div className="mt-4 flex flex-auto flex-col text-larg leading-7 text-gray-600">
            {data.text && (
              <p
                data-tina-field={tinaField(data, "text")}
                className="flex-auto break-words"
              >
                {data.text}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const defaultFeatureOffset = {
  title: "Here's Another Feature",
  text: "This is where you might talk about the feature, if this wasn't just filler text.",
  icon: {
    color: "",
    style: "float",
    name: "BiAperture",
  },
  action: [
    {
      label: "Action Label",
      type: "link",
      icon: true,
      link: "/",
    },
  ],
};

export const featureOffset2x2GridBlockSchema: Template = {
  name: "featureOffset",
  label: "Features: Offset 2x2 Grid",
  ui: {
    previewSrc: "/blocks/featureoffset2x2.png",
    defaultItem: {
      tagline: "A headline for the features section.",
      items: [
        defaultFeatureOffset,
        defaultFeatureOffset,
        defaultFeatureOffset,
        defaultFeatureOffset,
      ],
    },
  },
  fields: [
    {
      type: "string",
      label: "Header",
      name: "tagline",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      label: "Feature Items",
      name: "items",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item?.title,
          };
        },
        defaultItem: {
          ...defaultFeatureOffset,
        },
      },
      fields: [
        iconSchema,
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Text",
          name: "text",
          ui: {
            component: "textarea",
          },
        },
        actionSchema,
      ],
    },
  ],
};
