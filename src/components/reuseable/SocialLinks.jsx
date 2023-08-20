// ========================================================
// ========================================================
import Image from 'next/image';
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
  },
  {
    id: 5,
    icon: '',
    url: 'https://www.tiktok.com/@user9329044612077?_op=1&_r=1&_t=8d8LdIcJ7so'
  }
];

const SocialLinks = ({ className = 'nav social social-white mt-4' }) => {
  return (
    <nav className={className}>
      {links.map(({ id, icon, url }) => (
        <a href={url} key={id} target="_blank" rel="noopener noreferrer">
          {icon ? (
            <i className={icon} />
          ) : (
            <Image
              alt="tiktok"
              src={`/img/icons/tiktok_white40x40.png`}
              style={{ marginBottom: '5px' }}
              height={20}
              width={20}
            />
          )}
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
