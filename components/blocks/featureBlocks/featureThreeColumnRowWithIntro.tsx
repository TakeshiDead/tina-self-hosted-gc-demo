import { Section } from "../../util/section";
import { Icon } from "../../util/icon";
import { Actions, actionSchema } from "../../util/actions";
import { iconSchema } from "../../util/icon";
import {
  PageBlocksFeatureThreeColumnRowWithIntro,
  PageBlocksFeatureThreeColumnRowWithIntroItems,
} from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import type { Template } from "tinacms";

export const FeatureThreeColumnRowWithIntro = ({
  data,
}: {
  data: PageBlocksFeatureThreeColumnRowWithIntro;
}) => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-32 bg-white">
      <div className="mx-auto">
        <div className="mx-auto max-w-2xl lg:text-center">
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
              className="mt-2 text-3xl font-bold tracking-tight break-words text-gray-900 sm:text-4xl"
            >
              {data.header}
            </p>
          )}
          {data.primarybody && (
            <p
              data-tina-field={tinaField(data, "primarybody")}
              className="mt-2 text-base leading-7 break-words text-gray-600"
            >
              {data.primarybody}
            </p>
          )}
        </div>
      </div>

      <div className="mx-auto mt-8 sm:mt-14 lg:mt-16">
        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {data.items &&
            data.items.map(function (block, i) {
              return <FeatureColumnItem key={i} data={block || {}} />;
            })}
        </div>
      </div>
    </section>
  );
};

export const FeatureColumnItem = ({
  data,
}: {
  data: PageBlocksFeatureThreeColumnRowWithIntroItems;
}) => {
  console.log(data, "data");
  return (
    <div data-tina-field={tinaField(data)} className="">
      <div className="mx-auto max-w-2xl md:max-w-none">
        <div className="flex max-w-xl grid-cols-1 gap-x-8 gap-y-16 md:max-w-none md:grid-cols-3">
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

const defaultFeatureColumn = {
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

export const featureThreeColumnRowWithIntroBlockSchema: Template = {
  name: "featureThreeColumnRowWithIntro",
  label: "Service Highlight: Three Column Row with Intro",
  ui: {
    previewSrc: "/blocks/featurewith3columns.png",
    defaultItem: {
      tagline: "Here's some text above the other text",
      header: "This Big Text is Totally Awesome",
      primarybody:
        "This is where you might talk about the feature, if this wasn't just filler text.",
      items: [defaultFeatureColumn, defaultFeatureColumn, defaultFeatureColumn],
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
          ...defaultFeatureColumn,
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
  ],
};
