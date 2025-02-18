import { Collection } from "tinacms";
import { iconSchema } from "../../components/util/icon";
import { mediaSchema } from "../../components/util/media";
import { ColorPickerInput } from "../fields/color";

export const GlobalCollection: Collection = {
    label: "Global",
    name: "global",
    path: "content/global",
    format: "json",
    ui: {
      global: true,
    },
    fields: [
      {
        type: "object",
        label: "Header",
        name: "header",
        fields: [
          iconSchema as any,
          mediaSchema as any,
          {
            type: "string",
            label: "Name",
            name: "name",
          },
          {
            type: "string",
            label: "Color",
            name: "color",
            options: [
              { label: "Default", value: "default" },
              { label: "Primary", value: "primary" },
            ],
          },
          {
            type: "object",
            label: "Nav Links",
            name: "nav",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.label };
              },
              defaultItem: {
                href: "home",
                label: "Home",
              },
            },
            fields: [
              {
                type: "string",
                label: "Link",
                name: "href",
              },
              {
                type: "string",
                label: "Label",
                name: "label",
              },
            ],
          },
        ],
      },
      {
        type: "object",
        label: "Footer",
        name: "footer",
        fields: [
          {
            type: "string",
            label: "Color",
            name: "color",
            options: [
              { label: "Default", value: "default" },
              { label: "Primary", value: "primary" },
            ],
          },
          {
            type: "object",
            label: "Social Links",
            name: "social",
            fields: [
              {
                type: "string",
                label: "Facebook",
                name: "facebook",
              },
              {
                type: "string",
                label: "Twitter",
                name: "twitter",
              },
              {
                type: "string",
                label: "Instagram",
                name: "instagram",
              },
              {
                type: "string",
                label: "Github",
                name: "github",
              },
            ],
          },
          {
            type: "object",
            label: "Office hours",
            name: "officeHours",
            fields: [
              {
                type: "string",
                label: "Monday and Tuesday",
                name: "mondayAndTuesday",
              },
              {
                type: "string",
                label: "Friday",
                name: "friday",
              },
            ],
          },
          {
            type: "object",
            label: "location",
            name: "location",
            fields: [
              {
                type: "string",
                label: "Location",
                name: "location",
              },
            ],
          },
          {
            type: "object",
            label: "Contact",
            name: "contact",
            fields: [
              {
                type: "string",
                label: "Email",
                name: "email",
              },
              {
                type: "string",
                label: "Phone",
                name: "phone",
              },
            ],
          },
        ],
      },
      {
        type: "object",
        label: "Theme",
        name: "theme",
        fields: [
          {
            type: "string",
            label: "Primary Color",
            name: "color",
            ui: {
              component: ColorPickerInput,
            },
          },
          {
            type: "string",
            name: "font",
            label: "Font Family",
            options: [
              {
                label: "System Sans",
                value: "sans",
              },
              {
                label: "Nunito",
                value: "nunito",
              },
              {
                label: "Lato",
                value: "lato",
              },
            ],
          },
          {
            type: "string",
            name: "darkMode",
            label: "Dark Mode",
            options: [
              {
                label: "System",
                value: "system",
              },
              {
                label: "Light",
                value: "light",
              },
              {
                label: "Dark",
                value: "dark",
              },
            ],
          },
        ],
      },
    ],
  };