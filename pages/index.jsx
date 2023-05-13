import NextLink from 'components/reuseable/links/NextLink';
import { Fragment } from 'react'; // -------- custom component -------- //
import { Hero4 } from 'components/blocks/hero';
import { Navbar } from 'components/blocks/navbar';
import { Contact10 } from 'components/blocks/contact';
import PageProgress from 'components/common/PageProgress';
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
          <div className="container py-14 py-md-16">
            {/* ========== blog section ========== */}
            {/* <Blog2 posts={posts} /> */}

            <Contact10 />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
