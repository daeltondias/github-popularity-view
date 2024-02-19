import { render, screen } from '@testing-library/react';
import { Avatar, AvatarProps } from './index';

const makeSut = (props: AvatarProps) => {
  render(<Avatar {...props} />);
};

const props: AvatarProps = {
  url: 'https://example.com/profile.jpg'
}

describe('Avatar', () => {
  it('Should render with the correct image source', () => {
    makeSut(props);

    const avatarImage = screen.getByAltText<HTMLImageElement>('Profile Picture');

    expect(avatarImage.src).toBe(props.url);
  });

  it('Should render with the correct alt text', () => {
    makeSut(props);

    const avatarImage = screen.getByAltText<HTMLImageElement>('Profile Picture');

    expect(avatarImage.alt).toBe('Profile Picture');
  });
});
