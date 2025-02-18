import { Icon } from "../../util/icon";
import { iconSchema } from "../../util/icon";
import {
  PageBlocksOffsetfeatures,
  PageBlocksOffsetfeaturesItems,
} from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import type { Template } from "tinacms";

export const OffsetFeature = ({ data, }: { data: PageBlocksOffsetfeatures }) => {
  return (

        <div className="flex flex-wrap gap-x-10 gap-y-4 max-w-full bg-docker-blue px-8 lg:px-24 py-12">
        {data.tagline && (
          <h1
            data-tina-field={tinaField(data, "tagline")}
            className="text-base font-semibold leading-7 text-indigo-600"
          >
            {data.tagline}
            <span className="absolute w-full h-full left-0 top-0 rounded-full -z-1 bg-current opacity-7 text-white"></span>
          </h1>
        )}

      {data.headline && (
          <h2
            data-tina-field={tinaField(data, "headline")}
            className="text-3xl w-full h-full font-bold tracking-tight text-white"
          >
            {data.headline}
            <span className="absolute w-full h-full left-0 top-0 rounded-full -z-1 bg-current opacity-7 text-white"></span>
          </h2>
        )}

        {data.primarybody && (
          <p
            data-tina-field={tinaField(data, "primarybody")}
            className="text-base tracking-tight w-[600px] pb-8 text-white"
          >
            {data.primarybody}
          </p>
        )}
        {data.secondarybody && (
          <p
            data-tina-field={tinaField(data, "secondarybody")}
            className="text-base leading-7 text-white"
          >
            {data.secondarybody}
          </p>
        )}
        <div className="mt-4 flex flex-wrap md:gap-x-10 gap-y-8">
        {data.items &&
          data.items.map(function (block, i) {
            return <OffsetFeatureItem key={i} data={block || {}}/>;
          })}
          </div>
        </div>
  );
};

export const OffsetFeatureItem = ({
  data,
}: {
  data: PageBlocksOffsetfeaturesItems;
}) => {
  return (

    <div
      data-tina-field={tinaField(data)}
      className="flex-1 flex flex-col gap-6 items-start text-left max-w-xl mx-auto text-white"
      style={{ flexBasis: "16rem" }}
    >

      <div className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-6 text-base leading-7 text-gray-600">
        {data.icon && (
          <Icon
            tinaField={tinaField(data, "icon")}
            data={{ size: "large", ...data.icon }}
          />
        )}
        {data.title && (
          <h3
            data-tina-field={tinaField(data, "title")}
            className="text-2xl font-semibold title-font text-white"
          >
            {data.title}
          </h3>
        )}
        {data.text && (
          <p
            data-tina-field={tinaField(data, "text")}
            className="text-base text-left leading-relaxed text-white"
          >
            {data.text}
          </p>
        )} </div>

    </div>
  )
};

const defaultoffsetFeature = {
  title: "Here's Another Feature",
  text: "This is where you might talk about the feature, if this wasn't just filler text.",
  icon: {
    color: "white",
    style: "float",
    name: "aperture",
  },
};

export const offsetfeatureBlockSchema: Template = {
  name: "offsetfeatures",
  label: "Feature:Highlight",
  ui: {
    previewSrc: "/blocks/highlight.png",
    defaultItem: {
      headline: "Here's a Highlight",
      tagline: "This is a tagline",
      primarybody: "This is where you might talk about the primary body, if this wasn't just filler text.",
      secondarybody: "This is where you might talk about the Secondary body, if this wasn't just filler text.",
      items: [defaultoffsetFeature, defaultoffsetFeature, defaultoffsetFeature],
    },
  },
  fields: [
    {
      type: "string",
      label: "Headline",
      name: "headline",
    },
    {
      type: "string",
      label: "Tagline",
      name: "tagline",
    },
    {
      type: "string",
      label: "Primary Body",
      name: "primarybody",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      label: "Secondary Body",
      name: "secondarybody",
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
          ...defaultoffsetFeature,
        },
      },
      fields: [
        iconSchema,
        {
          type: "string",
          label: "Feature Title",
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
      ],
    },
  ],
};
