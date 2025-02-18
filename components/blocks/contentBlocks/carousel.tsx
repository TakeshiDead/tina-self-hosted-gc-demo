import { Icon } from "../../util/icon";
import { iconSchema } from "../../util/icon";
import { PageBlocksCarousel } from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import type { Template } from "tinacms";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export const Carousel = ({ data }: { data: PageBlocksCarousel; }) => {
  return (
    <div className="w-full py-12 px-6 col-span-full flex flex-col items-center justify-center bg-white">
      {data.mainheader && (
        <p
          data-tina-field={tinaField(data, "mainheader")}
          className="lg:max-w-[60vw] text-3xl font-bold text-center text-gray-900"
        >
          {data.mainheader}
        </p>
      )}
      {data.maintext && (
        <p
          data-tina-field={tinaField(data, "maintext")}
          className="lg:max-w-[60vw] text-lg text-center text-gray-600"
        >
          {data.maintext}
        </p>
      )}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="w-[80vw] mt-8"
      >
        {data.items && data.items.length > 0 && data.items.map(function (block, i) {
          return (
            <SwiperSlide
              key={i}
              data-tina-field={tinaField(data)}
              className="h-auto px-4 lg:px-32 py-6 mb-10 flex-col md:flex-row divide-y-2 md:divide-y-0 md:divide-x-2 "
            >
              <article
                data-tina-field={tinaField(data)}
                className="flex relative items-center justify-center flex-col gap-8 isolate lg:flex-row"
              >
                <div className="relative w-full lg:w-auto h-full">
                  {block?.image && (
                    <div
                      data-tina-field={tinaField(block.image, "src")}
                      className="relative w-full lg:w-[20vw] aspect-[16/9] lg:aspect-square lg:shrink-0"
                    >
                      <Image
                        className="object-contain rounded-2xl bg-gray-50"
                        alt={block.image.alt ? block.image.alt : "Image "}
                        src={block.image.src || ""}
                        fill={true}
                      />
                    </div>
                  )}
                  <div className="inset-0 absolute rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center text-xs gap-x-4">
                    {block && block.date && (
                      <p
                        data-tina-field={tinaField(block, "date")}
                        className="text-gray-500"
                      >
                        {block.date}
                      </p>
                    )}
                    {/* <a
                                href={post.category.href}
                                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                              >
                                {post.category.title}
                              </a> */}
                  </div>
                  <div className="relative group">
                    {block && block.header && (
                      <h3
                        data-tina-field={tinaField(block, "header")}
                        className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
                      >
                        <span className="inset-0 absolute" />
                        {block.header}
                      </h3>
                    )}
                    {block && block.subheader && (
                      <p
                        data-tina-field={tinaField(block, "subheader")}
                        className="mt-5 text-sm leading-6 text-gray-600"
                      >
                        {block.subheader}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
};

const defaultoffsetFeature = {
  header: "Here's Another Feature",
  subheader: "This is where you might talk about the feature, if this wasn't just filler text.",
  image: {
    src: "/blocks/carousel.png",
    alt: "A picture of a feature",
  },
  icon: {
    color: "blue",
    style: "float",
    name: "BiAward",
  },
};

export const carouselBlockSchema: Template = {
  name: "carousel",
  label: "Content Collection Preview: Carousel",
  ui: {
    previewSrc: "/blocks/carousel.png",
    defaultItem: {
      mainheader: "This is where you might talk about the feature, if this wasn't just filler headline",
      maintext: "This is where you might talk about the feature, if this wasn't just filler text.",

      items: [defaultoffsetFeature, defaultoffsetFeature, defaultoffsetFeature],
    },
  },
  fields: [
    {
      type: "string",
      label: "Main Header",
      name: "mainheader",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      label: "Main Text",
      name: "maintext",
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
            label: item?.header,
          };
        },
        defaultItem: {
          ...defaultoffsetFeature,
        },
      },
      fields: [
        iconSchema,
        {
          type: "string",
          label: "Header",
          name: "header",
        },
        {
          type: "string",
          label: "Subheader",
          name: "subheader",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          label: "Date",
          name: "date",
        },
        {
          type: "string",
          label: "Date Time",
          name: "datetime",
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
