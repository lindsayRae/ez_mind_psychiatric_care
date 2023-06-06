import { Fragment } from 'react'; // -------- custom component -------- //

import { NavbarBlog } from 'components/blocks/navbar';
import Link from 'next/link';

import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
import FigureImage from 'components/reuseable/FigureImage';
import MarkdownIt from 'markdown-it';

const Post = ({ data }) => {
  console.log('POST DATA', data);
  const md = new MarkdownIt();
  const htmlContent = md.render(data[0].content);
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <NavbarBlog
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

                  <h1 className="display-1 mb-4">{data[0].title}</h1>
                  <ul className="post-meta mb-5">
                    <li className="post-date">
                      <i className="uil uil-calendar-alt" />
                      <span>{data[0].date}</span>
                    </li>
                    <li className="post-author">
                      <i className="uil uil-user" />
                      <span>By {data[0].author}</span>
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
                    <FigureImage
                      width={960}
                      height={600}
                      src={`/img/photos/blogs/${data[0].imageFileName}`}
                      className="card-img-top"
                    />
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

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await fetch(`http://127.0.0.1:8082/api/posts?filters\[Slug\][$eq]=${id}`);
  const { data } = await res.json();
  return {
    props: { data }
  };
};

export const getStaticPaths = async () => {
  const res = await fetch('http://127.0.0.1:8082/api/posts');
  const { data } = await res.json();
  console.log('DATA in getStaticPaths:', data);
  const paths = data.map((post) => {
    return {
      params: { id: post.slug }
    };
  });
  return {
    paths,
    fallback: false
  };
};
