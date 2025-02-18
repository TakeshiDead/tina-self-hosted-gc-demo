import { Section } from "../../util/section";
import { Icon } from "../../util/icon";
import { iconSchema } from "../../util/icon";
import { PageBlocksFeatureShowcaseImageWithKeyFeatures } from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import type { Template } from "tinacms";
import Image from "next/image";
import { Actions, actionSchema } from "../../util/actions";

export const FeatureShowCaseImageWithKeyFeatures = ({
  data,
}: {
  data: PageBlocksFeatureShowcaseImageWithKeyFeatures;
}) => {
  return (
    <section className="py-10 px-6 md:px-12 lg:px-32 flex flex-col bg-white">
      {data.tagline && (
        <h2
          data-tina-field={tinaField(data, "tagline")}
          className="text-base font-semibold break-words leading-7 text-indigo-600"
        >
          {data.tagline}
          <span className="absolute w-full h-full left-0 top-0 rounded-full -z-1 bg-current opacity-7"></span>
        </h2>
      )}
      {data.header && (
        <p
          data-tina-field={tinaField(data, "header")}
          className="mt-2 text-3xl font-bold text-pretty md:text-balance tracking-tight break-words text-gray-900 sm:text-4xl"
        >
          {data.header}
        </p>
      )}
      {data.primarybody && (
        <p
          data-tina-field={tinaField(data, "primarybody")}
          className="mt-6 text-lg text-pretty leading-8 break-words text-gray-600"
        >
          {data.primarybody}
        </p>
      )}
      <div className="relative overflow-hidden pt-12">
        {data.image && (
          <div
            data-tina-field={tinaField(data.image, "src")}
            className="relative w-full aspect-video flex items-start lg:justify-end lg:order-first "
          >
            <Image
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10 object-cover"
              fill
              alt={data.image.alt || ""}
              src={data.image.src ?? ""}
            />
          </div>
        )}
        <div className="relative" aria-hidden="true">
          <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
        </div>
      </div>
      <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none sm:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
        {data.items &&
          data.items.map(function (block, i) {
            return (
              <FeatureShowCaseImageWithKeyFeaturesItem key={i} data={block} />
            );
          })}
      </div>
    </section>
  );
};

export const FeatureShowCaseImageWithKeyFeaturesItem = ({
  data,
}: {
  data: any;
}) => {
  return (
    <div data-tina-field={tinaField(data)} className="">
      <div className="mx-auto max-w-2xl sm:mt-8 lg:mt-10 lg:max-w-none">
        <div className="flex max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col">
            <div className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
              {data.icon && (
                <Icon
                  tinaField={tinaField(data, "icon")}
                  data={{ size: "large", ...data.icon }}
                />
              )}
              {data.title && (
                <h3
                  data-tina-field={tinaField(data, "title")}
                  className="flex items-center gap-x-3 break-words text-base font-semibold leading-7 text-gray-900"
                >
                  {data.title}
                </h3>
              )}
            </div>
            <div className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
              {data.text && (
                <p
                  data-tina-field={tinaField(data, "text")}
                  className="flex-auto break-words"
                >
                  {data.text}
                </p>
              )}
            </div>
            <div className="flex flex-row flex-wrap mt-2">
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
    </div>
  );
};

const defaultFeatureLargeImg = {
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

export const featureShowcaseImageWithKeyFeaturesBlockSchema: Template = {
  name: "featureShowcaseImageWithKeyFeatures",
  label: "Service Highlight: Showcase Image with Key Features",
  ui: {
    previewSrc: "/blocks/feature-large-img.png",
    defaultItem: {
      tagline: "Catch people's attention with a tagline",
      header: "This Big Text is a Great place for a Header",
      primarybody:
        "This is where you might talk about the feature in a little more detail, if this wasn't just filler text.",
      image: {
        src: "/uploads/Placeholders/dock.jpg",
        alt: "Feature Image",
      },
      items: [
        defaultFeatureLargeImg,
        defaultFeatureLargeImg,
        defaultFeatureLargeImg,
      ],
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
      label: "Header",
      name: "header",
      ui: {
        component: "textarea",
      },
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
          ...defaultFeatureLargeImg,
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
