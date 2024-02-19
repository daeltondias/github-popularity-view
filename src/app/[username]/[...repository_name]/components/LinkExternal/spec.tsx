import { LinkExternal, LinkExternalProps } from './index';
import { render, screen } from '@testing-library/react';

const makeSut = (props: LinkExternalProps) => {
  render(<LinkExternal {...props}>Example</LinkExternal>);
};

const props: LinkExternalProps = {
  href: 'https://example.com'
};

describe('LinkExternal', () => {
  it('Should render without crashing', () => {
    makeSut(props);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('Should render with the correct class and target attribute', () => {
    makeSut(props);

    const linkElement = screen.getByText('Example');

    expect(linkElement).toHaveClass('hover:text-blue-500');
    expect(linkElement).toHaveAttribute('target', '_blank');
  });

  it('Should passes additional props correctly', () => {

    const customProps = {
      'data-custom': '123',
      id: 'test-link',
      ...props,
    };

    makeSut(customProps);

    const linkElement = screen.getByText('Example');

    expect(linkElement).toHaveAttribute('id', customProps.id);
    expect(linkElement).toHaveAttribute('data-custom', customProps['data-custom']);
  });
});
