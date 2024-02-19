import { render, screen } from '@testing-library/react';
import { Following, FollowingProps } from './index';

const makeSut = (props: FollowingProps) => {
  render(<Following {...props} />);
};

const props: FollowingProps = {
  link: 'https://example.com',
  number: 100
};

describe('Following', () => {
  it('Should render the correct number and text', () => {
    makeSut(props);

    const followerNumber = screen.getByText(props.number.toString());
    const followerText = screen.getByText('following');

    expect(followerNumber).toBeInTheDocument();
    expect(followerText).toBeInTheDocument();
  });

  it('Should render the link with the correct href attribute', () => {
    makeSut(props);

    const linkElement = screen.getByRole('link');

    expect(linkElement).toHaveAttribute('href', props.link);
  });
});
