import * as React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import {
  PageBlocksContact_Multi_Location_Columns,
  PageBlocksContact_Multi_Location_ColumnsItems
} from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { textColorClasses } from "../../util/colors";

export const ContactMultiLocationColumns = ({
  data,
}: {
  data: PageBlocksContact_Multi_Location_Columns;
}) => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-32 bg-white">
          <div className="mx-auto max-w-2xl lg:mx-0">
            {data.headline && (
              <h2
                data-tina-field={tinaField(data, "headline")}
                className={`w-full relative	mb-10 text-5xl break-words font-extrabold tracking-normal leading-tight title-font`}
              >
                <span
                  className={`text-3xl font-bold tracking-tight text-gray-900 ${
                    data.color && textColorClasses[data.color]
                  }`}
                >
                  {data.headline}
                </span>
              </h2>
            )}
            {data.text.children[0] && (
              <div
                data-tina-field={tinaField(data, "text")}
                className={`mt-6 text-lg leading-8 break-words text-gray-600 ${
                  textColorClasses[data.color ?? 'default']
                }`}
              >
                <TinaMarkdown content={data.text.children} />
              </div>
            )}
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {data.items &&
              data.items.map(function (block, i) {
                return block && <ColumnItem key={i} data={block} />;
              })}
          </div>
    </section>
  );
};

export const ColumnItem = ({
  data,
}: {
  data: PageBlocksContact_Multi_Location_ColumnsItems;
}) => {
  return (
    <div
      data-tina-field={tinaField(data)}
      className=""
      style={{ flexBasis: "16rem" }}
    >
      <div className="">
        {data.location && (
          <h3
            data-tina-field={tinaField(data, "location")}
            className="border-l border-indigo-600 break-words pl-6 font-semibold text-gray-900"
          >
            {data.location}
          </h3>
        )}
        <address className="border-l border-gray-200 break-words pl-6 pt-2 not-italic text-gray-600">
          {data.address && (
            <p data-tina-field={tinaField(data, "address")}>{data.address}</p>
          )}
          {data.extraaddress && (
            <p data-tina-field={tinaField(data, "extraaddress")}>
              {data.extraaddress}
            </p>
          )}
        </address>
      </div>
    </div>
  );
};

export const contactMultiLocationColumnsBlockSchema: Template = {
  name: "contact_multi_location_columns",
  label: "Contact: Multi-Location Address Columns",
  ui: {
    previewSrc: "/blocks/contactsectionsimple.png",
    defaultItem: {
      headline: "Our offices",
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
      items: [
        {
          location: "New York",
          address: "123 Main Street\nNew York, NY 10001",
          extraaddress: "Suite 100",
        },
        {
          location: "Los Angeles",
          address: "456 Main Street\nLos Angeles, CA 90001",
          extraaddress: "Suite 200",
        },
        {
          location: "Chicago",
          address: "789 Main Street\nChicago, IL 60601",
          extraaddress: "Suite 300",
        },
        {
          location: "Miami",
          address: "1011 Main Street\nMiami, FL 33101",
          extraaddress: "Suite 400",
        },
      ],
    },
  },
  fields: [
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
      label: "Locations",
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
          label: "Location",
          name: "location",
        },
        {
          type: "string",
          label: "Address",
          name: "address",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          label: "Extra Address",
          name: "extraaddress",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "string",
      label: "Background Color",
      name: "color",
      options: [
        
      ],
    },
  ],
};
