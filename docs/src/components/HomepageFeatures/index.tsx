import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Learn to use Rednote',
    image: require('@site/static/img/feature-1.jpg').default,
    description: (
      <>
        A tutorial to help you learn to download and intall Rednote, register an account,
        and create your first post. 
      </>
    ),
  },
  {
    title: 'Connect with the community',
    image: require('@site/static/img/feature-2.jpg').default,
    description: (
      <>
        Rednote has a great community, and they want you to be a part of it. 
        Ask questions, and make sure follow the community rule and values.
      </>
    ),
  },
  {
    title: 'Embrace the culture',
    image: require('@site/static/img/feature-3.jpg').default,
    description: (
      <>
        Hey! Did you pay Cat Tax? Learn about the culture (who don't like memes?) of Rednote.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <img src={image} alt={title} className={styles.featureSvg} role="img"/>
      </div>
      <div className="text--center padding-horiz--md padding-vert--md">
        <Heading as="h3">{title}</Heading>
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
