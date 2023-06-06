import Link from 'next/link';
import Image from 'next/image'; // -------- custom hook -------- //

import useLightBox from 'hooks/useLightBox'; // -------- custom component -------- //

import Carousel from 'components/reuseable/Carousel';
import ShareButton from 'components/common/ShareButton';
import FigureImage from 'components/reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';

import { BlogCard1 } from 'components/reuseable/blog-cards'; // -------- data -------- //

const tags = [
  {
    id: 1,
    title: 'Still Life',
    url: '#'
  },
  {
    id: 2,
    title: 'Urban',
    url: '#'
  },
  {
    id: 3,
    title: 'Nature',
    url: '#'
  }
];
const images = [
  {
    id: 1,
    url: '/img/photos/b8.jpg',
    full: '/img/photos/b8-full.jpg'
  },
  {
    id: 2,
    url: '/img/photos/b9.jpg',
    full: '/img/photos/b9-full.jpg'
  },
  {
    id: 3,
    url: '/img/photos/b10.jpg',
    full: '/img/photos/b10-full.jpg'
  },
  {
    id: 4,
    url: '/img/photos/b11.jpg',
    full: '/img/photos/b11-full.jpg'
  }
];
const blogs = [
  {
    id: 1,
    link: '#',
    category: 'Coding',
    date: '14 Apr 2022',
    image: '/img/photos/b4.jpg',
    title: 'Ligula tristique quis risus',
    description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
  },
  {
    id: 2,
    link: '#',
    date: '14 Apr 2022',
    category: 'Workspace',
    image: '/img/photos/b5.jpg',
    title: 'Nullam id dolor elit id nibh',
    description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
  },
  {
    id: 3,
    link: '#',
    date: '14 Apr 2022',
    category: 'Meeting',
    image: '/img/photos/b6.jpg',
    title: 'Ultricies fusce porta elit',
    description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
  },
  {
    id: 4,
    link: '#',
    date: '14 Apr 2022',
    category: 'Business Tips',
    image: '/img/photos/b7.jpg',
    title: 'Morbi leo risus porta eget',
    description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
  }
];

const BlogDetailsTemplate = () => {
  // used for image lightbox
  useLightBox();
  return (
    <div className="card">
      <FigureImage width={960} height={600} src="/img/photos/b1.jpg" className="card-img-top" />

      <div className="card-body">
        <div className="classic-view">
          <article className="post">
            <div className="post-content mb-5">
              <h2 className="h1 mb-4">Cras mattis consectetur purus fermentum</h2>

              <p>
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
                amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur
                purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus
                porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget
                porta ac consectetur vestibulum.
              </p>

              <p>
                Donec sed odio dui consectetur adipiscing elit. Etiam adipiscing tincidunt elit, eu convallis felis
                suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris. Donec non dolor ac elit
                aliquam tincidunt at at sapien. Aenean tortor libero, condimentum ac laoreet vitae, varius tempor nisi.
                Duis non arcu vel lectus urna mollis ornare vel eu leo.
              </p>

              <p>
                Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Nulla vitae elit libero, a pharetra
                augue. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Nullam quis
                risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Praesent commodo
                cursus magna.
              </p>

              <h3 className="h2 mb-4">Sit Vulputate Bibendum Purus</h3>

              <p>
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
                amet risus. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet
                fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula
                porta felis euismod semper.
              </p>

              <p>
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
                amet risus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
                risus. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Nulla
                vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.
              </p>
            </div>
          </article>
        </div>

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
              <span className="post-meta fs-15">Board Certified Nurse Practitioner</span>
            </div>
          </div>

          <div className="mt-3 mt-md-0 ms-auto">
            <Link href="/" passHref legacyBehavior>
              <a className="btn btn-sm btn-soft-ash rounded-pill btn-icon btn-icon-start mb-0">
                <i className="uil uil-file-alt" /> All Blogs
              </a>
            </Link>
          </div>
        </div>

        <p>
          Experienced nurse with background in psychiatric and intensive care nursing, specializing in family practice.
          Board certified in both family practice and psychiatric mental health. Committed to providing comprehensive
          care for both physical and mental well-being.
        </p>
      </div>
    </div>
  );
};

export default BlogDetailsTemplate;
