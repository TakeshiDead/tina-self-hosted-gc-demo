import * as React from "react";
import { Actions } from "../../util/actions";
import { Container } from "../../util/container";
import { Section } from "../../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import { PageBlocksSimplehero } from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export const SimpleHero = ({ data }: { data: PageBlocksSimplehero }) => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-32 bg-white">
      <div
        className="grid grid-cols-1 gap-14 items-center justify-center"
      >
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-12 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                {data.tagline && (
                  <h2
                    data-tina-field={tinaField(data, "tagline")}
                    className="tracking-wide title-font z-20"
                  >
                    {data.tagline}
                    <span className="absolute w-full h-full left-0 top-0 rounded-full text-black -z-1 bg-current opacity-7"></span>
                  </h2>
                )}
              </div>
            </div>
            <div className="text-center">
              {data.headline && (
                <h1
                  data-tina-field={tinaField(data, "headline")}
                  className={`text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl`}
                >
                  <span
                    className={`bg-clip-text text-black bg-gradient-to-r `}
                  >
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
                {data.actions && (
                  <Actions
                    actionStyle="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    containerStyle=""


                    actions={data.actions}
                  />
                )}
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
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
}

export const simpleheroBlockSchema: Template = {
  name: "simplehero",
  label: "Hero:Simple Centered",
  ui: {
    previewSrc: "/blocks/simple-hero.png",
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
      actions: [defaultAction],
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
      label: "Actions",
      name: "actions",
      type: "object",
      list: true,
      ui: {
        defaultItem: {
          label: "Action Label",
          type: "button",
          icon: true,
          link: "/",
        },
        itemProps: (item) => ({ label: item.label }),
      },
      fields: [
        {
          label: "Label",
          name: "label",
          type: "string",
        },
        {
          label: "Type",
          name: "type",
          type: "string",
          options: [
            { label: "Button", value: "button" },
            { label: "Link", value: "link" },
            { label: "File", value: "file" }
          ],
        },
        {
          label: "Icon",
          name: "icon",
          type: "boolean",
        },
        {
          label: "Link",
          name: "link",
          type: "string",
        },
      ],
    },
  ],
};
