import * as React from "react";
import { Actions, actionSchema } from "../../util/actions";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import { PageBlocksHeroAppImg } from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import Image from "next/image";

export const HeroAppImg = ({ data }: { data: PageBlocksHeroAppImg }) => {
  return (
    <section
      className="py-12 px-6 md:px-12 lg:px-32 grid grid-cols-1 gap-y-6 items-center justify-center text-center bg-white relative isolate"
    >
        <div className="flex justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            {data.tagline && (
              <h2
                data-tina-field={tinaField(data, "tagline")}
                className="tracking-wide title-font z-20"
              >
                {data.tagline}
                <span className="absolute w-full h-full left-0 top-0 rounded-full -z-1 bg-current opacity-7"></span>
              </h2>
            )}
          </div>
        </div>
          {data.headline && (
            <h1
              data-tina-field={tinaField(data, "headline")}
              className={`text-4xl font-bold tracking-tight text-gray-900`}
            >
              {data.headline}
            </h1>
          )}
          {data.text.children && (
            <div
              data-tina-field={tinaField(data, "text")}
              className={`mt-6 text-lg leading-8 text-gray-600`}
            >
              <TinaMarkdown content={data.text} />
            </div>
          )}
          <div className="flex items-center justify-center gap-x-6">
            {data.action && (
              <Actions
                actionStyle=""
                containerStyle=""
                actions={data.action}
              />
            )}
          </div>
          {data.image && (
            <div
              data-tina-field={tinaField(data.image, "src")}
              className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/2] m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 "
            >
              <Image
                className=" object-cover rounded-md shadow-2xl ring-1 ring-gray-900/10"
                alt={data.image.alt ? data.image.alt : "Image"}
                src={data.image.src ?? ""}
                fill={true}
              />
            </div>
          )}
    </section>
  );
};

const defaultItem = {
  tagline: "Here's a tagline to provide context for the headline",
  headline: "A Headline for the Page Intro Block",
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
  action: [
    {
      label: "Action Label",
      type: "button",
      icon: true,
      link: "/",
    },
  ],
  image: { src: "/uploads/Placeholders/dock.jpg", alt: "Placeholder Image" },
}

export const heroAppImgBlockSchema: Template = {
  name: "heroAppImg",
  label: "Page Intro: Simple Intro Column",
  ui: {
    previewSrc: "/blocks/hero-app-img.png",
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
  ],
};
