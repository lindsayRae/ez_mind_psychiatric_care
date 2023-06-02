// ========================================================
// ========================================================
const links = [
  {
    id: 2,
    icon: 'uil uil-facebook-f',
    url: 'https://www.facebook.com/profile.php?id=100092170488917&mibextid=LQQJ4d'
  },
  {
    id: 4,
    icon: 'uil uil-instagram',
    url: 'https://instagram.com/ezmindpsychiatriccare?igshid=OGQ5ZDc2ODk2ZA=='
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
