import Image from 'next/image';

// ====================================================
const FigureImage = props => {
  const {
    className,
    src,
    width,
    height,
    ...others
  } = props;
  return <figure className={className} {...others}>
      <Image width={width} height={height} src={src} alt="demo" style={{
      width: '100%',
      height: 'auto'
    }} />
    </figure>;
};

export default FigureImage;