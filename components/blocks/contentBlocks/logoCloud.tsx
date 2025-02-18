import Image from "next/image";
import Link from "next/link";
import {
  PageBlocksLogoCloud,
  PageBlocksLogoCloudItems,
} from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import type { Template } from "tinacms";

export const LogoCloud = ({ data }: { data: PageBlocksLogoCloud }) => {
  return (
    <section className="w-full py-12 px-6 md:px-12 lg:px-32 col-span-full flex flex-col items-center justify-center bg-white">
      <div className="my-4 flex flex-col items-center justify-center gap-y-2">
        <h1
          data-tina-field={tinaField(data, "headline")}
          className="text-center text-4xl font-bold leading-8 text-gray-900"
        >
          {data.headline}
        </h1>
        <p
          data-tina-field={tinaField(data, "bodyCopy")}
          className="mt-2 text-center text-base text-gray-600"
        >
          {data.bodyCopy}
        </p>
      </div>
      <div className="w-full grid grid-cols-2 gap-4 md:gap-8 lg:gap-12 md:grid-cols-3">
        {data.items &&
          data.items.map(function (block, i) {
            return block && <LogoCloudItem key={i} data={block} />;
          })}
      </div>
    </section>
  );
};

export const LogoCloudItem = ({ data }: { data: PageBlocksLogoCloudItems }) => {
  return (
    <Link
      data-tina-field={tinaField(data)}
      href={data.link || "#"}
      className="w-full aspect-[2/1] relative"
      target="_blank"
    >
      <Image
        className="object-contain hover:scale-105 transition duration-300 ease-in-out"
        src={
          data.imageSrc
            ? data.imageSrc
            : "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
        }
        alt={data.alt ? data.alt : "Logo"}
        sizes={"100%"}
        priority={false}
        fill
      />
    </Link>
  );
};

const defaultoffsetFeature = {
  label: "Logo Label",
  title: "Logo Link",
alt: "Logo Image",
  image: {
    src: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
    alt: "Logo",
  },
};

export const logoCloudBlockSchema: Template = {
  name: "logoCloud",
  label: "Content Collection Preview: Logo Cloud",
  ui: {
    previewSrc: "/blocks/highlight.png",
    defaultItem: {
      headline: " Headline",
      bodyCopy: "Here will go the body text.",
      items: [defaultoffsetFeature, defaultoffsetFeature, defaultoffsetFeature],
    },
  },
  fields: [
    {
      type: "string",
      label: "Headline",
      name: "headline",
    },
    {
      type: "string",
      label: "Primary Body",
      name: "bodyCopy",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      label: "Logos",
      name: "items",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item?.label,
          };
        },
        defaultItem: {
          ...defaultoffsetFeature,
        },
      },
      fields: [
        {
          type: "image",
          label: "Logo Image",
          name: "imageSrc",
        },
        {
          type: "string",
          label: "Logo Label",
          name: "label",
        },
        {
          type: "string",
          label: "Logo Link",
          name: "link",
        },
        {
          type: "string",
          label: "Alt Text",
          name: "alt",
        },
      ],
    },
  ],
};
