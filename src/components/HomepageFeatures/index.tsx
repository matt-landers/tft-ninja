import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Game Meachanics",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>All of TeamFight Tactic's game mechanics documented in one place.</>
    ),
  },
  {
    title: "Common Tactics",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>Breakdown of the tactics used in TeamFight Tactics.</>,
  },
  {
    title: "Advanced Strategies",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Learn about the advanced strategies used by the top players in TeamFight
        Tactics.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
