import * as React from "react";
import { Section } from "../../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import {
  PageBlocksProductSquareImg,
  PageBlocksProductSquareImgItems,
} from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import Image from "next/image";

export const ContentGrid2x2 = ({
  data,
}: {
  data: PageBlocksProductSquareImg;
}) => {
  return (
    <section className="bg-white">
      <div className="pt-12 px-8 md:px-12 lg:px-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          {data.tagline && (
            <h3
              data-tina-field={tinaField(data, "tagline")}
              className="tracking-wide title-font z-20"
            >
              <span
                className={`bg-clip-text text-transparent bg-gradient-to-r`}
              ></span>
              {data.tagline}
              <span className="absolute w-full h-full left-0 top-0 rounded-full -z-1 bg-current opacity-7"></span>
            </h3>
          )}
          {data.headline && (
            <h2
              data-tina-field={tinaField(data, "headline")}
              className={`w-full relative	mb-4 lg:mb-10 text-3xl font-extrabold tracking-normal leading-tight title-font`}
            >
              <span
                className={`text-3xl font-bold tracking-tight leading-tight text-gray-900`}
              >
                {data.headline}
              </span>
            </h2>
          )}
          {/* // TODO: Add dropdown for when text exceeds certain amount of characters */}
          {data.text && (
            <div
              data-tina-field={tinaField(data, "text")}
              className={`text-lg leading-8 text-gray-600`}
            >
              <TinaMarkdown content={data.text} />
            </div>
          )}
        </div>
        <div className="mx-auto mt-8 lg:mt-12 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 md:grid-cols-2 gap-y-16 lg:mx-0 lg:max-w-none">
          {data.items &&
            data.items.map(function (block, i) {
              return <ContentGrid2x2Item key={i} data={block || {}} />;
            })}
        </div>
      </div>
    </section>
  );
};
export const ContentGrid2x2Item = ({
  data,
}: {
  data: PageBlocksProductSquareImgItems;
}) => {
  return (
    <div
      data-tina-field={tinaField(data)}
      className=""
      style={{ flexBasis: "16rem" }}
    >
      <div className="flex flex-col gap-y-2">
        {data.image && (
          <div
            data-tina-field={tinaField(data.image, "src")}
            className="relative w-full aspect-square lg:aspect-[4/3] rounded-lg bg-gray-100"
          >
            <Image
              className="object-cover object-center rounded-lg"
              fill={true}
              alt={data.image.alt ? data.image.alt : "Image"}
              src={data.image.src || ""}
            />
          </div>
        )}
        <div className="mt-2 flex flex-row flex-wrap gap-4">
        {data.name && (
          <h2
            data-tina-field={tinaField(data, "name")}
            className="text-lg font-semibold text-gray-900"
          >
            {data.name}
          </h2>
        )}
        {data.title && (
          <h3
            data-tina-field={tinaField(data, "title")}
            className="text-lg text-gray-700"
          >
            {data.title}
          </h3>
        )}
        </div>
        <address className="pt-2 not-italic text-gray-600">
          {data.text && (
            <p data-tina-field={tinaField(data, "text")}>{data.text}</p>
          )}
          {data.text && (
            <p data-tina-field={tinaField(data, "text2")}>{data.text2}</p>
          )}
        </address>
      </div>
    </div>
  );
};
export const defaultProductItem = {
  label: "Product Item",
  name: "productItem",
  image: { src: "/uploads/llama-2.avif", alt: "Placeholder Image" },
  title: "Product Item",
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
  text2: {
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
};

export const contentGrid2x2BlockSchema: Template = {
  name: "productSquareImg",
  label: "Content Collection Preview: 2x2 Grid",
  ui: {
    previewSrc: "/blocks/imgGrind.png",
    defaultItem: {
      tagline: "Here's some text above the other text",
      headline: "This Big Text is Totally Awesome",
      text: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
      items: [defaultProductItem, defaultProductItem, defaultProductItem],
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
      label: "Primary Body",
      name: "text",
      type: "rich-text",
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
      },
      fields: [
        {
          type: "string",
          label: "Name",
          name: "name",
        },
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
        {
          type: "string",
          label: "Text",
          name: "text2",
          ui: {
            component: "textarea",
          },
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
    },
  ],
};
