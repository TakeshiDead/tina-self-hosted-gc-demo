import * as React from "react";
import { Actions, actionSchema, defaultLink } from "../../util/actions";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import { PageBlocksHerovideo } from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export const HeroVideo = ({ data }: { data: PageBlocksHerovideo }) => {
  return (
    <section className="relative py-12 lg:pb-16 px-6 md:px-12 lg:px-32 overflow-hidden bg-white isolate">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 md:-mr-[52vw] w-[200%] origin-top-right skew-x-[-20deg] lg:skew-x-[-30deg] shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 lg:-mr-96 bg-docker-blue"
          aria-hidden="true"
        />
        <div className="flex flex-col lg:flex-row lg:flex-nowrap lg:justify-between max-w-2xl lg:max-w-none mx-auto lg:gap-y-0 lg:gap-x-8">
          <div className="flex flex-col">
          <div className="flex">
            {data.tagline && (
              <h2
                data-tina-field={tinaField(data, "tagline")}
                className="relative inline-block px-3 py-1 text-md font-bold tracking-wide title-font z-20"
              >
                {data.tagline}
                <span className="absolute w-full h-full left-0 top-0 rounded-full -z-1 bg-current opacity-7"></span>
              </h2>
            )}
          </div>
          {data.headline && (
            <h1
              data-tina-field={tinaField(data, "headline")}
              className={`mt-4 order-1 max-w-2xl retina:max-w-xl lg:max-w-3xl text-3xl retina:text-4xl dtw:text-4xl lg:text-5xl font-bold text-pretty tracking-tight leading-tight text-white`}
            >
              <span
                className={`bg-clip-text text-transparent text-white bg-gradient-to-r`}
              >
                {data.headline}
              </span>
            </h1>
          )}
          <div className="order-3 md:order-2 mt-6 mb-[12vh] md:mb-0 max-w-xl lg:mt-0 retina:pr-4">
            {data.text && (
              <div
                data-tina-field={tinaField(data, "text")}
                className={`leading-8 text-white md:text-lg lg:text-xl text-pretty`}
              >
                <TinaMarkdown content={data.text} />
              </div>
            )}
            {data.action && (
              <Actions
                actionStyle="justify-center md:justify-start py-4"
                containerStyle=""
                actions={data.action}
              />
            )}
          </div>
          </div>
          <div className="w-full lg:w-[40vw] z-20 aspect-video mt-10 md:mt-4 lg:mt-32 order-2 md:order-3 object-cover rounded-2xl">
            {data.video && (
              <div
                data-tina-field={tinaField(data.video, "src")}
                className="w-full"
              >
                <video
                  className="object-cover w-full shadow-xl aspect-video rounded-2xl"
                  poster={data.video.poster ?? ""}
                  controlsList="nodownload"
                  controls
                >
                  <source src={data.video.src ?? ""} type="video/mp4" />
                </video>
              </div>
            )}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 -z-10 bg-gradient-to-t from-white" />
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
  video: {
    src: "/blocks/hero-video.mp4",
    poster: "/uploads/Placeholders/dock.jpg",
    alt: "Video",
  },
};

export const heroVideoBlockSchema: Template = {
  name: "herovideo",
  label: "Page Intro: Video Highlight",
  ui: {
    previewSrc: "/blocks/sectionvideo.png",
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
      label: "Video",
      name: "video",
      fields: [
        {
          name: "src",
          label: "Video URL",
          type: "string",
        },
        {
          name: "poster",
          label: "Poster Image",
          type: "string",
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
