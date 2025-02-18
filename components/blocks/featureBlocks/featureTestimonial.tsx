import * as React from "react";
import Image from "next/image";
import { Actions, actionSchema } from "../../util/actions";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import { PageBlocksFeatureTestimonial } from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export const FeatureTestimonial = ({
  data,
}: {
  data: PageBlocksFeatureTestimonial;
}) => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-32 bg-white">
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3 lg:items-start">
        <div className="lg:pt-4 lg:max-w-lg">
          {data.tagline && (
            <h2 data-tina-field={tinaField(data, "tagline")} className="">
              {data.tagline}
              {/* <span className="text-base font-semibold leading-7 text-indigo-600"></span> */}
            </h2>
          )}
          {data.headline && (
            <h1
              data-tina-field={tinaField(data, "headline")}
              className={`mt-2 text-3xl font-bold tracking-tight text-gray-900 text-pretty md:text-balance`}
            >
              {data.headline}
            </h1>
          )}
          {data.image && (
            <div
              data-tina-field={tinaField(data.image, "src")}
              className="block lg:hidden w-full my-6 aspect-[6/3] lg:aspect-[5/4] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 relative"
            >
              <Image
                fill
                className="object-cover rounded-xl"
                alt={data.image.alt ? data.image.alt : "Image"}
                src={data.image.src ?? ""}
              />
            </div>
          )}
          {data.text.children[0] && (
            <div
              data-tina-field={tinaField(data, "text")}
              className={`mt-6 text-lg leading-8 text-gray-600`}
            >
              <TinaMarkdown content={data.text.children} />
            </div>
          )}
          <div className="mt-8">
            {data.action && (
              <Actions
                actionStyle="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                containerStyle=""
                actions={data.action}
              />
            )}
          </div>
          <figure className="mt-12 lg:mt-16 border-l border-gray-200 pl-5 md:pl-8 text-gray-600">
            <blockquote className="text-base leading-7">
              {data.testimonialBody && (
                <div
                  data-tina-field={tinaField(data, "testimonialBody")}
                  className={``}
                >
                  <TinaMarkdown content={data.testimonialBody} />
                </div>
              )}
            </blockquote>
            <figcaption className="mt-6 flex gap-x-4 text-sm leading-6">
              {data.testimonialHeadshot && (
                <div
                  data-tina-field={tinaField(data.testimonialHeadshot, "src")}
                  className="relative h-8 aspect-square"
                >
                  <Image
                    fill
                    className="object-cover rounded-full"
                    alt={
                      data.testimonialHeadshot.alt
                        ? data.testimonialHeadshot.alt
                        : "Image"
                    }
                    src={data.testimonialHeadshot?.src ?? ""}
                  />
                </div>
              )}
              <div>
                {data.testimonialContext.children[0] && (
                  <div
                    data-tina-field={tinaField(data, "testimonialContext")}
                    className={`font-semibold text-gray-900`}
                  >
                    <TinaMarkdown content={data.testimonialContext.children} />
                  </div>
                )}
              </div>
            </figcaption>
          </figure>
        </div>
        {data.image && (
          <div
            data-tina-field={tinaField(data.image, "src")}
            className="hidden lg:block w-full lg:col-span-2 aspect-[6/3] lg:aspect-[4/2] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 relative"
          >
            <Image
              fill
              className="object-cover rounded-xl"
              alt={data.image.alt ? data.image.alt : "Image"}
              src={data.image.src ?? ""}
            />
          </div>
        )}
      </div>
    </section>
  );
};

const defaultFeatureTestimonial = {
  tagline: "Taglines are great for highlighting important information",
  headline: "Headline with an effective call to action",
  image: {
    src: "/uploads/Placeholders/dock.jpg",
    alt: "Showcase Image",
  },
  testimonialHeadshot: {
    src: "/uploads/Placeholders/dock.jpg",
    alt: "Hero Image",
  },
  action: [
    {
      label: "Action Label",
      type: "button",
      icon: true,
      link: "/",
    },
  ],
  text: {
    type: "root",
    children: [
      {
        type: "p",
        children: [
          {
            type: "text",
            text: "Use this space to describe the feature in detail. It's a great place to include a call to action.",
          },
        ],
      },
    ],
  },
  testimonialContext: {
    type: "root",
    children: [
      {
        type: "p",
        children: [
          {
            type: "text",
            text: "Use this line to describe the person who gave the testimonial or provide context for the quote.",
          },
        ],
      },
    ],
  },
  testimonialBody: {
    type: "root",
    children: [
      {
        type: "p",
        children: [
          {
            type: "text",
            text: "This is a testimonial about how great the service/product is!",
          },
        ],
      },
    ],
  },
};

export const featureTestimonialBlockSchema: Template = {
  name: "featureTestimonial",
  label: "Service Highlight: Service Testimonial",
  ui: {
    previewSrc: "/blocks/featuretestimonial.png",
    defaultItem: defaultFeatureTestimonial,
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
      label: "Testemonial Headshot",
      name: "testimonialHeadshot",
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
      type: "rich-text",
      label: "Name of the testimonial",
      name: "testimonialContext",
    },
    {
      label: "Testimonal Text",
      name: "testimonialBody",
      type: "rich-text",
    },
    {
      type: "object",
      label: "Image",
      name: "image",
      ui: {
        defaultItem: {
          image: "/uploads/Placeholders/dock.jpg",
        },
      },
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
