import { render, screen } from '@testing-library/react';
import { Display, DisplayProps } from './index';

const makeSut = (props: DisplayProps) => {
  render(<Display {...props} />);
}

describe('Display', () => {
  it('Should render Display component with header and text', () => {
    const props = {
      header: 'Test Header',
      text: 'Test Text',
    };

    makeSut(props);

    expect(screen.getByText(`# ${props.header}`)).toBeInTheDocument();
    expect(screen.getByText(props.text)).toBeInTheDocument();
  });
});
