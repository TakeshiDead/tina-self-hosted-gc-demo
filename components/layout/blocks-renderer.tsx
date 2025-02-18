import type { Page, PageBlocks } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { Carousel, LogoCloud, ContentGrid2x2 } from "../blocks/contentBlocks";
import {
  FeatureSimpleThreeColumnRow,
  Featured2x2Grid,
  FeatureThreeColumnRowWithIntro,
  FeatureShowCaseImageWithKeyFeatures,
  FeatureOffset2x2Grid,
  FeatureTestimonial,
  FeatureScreenShotPanel,
  OffsetFeature,
} from "../blocks/featureBlocks";
import {
  Hero,
  HeroAppImg,
  HerobackgrImg,
  HeroImgTiles,
  HeroSplitImg,
  HeroVideo,
  SimpleHero,
} from "../blocks/heroBlocks";
import {
  ContactInfoAndGoogleMaps,
  ContactMultiLocationColumns,
} from "../blocks/contactBlocks";
import { Testimonial } from "../blocks/testimonialBlocks/testimonial";
import { TeamSectionsImg } from "../blocks/contentBlocks/teamSectionsImg";

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            return (
              <div key={i} data-tina-field={tinaField(block as object)}>
                <Block {...block} />
              </div>
            );
          })
        : null}
    </>
  );
};

// Refactor to Object literal in the future. Implement Pattern Matching once it's available in TS
const Block = (block: PageBlocks) => {
  switch (block.__typename) {
    case "PageBlocksHero":
      return <Hero data={block} />;
    case "PageBlocksFeaturesSimpleThreeColumnRow":
      return <FeatureSimpleThreeColumnRow data={block} />;
    case "PageBlocksTestimonial":
      return <Testimonial data={block} />;
    case "PageBlocksTeamSectionsImg":
      return <TeamSectionsImg data={block} />;
    case "PageBlocksCarousel":
      return <Carousel data={block} />;
    case "PageBlocksOffsetfeatures":
      return <OffsetFeature data={block} />;
    case "PageBlocksContactInfoAndGoogleMaps":
      return <ContactInfoAndGoogleMaps data={block} />;
    case "PageBlocksSimplehero":
      return <SimpleHero data={block} />;
    case "PageBlocksFeatured2x2Grid":
      return <Featured2x2Grid data={block} />;
    case "PageBlocksFeatureTestimonial":
      return <FeatureTestimonial data={block} />;
    case "PageBlocksFeatureThreeColumnRowWithIntro":
      return <FeatureThreeColumnRowWithIntro data={block} />;
    case "PageBlocksHeroSplitImg":
      return <HeroSplitImg data={block} />;
    case "PageBlocksHerobackgrImg":
      return <HerobackgrImg data={block} />;
    case "PageBlocksHeroAppImg":
      return <HeroAppImg data={block} />;
    case "PageBlocksHeroimgtiles":
      return <HeroImgTiles data={block} />;
    case "PageBlocksFeatureOffset":
      return <FeatureOffset2x2Grid data={block} />;
    case "PageBlocksFeaturescreenshotpanel":
      return <FeatureScreenShotPanel data={block} />;
    case "PageBlocksHerovideo":
      return <HeroVideo data={block} />;
    case "PageBlocksContact_multi_location_columns":
      return <ContactMultiLocationColumns data={block} />;
    case "PageBlocksProductSquareImg":
      return <ContentGrid2x2 data={block} />;
    case "PageBlocksFeatureShowcaseImageWithKeyFeatures":
      return <FeatureShowCaseImageWithKeyFeatures data={block} />;
    case "PageBlocksLogoCloud":
      return <LogoCloud data={block} />;
    default:
      return null;
  }
};
