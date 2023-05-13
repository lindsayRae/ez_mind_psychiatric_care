// ========================================================
// ========================================================
const links = [
  {
    id: 2,
    icon: 'uil uil-facebook-f',
    url: 'https://facebook.com/uiLibOfficial/'
  },
  {
    id: 4,
    icon: 'uil uil-instagram',
    url: 'https://www.instagram.com/uilibofficial/'
  }
];

const SocialLinks = ({ className = 'nav social social-white mt-4' }) => {
  return (
    <nav className={className}>
      {links.map(({ id, icon, url }) => (
        <a href={url} key={id} target="_blank" rel="noreferrer">
          <i className={icon} />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
