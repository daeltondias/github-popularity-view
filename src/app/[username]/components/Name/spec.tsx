import { render, screen } from '@testing-library/react';
import { Name, NameProps } from './index';

const makeSut = (props: NameProps) => {
  render(<Name {...props} />);
};

describe('Name', () => {
  it('Should render the name correctly', () => {
    const testName = 'John Doe';

    makeSut({ name: testName });

    expect(screen.getByText(testName)).toBeInTheDocument();
  });
});
