import { render, screen } from '@testing-library/react';
import { UserName, UserNameProps } from './index';

const makeSut = (props: UserNameProps) => {
  render(<UserName {...props} />);
};

describe('UserName', () => {
  it('Should render the username correctly', () => {
    const testUsername = 'john_doe';
    makeSut({ username: testUsername });
    expect(screen.getByText(testUsername)).toBeInTheDocument();
  });
});
