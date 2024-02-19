import { render, screen } from '@testing-library/react';
import { Language, LanguageProps } from './index';

const makeSut = (props: LanguageProps) => {
  return render(<Language {...props} />);
};

describe('Language', () => {
  it('Should render component with correct language and color', () => {
    const language = 'JavaScript';

    const { container } = makeSut({ language });

    const languageElement = screen.getByText(language);

    const dotFillIcon = container.querySelector('svg');

    expect(languageElement).toBeInTheDocument();

    expect(dotFillIcon).toBeInTheDocument();

    expect(dotFillIcon).toHaveClass('text-yellow-500');
  });
});
