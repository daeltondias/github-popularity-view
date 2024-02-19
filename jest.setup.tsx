import '@testing-library/jest-dom';

jest.mock('next/image', () => ({ src, alt }: any) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={src} alt={alt} />
));
