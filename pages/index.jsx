import NextLink from 'components/reuseable/links/NextLink';
import { Fragment } from 'react'; // -------- custom component -------- //
import PageProgress from 'components/common/PageProgress';

import { About11, About24 } from 'components/blocks/about';
import { Banner3 } from 'components/blocks/banner';
import { Contact10 } from 'components/blocks/contact';
import { FAQ1 } from 'components/blocks/faq';
import { Footer9 } from 'components/blocks/footer';
import { Hero4 } from 'components/blocks/hero';
import { Navbar } from 'components/blocks/navbar';
import { Pricing3 } from 'components/blocks/pricing';
import { Services22 } from 'components/blocks/services';

import { Blog2 } from 'components/blocks/blog';
import dotenv from 'dotenv';
// configure the package
dotenv.config();
const baseURL = process.env.NEXT_PUBLIC_BASEURL;

//? getStaticProps can only be exported from a page. You can’t export it from non-page files.
export async function getStaticProps() {
  //* Strapi data
  const res = await fetch(`${baseURL}/api/posts?populate=image`, { cache: 'no-store' });
  let posts = await res.json();

  posts = posts.data;

  return {
    props: {
      posts
    }
  };
}
const Home = ({ posts }) => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper mb-1">
        <Navbar
          navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none"
          button={<NextLink title="Contact" href="#contact" className="btn btn-sm btn-primary rounded" />}
        />
      </header>

      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero4 />

        <section className="wrapper bg-light">
          {/* ========== blog section ========== */}

          <div className="container py-14 py-md-16">
            <Services22 />
            <hr className="" />
            <About11 />
            <About24 />
          </div>
        </section>
        <Banner3 />
        <section className="wrapper bg-light position-relative">
          <div className="container py-14 py-md-16">
            <Pricing3 />
            <hr className="my-14 my-md-17" />
            <FAQ1 />
            <hr className="my-14 my-md-17" />
            <Blog2 posts={posts} />
            <Contact10 />
          </div>
        </section>
      </main>
      <Footer9 />
    </Fragment>
  );
};

export default Home;
