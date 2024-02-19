import { render, screen } from '@testing-library/react';
import { Container, ContainerProps } from './index';

const makeSut = (props: ContainerProps = {}) => {
  render(<Container {...props} />);
};

describe('Container', () => {
  it('Should render without crashing', () => {
    makeSut();
    expect(screen.getByTestId('container')).toBeInTheDocument();
  });

  it('Should applies custom className prop', () => {
    makeSut({ className: 'custom-class' });
    const containerElement = screen.getByTestId('container');
    expect(containerElement).toHaveClass('custom-class');
  });
  
  it('Should passes additional props correctly', () => {
    makeSut({ 'data-test': 'custom-data' } as never);
    const containerElement = screen.getByTestId('container');
    expect(containerElement).toHaveAttribute('data-test', 'custom-data');
  });
});
