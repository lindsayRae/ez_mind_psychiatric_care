import { Fragment } from 'react'; // -------- custom component -------- //

import { Navbar } from 'components/blocks/navbar';

import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';

const Post = ({ data }) => {
  console.log('POST DATA', data);
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          language
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      <main className="content-wrapper">
        {/* ========== page section ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
            <div className="row">
              <div className="col-md-10 col-xl-8 mx-auto">
                <div className="post-header">
                  <div className="post-category text-line">
                    <NextLink href="#" className="hover" title="Blog" />
                  </div>

                  <h1 className="display-1 mb-4">{data[0].title}</h1>

                  <ul className="post-meta mb-5">
                    <li className="post-date">
                      <i className="uil uil-calendar-alt" />
                      <span>{data[0].date}</span>
                    </li>

                    <li className="post-author">
                      <i className="uil uil-user" />
                      <NextLink href="#" className="text-reset" title={<span>By {data[0].author}</span>} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== job description section ========== */}
        {/* <section className="wrapper bg-light">
          <div className="container pb-14 pb-md-16">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="blog single mt-n17">
                  <div className="card shadow-lg">
                    <div className="card-body">
                      <h2 className="h1 mb-3">Job Description</h2>
                      <p>{data[0].content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </Fragment>
  );
};

export default Post;

export const getStaticProps = async (context) => {
  console.log('context.params:', context.params);
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
  console.log('DATA', data);
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
