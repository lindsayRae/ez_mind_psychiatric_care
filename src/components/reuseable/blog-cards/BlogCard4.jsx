import dayjs from 'dayjs';
import Link from 'next/link';
import Image from 'next/image';
import NextLink from '../links/NextLink'; // ======================================================

import dotenv from 'dotenv';
// configure the package
dotenv.config();
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

// ======================================================
const BlogCard4 = (props) => {
  //console.log('props from BlogCard4 server?:', props);

  //const { date, image, title, category, description, className = 'card' } = props;
  return (
    <article>
      <div className="card">
        <figure className="card-img-top overlay overlay-1 hover-scale">
          {/* <Link href={`/posts/${props.slug}`} passHref legacyBehavior>
            <a>
              <Image
                width={560}
                height={350}
                src={`/img/photos/blogs/${props.imageURL}`}
                alt={props.title}
                style={{
                  width: '100%',
                  height: 'auto'
                }}
              />
              <span className="bg" />
            </a>
          </Link> */}

          <figcaption>
            <h5 className="from-top mb-0">Read More</h5>
          </figcaption>
        </figure>

        <div className="card-body">
          <Link href={`/posts/${props.slug}`} passHref legacyBehavior>
            <div className="post-header">
              <h2 className="post-title h3 mt-1 mb-3">{props.title}</h2>
            </div>
          </Link>
          <Link href={`/posts/${props.slug}`} passHref legacyBehavior>
            <div className="post-content">
              <p>{props.description}</p>
            </div>
          </Link>
        </div>

        <div className="card-footer">
          <ul className="post-meta d-flex mb-0">
            <li className="post-date">
              <i className="uil uil-calendar-alt" />
              <span>{dayjs(props.date).format('DD MMM YYYY')}</span>
            </li>

            <li className="post-comments">
              <NextLink
                href="#"
                className="link-dark"
                title={
                  <>
                    <i className="uil uil-file-alt fs-15" />
                    {props.category}
                  </>
                }
              />
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default BlogCard4;
