import { Hero } from "../components/blocks/heroBlocks";
import { Layout } from "../components/layout";

export default function FourOhFour() {
  return (
    <Layout>
      <Hero
        data={{
          headline: "404 – Page Not Found",
          text: "Oops! It seems there's nothing here, how embarrassing.",
          action: [
            {
              label: "Return Home",
              type: "button",
              icon: true,
              link: "/",
            },
          ],
        }}
      />
    </Layout>
  );
}
