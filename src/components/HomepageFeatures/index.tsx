import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  icon: React.ReactNode;
  description: React.ReactNode;
};

function SwordShieldIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.featureIcon}
    >
      {/* Shield */}
      <path
        d="M32 8L12 18v14c0 12.5 8.5 23.5 20 26 11.5-2.5 20-13.5 20-26V18L32 8z"
        stroke="#52a9ff"
        strokeWidth="2"
        fill="rgba(82,169,255,0.08)"
      />
      {/* Sword */}
      <line x1="32" y1="20" x2="32" y2="44" stroke="#c8aa6e" strokeWidth="2" />
      <line x1="26" y1="28" x2="38" y2="28" stroke="#c8aa6e" strokeWidth="2" />
      <circle cx="32" cy="46" r="2" fill="#c8aa6e" />
    </svg>
  );
}

function ChessCrownIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.featureIcon}
    >
      {/* Chess piece base */}
      <rect
        x="20"
        y="48"
        width="24"
        height="4"
        rx="1"
        stroke="#52a9ff"
        strokeWidth="2"
        fill="rgba(82,169,255,0.08)"
      />
      {/* Body */}
      <path
        d="M24 48V36c0-2 1-3 3-4l5-8 5 8c2 1 3 2 3 4v12"
        stroke="#52a9ff"
        strokeWidth="2"
        fill="rgba(82,169,255,0.08)"
      />
      {/* Crown */}
      <path
        d="M22 22l4 8h12l4-8-4 4-4-6-4 6-4-4z"
        stroke="#c8aa6e"
        strokeWidth="2"
        fill="rgba(200,170,110,0.12)"
      />
      <circle cx="22" cy="21" r="2" fill="#c8aa6e" />
      <circle cx="32" cy="17" r="2" fill="#c8aa6e" />
      <circle cx="42" cy="21" r="2" fill="#c8aa6e" />
    </svg>
  );
}

function StarCrownIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.featureIcon}
    >
      {/* Star */}
      <path
        d="M32 10l5.5 11 12.2 1.8-8.8 8.6 2.1 12.1L32 37.8l-11 5.7 2.1-12.1-8.8-8.6L26.5 21z"
        stroke="#52a9ff"
        strokeWidth="2"
        fill="rgba(82,169,255,0.08)"
      />
      {/* Inner crown accent */}
      <path
        d="M26 28l2 4h8l2-4-2 2-2-3-2 3-2-2z"
        stroke="#c8aa6e"
        strokeWidth="1.5"
        fill="rgba(200,170,110,0.15)"
      />
      <circle cx="32" cy="26" r="1.5" fill="#c8aa6e" />
    </svg>
  );
}

const FeatureList: FeatureItem[] = [
  {
    title: "Game Mechanics",
    icon: <SwordShieldIcon />,
    description:
      "All of TeamFight Tactics' game mechanics documented in one place.",
  },
  {
    title: "Common Tactics",
    icon: <ChessCrownIcon />,
    description: "Breakdown of the tactics used in TeamFight Tactics.",
  },
  {
    title: "Advanced Strategies",
    icon: <StarCrownIcon />,
    description:
      "Learn about the advanced strategies used by the top players in TeamFight Tactics.",
  },
];

function Feature({ title, icon, description }: FeatureItem) {
  return (
    <div className={styles.featureCol}>
      <div className={styles.featureCard}>
        <div className={styles.featureIconWrap}>{icon}</div>
        <Heading as="h3" className={styles.featureTitle}>
          {title}
        </Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureRow}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
