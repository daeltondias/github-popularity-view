import { render, screen } from '@testing-library/react';
import { Repository, RepositoryProps } from './index';
import { repositoryMock } from '@/_mocks_/repository';

const makeSut = (props: RepositoryProps) => {
  render(<Repository {...props} />);
};

const dataMock: RepositoryProps['data'] = {
  ...repositoryMock,
  name: 'repo',
  full_name: 'user/repo',
  description: 'A sample repository',
  language: 'JavaScript'
};


describe('Repository', () => {
  it('Should render repository information correctly', () => {
    makeSut({ data: dataMock });

    expect(screen.getByText(dataMock.name)).toBeInTheDocument();
    expect(screen.getByText(dataMock.description as string)).toBeInTheDocument();
    expect(screen.getByText(dataMock.language as string)).toBeInTheDocument();
  });

  it('Should render a link with the correct href attribute', () => {
    makeSut({ data: dataMock });

    const link = screen.getByText(dataMock.name).closest('a');
    expect(link).toHaveAttribute('href', `/${dataMock.full_name}`);
  });
});
