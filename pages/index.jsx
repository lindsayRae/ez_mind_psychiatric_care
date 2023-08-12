import Link from 'next/link';
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
import { Testimonial2 } from 'components/blocks/testimonial';

import { Blog2 } from 'components/blocks/blog';
import dotenv from 'dotenv';
dotenv.config();

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const TOKEN = process.env.STRAPI_TOKEN;

//? getStaticProps can only be exported from a page. You can’t export it from non-page files.
export async function getStaticProps() {
  //* Strapi data

  try {
    const res = await fetch(`${baseURL}/api/posts?sort=id&populate=*`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
      cache: 'no-store'
    });
    let posts = await res.json();

    posts = posts.data;
    console.log(posts);
    return {
      props: {
        posts
      },
      revalidate: 600 // In seconds
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);

    // Return an error object or fallback data
    return {
      props: {
        error: true, // You can set a specific flag for error handling
        fallbackData: { errorMessage: `Error in getStaticProps- ${error}` } // Provide fallback data if needed
      }
    };
  }
}
const Home = ({ posts, error, fallbackData }) => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper mb-1">
        <Navbar
          navClassName="navbar navbar-expand-lg classic transparent navbar-light caret-none"
          button={
            <Link
              target="_blank"
              href="https://valant.io/prospectivepatient/EZMindPsychiatricCare/embedded"
              className="btn btn-sm btn-primary rounded"
            >
              Book Online
            </Link>
          }
        />
      </header>

      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero4 />

        <section className="wrapper bg-light">
          {/* ========== blog section ========== */}

          <div className="container py-14 py-md-16" id="services">
            <Services22 />
            {/* <hr className="" /> */}
          </div>
        </section>
        <section className="wrapper bg-soft-primary ">
          <div className="container py-14 py-md-16">
            <div className="row">
              <div className="col-md-10 col-lg-8 mt-6">
                <p>
                  Evaluations are for treatment purposes only. <br /> We are an outpatient treatment facility, we DO NOT
                  offer crisis support. <br />
                  In case of an emergency, please call 911, call suicide hotline (988),
                  <br id="testimonials" />
                  or go to nearest Emergency Department.{' '}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="wrapper bg-light wrapper-border">
          <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mt-18 mt-md-23 mb-n16 mb-md-n18">
            <Testimonial2 />
          </div>
        </section>
        <section className="wrapper bg-light" id="about">
          <div className="container py-14 py-md-16">
            <About11 />
            <hr className="" />
            <About24 />
          </div>
        </section>
        <Banner3 />
        <section className="wrapper bg-light position-relative" id="pricing">
          <div className="container py-14 py-md-16">
            <Pricing3 />
          </div>
        </section>
        <section className="wrapper bg-soft-primary position-relative" id="faqs">
          <div className="container py-14 py-md-16">
            <FAQ1 />
          </div>
        </section>
        <section className="wrapper bg-light position-relative" id="blog">
          <div className="container py-14 py-md-16">
            <Blog2 posts={posts} error={fallbackData} />
            <Contact10 />
          </div>
        </section>
      </main>
      <Footer9 />
    </Fragment>
  );
};

export default Home;
