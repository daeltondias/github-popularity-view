import { render, screen } from '@testing-library/react';
import { Bio, BioProps } from './index';

const makeSut = (props: BioProps) => {
  render(<Bio {...props} />);
}

describe('Bio', () => {
  it('Should render the bio text correctly', () => {
    const bioText = 'This is a sample bio text.';

    makeSut({ bio: bioText });
    
    expect(screen.getByText(bioText)).toBeInTheDocument();
  });
});
