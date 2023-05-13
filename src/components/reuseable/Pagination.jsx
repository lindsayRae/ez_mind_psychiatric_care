import NextLink from './links/NextLink'; // ==========================================================

// ==========================================================
const Pagination = props => {
  const {
    className = 'justify-content-center',
    altStyle = false
  } = props;

  const NextPreviousBtn = (url, icon) => {
    return <NextLink href={url} className="page-link" title={<i className={`uil ${icon}`} />} />;
  };

  return <nav className={`d-flex ${className}`} aria-label="pagination">
      <ul className={`pagination ${altStyle ? 'pagination-alt' : ''}`}>
        <li className="page-item disabled">{NextPreviousBtn('#', 'uil-arrow-left')}</li>

        {[1, 2, 3].map((item, i) => <li className={`page-item ${i === 0 ? 'active' : ''}`} key={item}>
            <button className="page-link">{item}</button>
          </li>)}

        <li className="page-item">{NextPreviousBtn('#', 'uil-arrow-right')}</li>
      </ul>
    </nav>;
};

export default Pagination;