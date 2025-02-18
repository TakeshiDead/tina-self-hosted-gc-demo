import * as React from "react";
import { Actions,actionSchema, defaultLink} from "../../util/actions";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Template } from "tinacms";
import { PageBlocksHero } from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import Image from "next/image";

export const Hero = ({ data }: { data: PageBlocksHero }) => {
  return (
    <section
      className="py-12 px-6 md:px-12 lg:px-32 grid grid-cols-1 md:grid-cols-5 gap-14 items-center justify-center bg-white"
    >
      <div className="row-start-2 md:row-start-1 md:col-span-3 text-center md:text-left">
        {data.tagline && (
          <h2
            data-tina-field={tinaField(data, "tagline")}
            className="relative inline-block px-3 py-1 mb-8 text-md font-bold tracking-wide title-font z-20"
          >
            {data.tagline}
            <span className="absolute w-full h-full left-0 top-0 rounded-full -z-1 bg-current opacity-7"></span>
          </h2>
        )}
        {data.headline && (
          <h3
            data-tina-field={tinaField(data, "headline")}
            className={`w-full relative	mb-10 text-5xl font-extrabold tracking-normal leading-tight title-font`}
          >
            <span
              className={` `}
            >
              {data.headline}
            </span>
          </h3>
        )}
        {data.text && (
          <div
            data-tina-field={tinaField(data, "text")}
            className={`prose prose-lg mx-auto md:mx-0 mb-10 $`}
          >
            <TinaMarkdown content={data.text} />
          </div>
        )}
        {data.action && (
          <Actions
            actionStyle="justify-center md:justify-start py-2"
            containerStyle=""
            actions={data.action}
          />
        )}

      </div>
      {data.image && (
        <div
          data-tina-field={tinaField(data.image, "src")}
          className="relative w-full aspect-[5/3] md:aspect-[6/11] lg:aspect-[5/4] row-start-1 md:col-span-3"
        >
          <Image
            className="object-cover rounded-lg blur-2xl brightness-150 contrast-[0.9] dark:brightness-150 saturate-200 opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-hard-light"
            src={data.image.src ?? ""}
            fill={true}
            alt={data.image.alt ? data.image.alt : "Image"}
          />
          <Image
            className="object-cover z-10 rounded-lg"
            fill={true}
            alt={data.image.alt ? data.image.alt : "Image"}
            src={data.image.src ?? ""}
          />

        </div>
      )}
    </section>
  );
};

export const heroBlockSchema: Template = {
  name: "hero",
  label: "Page Intro: Default",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      tagline: "Here's some text above the other text",
      headline: "This Big Text is Totally Awesome",
      action: [defaultLink],
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
      
      image: {
        src: "/uploads/Placeholders/dock.jpg",
        alt: "Hero Image",
      },
    },
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
      label: "Text",
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
