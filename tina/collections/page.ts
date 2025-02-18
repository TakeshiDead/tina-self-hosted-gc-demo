import { Collection } from "tinacms";
import {
  heroAppImgBlockSchema,
  heroBlockSchema,
  heroimgtilesBlockSchema,
  heroSplitImgBlockSchema,
  heroVideoBlockSchema,
  herobackgrImgBlockSchema,
  simpleheroBlockSchema,
} from "../../components/blocks/heroBlocks";
import {
  featureSimpleThreeColumnRowBlocksSchema,
  feature2x2GridBlockSchema,
  featureThreeColumnRowWithIntroBlockSchema,
  featureShowcaseImageWithKeyFeaturesBlockSchema,
  featureOffset2x2GridBlockSchema,
  featurescreenshotpanelBlockSchema,
  featureTestimonialBlockSchema,
  offsetfeatureBlockSchema,
} from "../../components/blocks/featureBlocks";
import {
  carouselBlockSchema,
  logoCloudBlockSchema,
  contentGrid2x2BlockSchema,
} from "../../components/blocks/contentBlocks";
import { contactInfoAndGoogleMapsBlockSchema, contactMultiLocationColumnsBlockSchema, } from "../../components/blocks/contactBlocks";
import { testimonialBlockSchema } from "../../components/blocks/testimonialBlocks/testimonial";
import { teamSectionsImgBlockSchema } from "../../components/blocks/contentBlocks/teamSectionsImg";
import { ColorPickerInput } from "../fields/color";
import { iconSchema } from "../../components/util/icon";
import { mediaSchema } from "../../components/util/media";

export const PageCollection: Collection = {
  name: "page",
  label: "Page",
  path: "content/pages",
  format: "md",
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      }
      else {
        return `/${document._sys.filename}`;
      }
    },
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      description:
        "The title of the page. This is used to display the title in the CMS",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "header",
      label: "Header",
    },
    {
      type: "object",
      name: "logo",
      label: "Logo",
      fields: [
        { type: "image", name: "url", label: "URL" },
        { type: "string", name: "alt", label: "Alt Text" },
      ],
    },
    {
      type: "object",
      list: true,
      name: "links",
      label: "Links",
      ui: {
        itemProps: (item) => {
          return {
            label: item?.header,
          };
        },
      },
      fields: [
        { type: "string", name: "header" },
        { type: "string", name: "description" },
        { type: "string", name: "url" },
      ],
    },
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "Additional Sections",
      ui: {
        visualSelector: true,
        description: "Add, edit, and reorder sections",
      },
      templates: [
        carouselBlockSchema,
        contentGrid2x2BlockSchema,
        contactInfoAndGoogleMapsBlockSchema,
        contactMultiLocationColumnsBlockSchema,
        featureSimpleThreeColumnRowBlocksSchema,
        feature2x2GridBlockSchema,
        featureThreeColumnRowWithIntroBlockSchema,
        featureShowcaseImageWithKeyFeaturesBlockSchema,
        featureOffset2x2GridBlockSchema,
        featureTestimonialBlockSchema,
        featurescreenshotpanelBlockSchema,
        heroAppImgBlockSchema,
        heroBlockSchema,
        heroimgtilesBlockSchema,
        heroSplitImgBlockSchema,
        herobackgrImgBlockSchema,
        heroVideoBlockSchema,
        logoCloudBlockSchema,
        offsetfeatureBlockSchema,
        simpleheroBlockSchema,
        teamSectionsImgBlockSchema,
        testimonialBlockSchema,
      ],
    },
  ],
};
