import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Template } from "tinacms";
import {
  PageBlocksTeamSectionsImg,
  PageBlocksTeamSectionsImgItems,
} from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { backgroundColorClasses, textColorClasses } from "../../util/colors";

export const TeamSectionsImg = ({
  data,
}: {
  data: PageBlocksTeamSectionsImg;
}) => {
  return (
    <section className={`py-10 px-6 md:px-12 lg:px-32 grid grid-cols-1 gap-14 items-center justify-center ${backgroundColorClasses[data.backgroundcolor ?? ""]} relative isolate`}>
      <div className="mx-auto grid gap-x-8 gap-y-20 lg:grid-cols-2">
        <div className="max-w-2xl">
          {data.title && (
            <h2
              data-tina-field={tinaField(data, "title")}
              className={`text-3xl font-bold tracking-tight ${textColorClasses[data.textColor ?? ""]} sm:text-4xl`}
            >
              <span className={``}>{data.title}</span>
            </h2>
          )}
          <div className="flex flex-row">
            {data.text.children[0] && (
              <div
                data-tina-field={tinaField(data, "text")}
                className={`mt-6 text-lg leading-8 ${textColorClasses[data.textColor ?? ""]}`}
              >
                <TinaMarkdown content={data.text.children} />
              </div>
            )}
          </div>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 grid-cols-2">
          {data.items && data.items.map(function (block, i) {
            return (
              <li key={i} className="flex flex-col items-center gap-y-6">
                <TeamSectionItem data={block || {}} textColor={textColorClasses[data.textColor ?? ""]} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export const TeamSectionItem = ({
  data,
  textColor,
}: {
  data: PageBlocksTeamSectionsImgItems;
  textColor: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-x-6">
      {data.image ? (
        <div
          // href={data.link ? data.link : "/"}
          data-tina-field={tinaField(data.image || null, "src")}
          className="relative w-full lg:w-36 aspect-square row-start-1 md:col-span-2 flex justify-center"
        >
          <Image
            fill
            className="object-contain rounded-full"
            alt={data.image.alt ? data.image.alt : "Image "}
            src={data.image.src || ""}
          />
        </div>
      ) : (
        <div
          data-tina-field={tinaField(data.image || {})}
          className="relative w-full lg:w-24 aspect-square row-start-1 md:col-span-2 flex justify-center"
        />
      )}
      <div>
        <h3
          data-tina-field={tinaField(data, "name")}
          className={`text-base font-semibold leading-7 tracking-tight ${textColor || null}`}
        >
          <span className={`bg-clip-text bg-gradient-to-r`}>
            {data.name || null}
          </span>
        </h3>
        <p className={`text-sm font-semibold leading-6 ${textColor || null}`}>
          {data.role}
        </p>
      </div>
    </div>
  );
};

const defaultTeamSectionsImg = {
  image: { src: "/uploads/llama-2.avif", alt: "Placeholder Image" },
  role: "Placeholder Role",
  name: "Name Holder",
};

export const teamSectionsImgBlockSchema: Template = {
  name: "teamSectionsImg",
  label: "Content Collection Preview: Team member highlights",
  ui: {
    previewSrc: "/blocks/team-section.png",
    defaultItem: {
      title: "This Text is Totally Awesome",
      image: { src: "/uploads/llama-2.avif", alt: "Placeholder Image" },
      text: {
        type: "root",
        children: [
          {
            type: "p",
            children: [
              {
                type: "text",
                text: "This is a paragraph of text. It is very long and has a lot of words in it. It is a very good paragraph.",
              },
            ],
          },
        ],
      },
      items: [
        defaultTeamSectionsImg,
        defaultTeamSectionsImg,
        defaultTeamSectionsImg,
      ],
    },
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      label: "Primary Body",
      name: "text",
      type: "rich-text",
    },
    {
      type: "object",
      label: "Team Members",
      name: "items",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item?.label,
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
          label: "Role",
          name: "role",
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
        {
          type: "string",
          label: "Link",
          name: "link",
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
