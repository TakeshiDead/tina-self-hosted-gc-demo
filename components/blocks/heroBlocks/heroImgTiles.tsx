import * as React from "react";
import { Actions, actionSchema } from "../../util/actions";
import { Container } from "../../util/container";
import { Section } from "../../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import { PageBlocksHeroimgtiles } from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import Image from "next/image";

export const HeroImgTiles = ({ data }: { data: PageBlocksHeroimgtiles }) => {
  return (
    <section className=" py-10 lg:pb-0 lg:pt-10 relative isolate grid grid-cols-1 gap-14 items-center justify-center bg-white">
      <div className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        aria-hidden="true"
      >
        <div
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
          }}
        />
      </div>
      <div className="px-6 md:px-12 lg:px-32 md:max-w-xl lg:max-w-6xl lg:shrink-0 overflow-hidden">
        {data.headline && (
          <h1
            data-tina-field={tinaField(data, "headline")}
            className={`text-4xl font-bold text-pretty md:text-balance tracking-tight text-gray-900`}
          >
            <span className={`bg-clip-text text-black bg-gradient-to-r`}>
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
        <div className="mt-10 flex items-center gap-x-6">
          {data.action && (
            <Actions
              actionStyle="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              containerStyle=""
              actions={data.action}
            />
          )}
        </div>
      </div>
      <div className="pl-14 md:pl-44 lg:px-32 lg:pb-10 -mt-28 md:-mt-40 lg:-mt-64 flex justify-start md:justify-end gap-8 overflow-hidden">
        <div className=" w-44 pt-64 md:pt-44 lg:pt-36 xl:pt-80 ml-0 md:ml-auto flex-none space-y-8 lg:order-last xl:order-none">
          <div className="relative">
            {data.firstimage && (
              <div
                data-tina-field={tinaField(data.firstimage, "src")}
                className="relative row-start-1 md:col-span-2 flex justify-center"
              >
                <Image
                  className=" shadow-2xl ring-1 ring-gray-900/10 relative z-10 w-full max-w-xs rounded-lg md:max-w-none h-auto"
                  width={2432}
                  height={1442}
                  alt={data.firstimage.alt ? data.firstimage.alt : "Image"}
                  src={data.firstimage.src ?? ""}
                />
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div>
        <div className="mr-0 md:mr-auto lg:mr-0 w-44 flex-none space-y-8 pt-24 md:pt-24 lg:pt-36">
          <div className="relative">
            {data.secondimage && (
              <div
                data-tina-field={tinaField(data.secondimage, "src")}
                className="relative row-start-1 md:col-span-2 flex justify-center"
              >
                <Image
                  className=" shadow-2xl ring-1 ring-gray-900/10 relative z-10 w-full max-w-xs rounded-lg md:max-w-none h-auto"
                  width={2432}
                  height={1442}
                  alt={data.secondimage.alt ? data.secondimage.alt : "Image"}
                  src={data.secondimage.src ?? ""}
                />
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div className="relative">
            {data.thirdimage && (
              <div
                data-tina-field={tinaField(data.thirdimage, "src")}
                className="relative row-start-1 md:col-span-2 flex justify-center"
              >
                <Image
                  className=" shadow-2xl ring-1 ring-gray-900/10 relative z-10 w-full max-w-xs rounded-lg md:max-w-none h-auto"
                  width={2432}
                  height={1442}
                  alt={data.thirdimage.alt ? data.thirdimage.alt : "Image"}
                  src={data.thirdimage.src ?? ""}
                />
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div>
        <div className="w-44 flex-none space-y-8 ">
          <div className="relative">
            {data.fourthimage && (
              <div
                data-tina-field={tinaField(data.fourthimage, "src")}
                className="relative row-start-1 md:col-span-2 flex justify-center"
              >
                <Image
                  className=" shadow-2xl ring-1 ring-gray-900/10 relative z-10 w-full max-w-xs rounded-lg md:max-w-none h-auto"
                  width={2432}
                  height={1442}
                  alt={data.fourthimage.alt ? data.fourthimage.alt : "Image"}
                  src={data.fourthimage.src ?? ""}
                />
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div className="relative">
            {data.fifthimage && (
              <div
                data-tina-field={tinaField(data.fifthimage, "src")}
                className="relative row-start-1 md:col-span-2 flex justify-center"
              >
                <Image
                  className=" shadow-2xl ring-1 ring-gray-900/10 relative z-10 w-full max-w-xs rounded-lg md:max-w-none h-auto"
                  width={2432}
                  height={1442}
                  alt={data.fifthimage.alt ? data.fifthimage.alt : "Image"}
                  src={data.fifthimage.src ?? ""}
                />
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div>
      </div>
    </section>
  );
};
export const defaultAction = {
  label: "Action Label",
  type: "button",
  icon: true,
  link: "/",
};

const defaultItem = {
  tagline: "Here's some text above the other text",
  headline: "This Big Text is Totally Awesome",
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
  image: { src: "/uploads/llama-2.avif", alt: "Placeholder Image" },
  firstimage: { src: "/uploads/llama-2.avif", alt: "Placeholder Image" },
  secondimage: { src: "/uploads/llama-2.avif", alt: "Placeholder Image" },
  thirdimage: { src: "/uploads/llama-2.avif", alt: "Placeholder Image" },
  fourthimage: { src: "/uploads/llama-2.avif", alt: "Placeholder Image" },
  fifthimage: { src: "/uploads/llama-2.avif", alt: "Placeholder Image" },
  action: [defaultAction, defaultAction],
}


export const heroimgtilesBlockSchema: Template = {
  name: "heroimgtiles",
  label: "Page Intro: Tiled Preview Images",
  ui: {
    previewSrc: "/blocks/hero-img-tiles.png",
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
      label: "First Image",
      name: "firstimage",
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
      type: "object",
      label: "Second Image",
      name: "secondimage",
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
      type: "object",
      label: "Third Image",
      name: "thirdimage",
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
      type: "object",
      label: "Fourth Image",
      name: "fourthimage",
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
      type: "object",
      label: " Fifth Image",
      name: "fifthimage",
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
