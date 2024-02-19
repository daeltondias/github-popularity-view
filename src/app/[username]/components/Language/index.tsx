import { DotFillIcon } from "@primer/octicons-react";

export type LanguageProps = {
  language: string;
};

export const Language = ({ language }: LanguageProps) => {
  const colors: Record<string, string> = {
    'JavaScript': 'text-yellow-500',
    'HTML': 'text-orange-500',
    'Python': 'text-blue-500',
    'Java': 'text-red-500',
    'C++': 'text-purple-500',
    'Ruby': 'text-pink-500',
    'Swift': 'text-indigo-500',
    'TypeScript': 'text-teal-500',
    'Go': 'text-green-500',
    'PHP': 'text-yellow-700',
    'C#': 'text-blue-700',
    'Kotlin': 'text-purple-700',
    'Rust': 'text-red-700',
    'Scala': 'text-indigo-700',
    'Dart': 'text-teal-700',
    'Objective-C': 'text-gray-500',
    'R': 'text-green-700',
    'Shell': 'text-yellow-900',
    'Lua': 'text-orange-700',
    'Haskell': 'text-gray-700',
    'CSS': 'text-rose-500 ',
  };
  return (
    <div className='flex items-center text-gray-500 text-xs'>
      <DotFillIcon size={24} className={colors[language]} />{' '}
      {language}
    </div>
  );
};
