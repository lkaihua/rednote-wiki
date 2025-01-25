import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  link: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Learn to use rednote',
    link: '/docs/intro/',
    image: require('@site/static/img/feature-1.jpg').default,
    description: (
      <>
        A tutorial to help you learn to download and install rednote, register an account,
        and create your first post.
      </>
    ),
  },
  {
    title: 'Connect with the community',
    link: '/docs/connect-with-the-community/',
    image: require('@site/static/img/feature-2.jpg').default,
    description: (
      <>
        rednote has a great community, and they want you to be a part of it.
        Ask questions, and make sure follow the community rule and values.
      </>
    ),
  },
  {
    title: 'Embrace the culture',
    link: '/docs/pay-your-cat-tax/',
    image: require('@site/static/img/feature-3.jpg').default,
    description: (
      <>
        Hey! Did you pay Cat Tax? Learn about the culture (who don't like memes?) of rednote.
      </>
    ),
  },
];

function Feature({ title, link, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <img src={image} alt={title} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md padding-vert--md">
        <Heading as="h3">
          <Link href={link}>{title}</Link>
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
