import './styleTitleText.scss';
export default function TitleText({ children, styles, className, isFirst }) {
  if (isFirst)
    return (
      <h1
        style={{ ...styles }}
        className={`section-title section-title--first ${
          className ? className : ''
        }`}
      >
        {children}
      </h1>
    );
  return (
    <h3
      style={{ ...styles }}
      className={`section-title${
        className ? className : ''
      }`}
    >
      {children}
    </h3>
  );
}
