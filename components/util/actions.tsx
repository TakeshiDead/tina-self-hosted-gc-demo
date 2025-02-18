import Link from "next/link";
import * as React from "react";
import { tinaField } from "tinacms/dist/react";
import { Icon } from "./icon";

export const Actions = ({
  containerStyle = "",
  actionStyle = "",
  actions,
}: {
  actionStyle?: string;
  containerStyle: string;
  actions: any;
}) => {
  return (
    <div
      className={`flex flex-wrap items-center gap-y-4 gap-x-6 ${containerStyle}`}
    >
      {actions &&
        actions.map(function (action, index) {
          let element = null as any;
          switch (action.type) {
            case "button":
              element = (
                <button
                  key={index}
                  data-tina-field={tinaField(action)}
                  className={`group inline-flex ${actionStyle} gap-x-2 items-center px-3 py-2 font-semibold text-lg transition duration-150 ease-out transform focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 whitespace-nowrap`}
                >
                  {action.label}
                  {action.iconSource && (
                    <Icon
                      tinaField={tinaField(action.iconSource, "icon")}
                      data={{ size: "small", ...action.iconSource }}
                    />
                  )}
                </button>
              );
              break;
            case "link":
              element = (
                <Link
                  key={index}
                  href={action.link ? action.link : "/"}
                  data-tina-field={tinaField(action)}
                  className={`${actionStyle} group inline-flex gap-x-2 items-center font-semibold text-lg transition duration-150 ease-out`}
                >
                  {action.label}
                  {action.iconSource && (
                    <Icon
                      tinaField={tinaField(action.iconSource, "icon")}
                      data={{ size: "small", ...action.iconSource }}
                    />
                  )}
                </Link>
              );
              break;
            case "file":
              element = (
                <a
                  key={index}
                  href={action.link ? action.link : "/"}
                  data-tina-field={tinaField(action)}
                  className={`${actionStyle} group inline-flex gap-x-2 items-center font-semibold text-lg transition duration-150 ease-out`}
                >
                  {action.iconSource && (
                    <Icon
                      tinaField={tinaField(action.iconSource, "icon")}
                      data={{ size: "small", ...action.iconSource }}
                    />
                  )}
                  {action.label}
                </a>
              );
              break;
            default:
              element = null;
              break;
          }
          return element;
        })}
    </div>
  );
};
export const defaultButton: any = {
  label: "Action Label",
  type: "button",
  icon: true,
  link: "/",
};
export const defaultLink: any = {
  label: "Action Label",
  type: "link",
  icon: true,
  link: "/",
};
export const defaultFile: any = {
  label: "Action Label",
  type: "file",
  icon: true,
  link: "/",
};

export const actionSchema: any = {
  type: "object",
  label: "Action",
  name: "action",
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
        { label: "File", value: "file" },
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
};
