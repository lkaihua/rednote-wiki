import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Let's get started!
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageBlogList() {
  const recentPosts = require("../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json");

  return (
    <div className="container">
      <h2>Recent blogs</h2>
      <ul>
        {recentPosts.items.slice(0, 5).map((item, index) => (
          <li key={index}>
            <a href={`${item.permalink}`}>{item.title}</a>{" "}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="`{siteConfig.tagline}`">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageBlogList />
      </main>
    </Layout>
  );
}
