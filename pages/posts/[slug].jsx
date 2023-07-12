import { Fragment } from 'react'; // -------- custom component -------- //

import { Navbar } from 'components/blocks/navbar';
import Link from 'next/link';

import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
import FigureImage from 'components/reuseable/FigureImage';
import MarkdownIt from 'markdown-it';
import dayjs from 'dayjs';
import dotenv from 'dotenv';
// configure the package
dotenv.config();
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const TOKEN = process.env.STRAPI_TOKEN;

// gets array of objects of all posts
export const getStaticPaths = async () => {
  const res = await fetch(`${baseURL}/api/posts`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
    cache: 'no-store'
  });
  const { data } = await res.json();
  //console.log('data', data);
  const paths = data.map((post) => {
    return {
      // params slug or id same as the dynamic file name so -> [id].jsx or [slug.jsx]
      params: { slug: post.slug }
    };
  });
  return {
    paths,
    fallback: 'blocking'
  };
};

// get one post by slug
export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  // https://strapi.io/blog/how-to-create-a-slug-system-in-strapi-v4
  // changed to below from strapi forum
  // https://forum.strapi.io/t/strapi-v4-search-by-slug-instead-id/13469/50?page=2

  // const res = await fetch(`${baseURL}/api/post/find-by-slug/${slug}?populate=image`, {
  //   cache: 'no-store'
  // });

  const res = await fetch(`${baseURL}/api/posts?filters[slug]=${slug}&populate=image`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
    cache: 'no-store'
  });

  const data = await res.json();
  console.log(data);
  return {
    props: { data },
    revalidate: 600 // In seconds
  };
};

const Post = ({ data }) => {
  const md = new MarkdownIt();
  const htmlContent = md.render(data.data[0].content);
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          language
          button={<NextLink title="Contact" href="/#contact" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      <main className="content-wrapper">
        {/* ========== blog 1 title section ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
            <div className="row">
              <div className="col-md-10 col-xl-8 mx-auto">
                <div className="post-header">
                  <div className="post-category text-line">
                    Blog
                    {/* <NextLink href="#" className="hover" title="Teamwork" /> */}
                  </div>

                  <h1 className="display-1 mb-4">{data.data[0].title}</h1>
                  <ul className="post-meta mb-5">
                    <li className="post-date">
                      <i className="uil uil-calendar-alt" />
                      <span>{dayjs(data.data[0].date).format('MMM DD YYYY')}</span>
                    </li>
                    <li className="post-author">
                      <i className="uil uil-user" />
                      <span>By Kristi Ramirez, PMHNP-BC, FNP-C</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== Blog description section ========== */}
        <section className="wrapper bg-light">
          <div className="container pb-14 pb-md-16">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="blog single mt-n17">
                  <div className="card shadow-lg">
                    <FigureImage width={960} height={600} src={data.data[0].image.url} className="card-img-top" />
                    <div className="card-body">
                      <div className="classic-view">
                        <article className="post">
                          <div className="post-content mb-5">
                            {/* <h2 className="h1 mb-3">Blog Description</h2> */}
                            <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
                          </div>
                        </article>
                        <div className="author-info d-md-flex align-items-center mb-3">
                          <div className="d-flex align-items-center">
                            <FigureImage
                              width={120}
                              height={120}
                              src="/img/photos/kristi_avatar120x120.webp"
                              className="user-avatar rounded-circle overflow-hidden"
                            />

                            <div>
                              <h6>
                                <NextLink title="Kristi Ramirez" href="#" className="link-dark" />
                              </h6>
                              <span className="post-meta fs-15">Founder - EZ Mind Psychiatric Care</span>
                            </div>
                          </div>

                          <div className="mt-3 mt-md-0 ms-auto">
                            <Link href="/#blog" passHref legacyBehavior>
                              <a className="btn btn-sm btn-soft-ash rounded-pill btn-icon btn-icon-start mb-0">
                                <i className="uil uil-file-alt" /> All Blogs
                              </a>
                            </Link>
                          </div>
                        </div>

                        <p>
                          Experienced nurse with background in psychiatric and intensive care nursing, specializing in
                          family practice. Board certified in both family practice and psychiatric mental health.
                          Committed to providing comprehensive care for both physical and mental well-being.
                        </p>
                        <span className="post-meta fs-15">
                          Board Certified RN <br />
                          Board Certified Family Nurse Practitioner
                          <br />
                          Board Certified Psychiatric Nurse Practitioner
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Post;
