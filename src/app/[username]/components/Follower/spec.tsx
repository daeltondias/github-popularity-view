import { render, screen } from '@testing-library/react';
import { Follower, FollowerProps } from './index';

const makeSut = (props: FollowerProps) => {
  render(<Follower {...props} />);
};

const props: FollowerProps = {
  link: 'https://example.com',
  number: 100
};

describe('Follower', () => {
  it('Should render the correct number and text', () => {
    makeSut(props);

    const followerNumber = screen.getByText(props.number.toString());
    const followerText = screen.getByText('follower');

    expect(followerNumber).toBeInTheDocument();
    expect(followerText).toBeInTheDocument();
  });

  it('Should render the link with the correct href attribute', () => {
    makeSut(props);

    const linkElement = screen.getByRole('link');

    expect(linkElement).toHaveAttribute('href', props.link);
  });
});
