import NextLink from 'components/reuseable/links/NextLink';
import { Fragment } from 'react'; // -------- custom component -------- //
import PageProgress from 'components/common/PageProgress';

import { Hero4 } from 'components/blocks/hero';

import { Contact10 } from 'components/blocks/contact';
import { FAQ1 } from 'components/blocks/faq';
import { Footer9 } from 'components/blocks/footer';
import { Navbar } from 'components/blocks/navbar';
import { Services22 } from 'components/blocks/services';

//import { Blog2 } from 'components/blocks/blog';

//? getStaticProps can only be exported from a page. You can’t export it from non-page files.
export async function getStaticProps() {
  //* Strapi data
  const res = await fetch('http://127.0.0.1:8082/api/posts');
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
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded" />}
        />
      </header>

      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero4 />

        <section className="wrapper bg-light position-relative">
          {/* <div className="container py-14 py-md-16"> */}
          {/* ========== blog section ========== */}
          {/* <Blog2 posts={posts} /> */}
          <div className="container py-14 py-md-16">
            <Services22 />
          </div>
          <div className="container py-14 py-md-16">
            <FAQ1 />
          </div>
          <div className="container py-14 py-md-16">
            <Contact10 />
          </div>

          {/* </div> */}
        </section>
      </main>
      <Footer9 />
    </Fragment>
  );
};

export default Home;
