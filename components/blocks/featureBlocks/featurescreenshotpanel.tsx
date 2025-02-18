import { Icon } from "../../util/icon";
import { iconSchema } from "../../util/icon";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import {
  PageBlocksFeaturescreenshotpanel,
  PageBlocksFeaturescreenshotpanelItems,
} from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import type { Template } from "tinacms";
import Image from "next/image";
import { Actions, actionSchema } from "../../util/actions";

export const FeatureScreenShotPanel = ({
  data,
}: {
  data: PageBlocksFeaturescreenshotpanel;
}) => {
  return (
    <section className="py-10 px-6 md:px-12 lg:px-32 bg-white overflow-hidden mx-auto">
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2 lg:items-start">
        <div className="">
          {data.tagline && (
            <h2
              data-tina-field={tinaField(data, "tagline")}
              className="text-base font-semibold leading-7 text-indigo-600"
            >
              {data.tagline}
              <span className="absolute w-full h-full left-0 top-0 rounded-full -z-1 bg-current opacity-7"></span>
            </h2>
          )}
          {data.headline && (
            <h1
              data-tina-field={tinaField(data, "headline")}
              className={`text-4xl font-bold tracking-tight leading-10 text-gray-900`}
            >
              <span
                className={`mt-2 text-3xl font-bold tracking-tight text-gray-900`}
              >
                {data.headline}
              </span>
            </h1>
          )}
          {data.image && (
            <div
              data-tina-field={tinaField(data.image, "src")}
              className=" lg:hidden relative aspect-[3/5] md:aspect-video retina:aspect-[3/4] lg:aspect-[11/12] my-4 rounded-3xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 "
            >
              <Image
                className="object-cover rounded-3xl shadow-2xl ring-1 ring-gray-900/10"
                alt={data.image.alt ? data.image.alt : "Image"}
                src={data.image.src ?? ""}
                fill={true}
              />
            </div>
          )}
          {data.text && (
            <div
              data-tina-field={tinaField(data, "text")}
              className={`mt-6 text-lg leading-8 text-gray-600`}
            >
              <TinaMarkdown content={data.text} />
            </div>
          )}
          <div className="flex flex-col md:flex-row lg:flex-col lg:items-start md:flex-wrap">
            {data.items &&
              data.items.map(function (block, i) {
                return <FeatureScreenShotPanelItem key={i} data={block || {}} />;
              })}
          </div>
        </div>
        {data.image && (
          <div
            data-tina-field={tinaField(data.image, "src")}
            className="hidden lg:block relative aspect-[3/5] md:aspect-video retina:aspect-[3/4] lg:aspect-[11/12] m-2 rounded-3xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 "
          >
            <Image
              className="object-cover rounded-3xl shadow-2xl ring-1 ring-gray-900/10"
              alt={data.image.alt ? data.image.alt : "Image"}
              src={data.image.src ?? ""}
              fill={true}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export const FeatureScreenShotPanelItem = ({
  data,
}: {
  data: PageBlocksFeaturescreenshotpanelItems;
}) => {
  return (
    <div
      data-tina-field={tinaField(data)}
      className="my-6 flex-1 basis-[16rem] flex flex-col gap-6 text-center items-center lg:items-start lg:text-left"
    >
      <div className="flex flex-col items-center lg:items-start">
        <div className="mb-4 flex rounded-lg bg-indigo-600">
          {data.icon && (
            <Icon
              tinaField={tinaField(data, "icon")}
              data={{ size: "large", ...data.icon }}
            />
          )}
        </div>
        {data.title && (
          <h3
            data-tina-field={tinaField(data, "title")}
            className="text-base font-semibold leading-7 text-gray-900"
          >
            {data.title}
          </h3>
        )}
      </div>
      {data.text && (
        <p
          data-tina-field={tinaField(data, "text")}
          className="mt-1 text-base leading-7 text-gray-600"
        >
          {data.text}
        </p>
      )}
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
  );
};

const defaultFeaturescreenshot = {
  title: "Here's Another Feature",
  text: "This is where you might talk about the feature, if this wasn't just filler text.",
  icon: {
    color: "blue",
    style: "float",
    name: "BiAward",
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

const defaultUI = {
  headline: "A Headline to capture attention",
  tagline: "A tagline to provide context",
  text: {
    type: "root",
    children: [
      {
        type: "p",
        children: [
          {
            type: "text",
            text: "A paragraph to provide more context about the feature.",
          },
        ],
      },
    ],
  },
  image: {
    src: "/uploads/Placeholders/dock.jpg",
    alt: "Screenshot of feature",
  },
  items: [defaultFeaturescreenshot, defaultFeaturescreenshot],
};

export const featurescreenshotpanelBlockSchema: Template = {
  name: "featurescreenshotpanel",
  label: "Service Highlight: Screenshot and Key Points",
  ui: {
    previewSrc: "/blocks/feature-screenshot-panel.png",
    defaultItem: defaultUI,
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
        defaultItem: {
          ...defaultFeaturescreenshot,
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
