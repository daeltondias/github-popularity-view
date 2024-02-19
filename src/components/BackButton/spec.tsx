import { render, screen } from '@testing-library/react';
import { BackButton, BackButtonProps } from './index';

const makeSut = (props: BackButtonProps) => {
  render(<BackButton {...props} />);
}

const props: BackButtonProps = {
  href: 'https://example.com'
};

describe('BackButton', () => {
  it('Should render without crashing', () => {
    makeSut(props);

    const linkElement = screen.getByRole('link');

    expect(linkElement).toHaveAttribute('href', props.href);
    expect(linkElement).toBeInTheDocument();
  });

  it('Should passes additional props correctly', () => {

    const customProps = {
      'data-custom': '123',
      id: 'test-link',
      ...props,
    };

    makeSut(customProps);

    const linkElement = screen.getByRole('link');

    expect(linkElement).toHaveAttribute('id', customProps.id);
    expect(linkElement).toHaveAttribute('data-custom', customProps['data-custom']);
  });
});
