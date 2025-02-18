import * as React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import { PageBlocksContactInfoAndGoogleMaps } from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import MapContainer from "../../util/map";
import Image from "next/image";

export const ContactInfoAndGoogleMaps = ({
  data,
}: {
  data: PageBlocksContactInfoAndGoogleMaps;
}) => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-32 bg-white">
      <div className="h-auto flex flex-col md:flex-row divide-y-2 bg-white">
        <div className="flex flex-col items-center justify-center py-6 md:w-1/2 md:px-12 md:items-start gap-y-5">
          {data.headline && (
            <h1 data-tina-field={tinaField(data, "headline")} className={``}>
              <span
                className={
                  "mt-8 md:mt-24 text-4xl font-bold tracking-tight text-black"
                }
              >
                {data.headline}
              </span>
            </h1>
          )}
          {data.text && (
            <div
              data-tina-field={tinaField(data, "text")}
              className={`prose prose-lg mx-auto md:mx-0 mb-10`}
            >
              <TinaMarkdown content={data.text} />
              <div className="relative w-full h-[30vh] md:h-[20vh] mt-8">
                <MapContainer />
              </div>
            </div>
          )}
        </div>
        <div className="md:w-1/2">
          <div className="flex flex-col items-center md:items-start gap-y-5">
            {data.image && (
              <div
                data-tina-field={tinaField(data.image, "src")}
                className="relative row-start-1 md:col-span-2 flex justify-center"
              >
                <Image
                  className="absolute w-full rounded-lg max-w-xs md:max-w-none h-auto blur-2xl brightness-150 contrast-[0.9] dark:brightness-150 saturate-200 opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-hard-light"
                  alt={data.image.alt ? data.image.alt : "Image"}
                  fill
                  src={data.image.src ?? ""}
                  aria-hidden="true"
                />
                <Image
                  className="relative z-10 w-full max-w-xs rounded-lg md:max-w-none h-auto"
                  width={1000}
                  height={1000}
                  alt={data.image.alt ? data.image.alt : "Image"}
                  src={data.image.src ?? ""}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export const contactInfoAndGoogleMapsBlockSchema: Template = {
  name: "contactInfoAndGoogleMaps",
  label: "Contact: Google Maps and Contact Info",
  ui: {
    previewSrc: "/blocks/heroSplitFull.png",
    defaultItem: {
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
    },
  },
  fields: [
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
