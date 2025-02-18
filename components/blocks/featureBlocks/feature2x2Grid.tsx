import { Icon } from "../../util/icon";
import { iconSchema } from "../../util/icon";
import {
    PageBlocksFeatured2x2Grid, PageBlocksFeatured2x2GridItems,
} from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import type { Template } from "tinacms";

export const Featured2x2Grid = ({ data }: { data: PageBlocksFeatured2x2Grid }) => {
    return (
        <section className="py-12 px-6 md:px-12 lg:px-32 bg-white content-center lg:flex-row pb-12">
            <div className="mx-auto max-w-[87vw] text-base leading-7 text-gray-700">
                <div className="text-center content-center">
                    {data.tagline && (
                        <h2
                            data-tina-field={tinaField(data, "tagline")}
                            className="text-base font-semibold break-words leading-7 text-indigo-600"
                        >
                            {data.tagline}
                            <span className="absolute w-full h-full left-0 top-0 rounded-full -z-1 bg-current opacity-7"></span>
                        </h2>
                    )}
                    {data.headline && (
                        <p
                            data-tina-field={tinaField(data, "headline")}
                            className="mt-2 text-3xl font-bold tracking-tight leading-relaxed pb-2 text-gray-900 sm:text-4xl"
                        >
                            {data.headline}
                        </p>
                    )}
                    {data.primarybody && (
                        <p
                            data-tina-field={tinaField(data, "primarybody")}
                            className="mt-2 text-base break-words leading-7 text-gray-600"
                        >
                            {data.primarybody}
                        </p>
                    )}
                </div>

                <div className=" mt-6 max-w-2xl sm:mt-10 lg:mt-13 lg:max-w-full">
                    <div className="grid max-w-full grid-cols-1 gap-x-8 gap-y-3 md:max-w-none md:grid-cols-2 md:gap-y-10">
                        {data.items &&
                            data.items.map(function (block, i) {
                                return <Featured2x2GridItem key={i} data={block || {}} />;
                            })}
                    </div>
                </div>
            </div>

        </section>
    );
};

export const Featured2x2GridItem = ({
    data,
}: {
    data: PageBlocksFeatured2x2GridItems;
}) => {
    return (
        <div
            data-tina-field={tinaField(data)}
            className=""
        >
            <div className="mx-auto max-w-2xl mt-6 lg:mt-12 lg:max-w-none">
                <div className="flex max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                            {data.icon && (
                                <Icon
                                    tinaField={tinaField(data, "icon")}
                                    data={{ size: "large", ...data.icon }}
                                />
                            )}
                            {data.featuretitle && (
                                <h3
                                    data-tina-field={tinaField(data, "featuretitle")}
                                    className="flex items-center gap-x-3 break-words text-base leading-7 md:text-2xl font-semibold text-gray-900"
                                >
                                    {data.featuretitle}
                                </h3>
                            )}
                        </div>
                        <div className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                            {data.featuretext && (
                                <p
                                    data-tina-field={tinaField(data, "featuretext")}
                                    className=" break-words flex-auto"
                                >
                                    {data.featuretext}
                                </p>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

const defaultFeatureGrid = {
    featuretitle: "Feature",
    featuretext: "This is where you might talk about the feature, if this wasn't just filler text.",
    icon: {
        color: "",
        style: "float",
        name: "BiAperture",
    },
};

export const feature2x2GridBlockSchema: Template = {
    name: "featured2x2Grid",
    label: "Service Highlight: 2x2 Grid",
    ui: {
        previewSrc: "/blocks/feature2x2.png",
        defaultItem: {
            tagline: "Here's some text above the other text",
            headline: "This Big Text is Totally Awesome",
            primarybody: "This is where you might talk about the feature, if this wasn't just filler text.",
            items: [defaultFeatureGrid, defaultFeatureGrid, defaultFeatureGrid, defaultFeatureGrid],
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
                    ...defaultFeatureGrid,
                },
            },
            fields: [
                iconSchema,
                {
                    type: "string",
                    label: "Feature Title",
                    name: "featuretitle",
                },
                {
                    type: "string",
                    label: "Feature Text",
                    name: "featuretext",
                    ui: {
                        component: "textarea",
                    },
                },
            ],
        },
    ],
};
