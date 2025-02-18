import * as React from "react";
import { Actions, actionSchema, defaultLink } from "../../util/actions";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import { PageBlocksHeroSplitImg } from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import Image from "next/image";
import { backgroundColorClasses, textColorClasses } from "../../util/colors";

export const HeroSplitImg = ({ data }: { data: PageBlocksHeroSplitImg }) => {
  return (
    <section className={`grid grid-cols-1 lg:grid-cols-2 gap-y-6 md:gap-y-8 items-center justify-center ${backgroundColorClasses[data.backgroundcolor ?? ""]}  relative isolate overflow-hidden`}>
      <div className="mx-auto max-w-2xl lg:max-w-4xl py-10 px-6 md:px-12 lg:px-32 lg:mx-0 lg:flex-shrink-0 lg:pt-8">
        <div className="flex">
          {data.tagline && (
            <h2
              data-tina-field={tinaField(data, "tagline")}
              className={`relative rounded-full px-3 py-1 text-sm leading-6 ${textColorClasses[data.textColor ?? ""]} ring-1 ring-gray-900/10 hover:ring-gray-900/20`}
            >
              {data.tagline}
              <span className={`inline-flex items-center space-x-2 text-sm font-medium leading-6 ${textColorClasses[data.textColor ?? ""]}`}></span>
            </h2>
          )}
        </div>
        {data.headline && (
          <h1
            data-tina-field={tinaField(data, "headline")}
            className={`mt-10 text-4xl font-bold tracking-tight`}
          >
            <span className={`bg-clip-text ${textColorClasses[data.textColor ?? "default"]} bg-gradient-to-r`}>
              {data.headline}
            </span>
          </h1>
        )}
        {data.text && (
          <div
            data-tina-field={tinaField(data, "text")}
            className={`mt-6 text-lg leading-8 ${textColorClasses[data.textColor ?? ""]} 
            prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
            
            `}
          >
            <TinaMarkdown content={data.text} />
          </div>
        )}
        <div className="mt-10 flex items-center gap-x-6">
          {data.action && (
            <Actions
              actionStyle={`rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold ${textColorClasses[data.textColor ?? ""]} shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              containerStyle=""
              actions={data.action}
            />
          )}
        </div>
      </div>
      {data.image && (
        <div
          data-tina-field={tinaField(data.image, "src")}
          className="relative aspect-[3/2] w-full h-auto lg:h-full"
        >
          <Image
            className="object-cover"
            fill={true}
            alt={data.image.alt ? data.image.alt : "Image"}
            src={data.image.src ?? ""}
          />
        </div>
      )}
    </section>
  );
};

const defaultItem = {
  tagline: "This tagline is informative and short",
  headline: "This Headline is impactful and important",
  text: {
    type: "root",
    children: [
      {
        type: "p",
        children: [
          {
            type: "text",
            text: "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
          },
        ],
      },
    ],
  },
  action: [defaultLink],
  image: {
    src: "/uploads/Placeholders/dock.jpg",
    alt: "Image",
  },
};

export const heroSplitImgBlockSchema: Template = {
  name: "heroSplitImg",
  label: "Page Intro: Split Image with Text",
  ui: {
    previewSrc: "/blocks/split-img.png",
    defaultItem: defaultItem,
  },
  fields: [
    {
      type: "string",
      label: "Tagline",
      name: "tagline",
    },
    {
      type: "string",
      label: "Headline",
      name: "headline",
    },
    {
      label: "Primary Body",
      name: "text",
      type: "rich-text",
    },
    actionSchema,
    {
      type: "object",
      label: "Image",
      name: "image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      type: "string",
      label: "Background Color",
      name: "backgroundcolor",
      options: [
        { label: "Blue", value: "blue" },
        { label: "White", value: "white" },
      ],
    },
    {
      type: "string",
      label: "Text Color",
      name: "textColor",
      options: [
        { label: "Blue", value: "blue" },
        { label: "Black", value: "black" },
        { label: "White", value: "white" },
      ],
    }
  ],
};
