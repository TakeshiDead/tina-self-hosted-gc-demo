import * as React from "react";
import { Actions, actionSchema, defaultLink } from "../../util/actions";
import { Section } from "../../util/section";
import { useTheme } from "../../layout";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import { PageBlocksHerobackgrImg } from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import Image from "next/image";

export const HerobackgrImg = ({ data }: { data: PageBlocksHerobackgrImg }) => {
  return (
    <section className="">
      <div className="py-12 px-6 md:px-12 lg:px-32 bg-white relative isolate overflow-hidden">
        {data.image && (
            <Image
              className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
              fill
              alt={data.image.alt ? data.image.alt : "Image"}
              src={data.image.src ?? ""}
            />
        )}
        <div
          className="absolute inset-x-0 -top-80 md:-top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div className="relative w-[72.1875rem] md:w-[36.125rem] aspect-[1155/678] left-[calc(50%-30rem)] md:left-[calc(50%-11rem)] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"></div>
        </div>
        <div className="mx-auto max-w-2xl lg:max-w-3xl py-36 md:py-32 lg:py-56">
          <div className="mb-8 flex md:hidden justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              {data.tagline && (
                <h2
                  data-tina-field={tinaField(data, "tagline")}
                  className="tracking-wide title-font z-20"
                >
                  <span
                    className={`bg-clip-text text-black bg-gradient-to-r`}
                  ></span>
                  {data.tagline}
                  <span className="absolute w-full h-full left-0 top-0 rounded-full -z-1 bg-current opacity-7"></span>
                </h2>
              )}
            </div>
          </div>
          <div className="text-center">
            {data.headline && (
              <h1
                data-tina-field={tinaField(data, "headline")}
                className={`text-4xl font-bold tracking-tight text-gray-900`}
              >
                <span className={`bg-clip-text text-black bg-gradient-to-r `}>
                  {data.headline}
                </span>
              </h1>
            )}
            {data.text && (
              <div
                data-tina-field={tinaField(data, "text")}
                className={`mt-6 text-lg leading-8 text-gray-600`}
              >
                <TinaMarkdown content={data.text} />
              </div>
            )}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {data.action && (
                <Actions
                  actionStyle="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  containerStyle=""
                  actions={data.action}
                />
              )}
            </div>
          </div>
        </div>
      </div>
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

export const herobackgrImgBlockSchema: Template = {
  name: "herobackgrImg",
  label: "Page Intro: Full Background",
  ui: {
    previewSrc: "/blocks/hero-background-img.png",
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
