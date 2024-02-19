export type ContainerProps = JSX.IntrinsicElements['main'];

export const Container = ({ className = '', ...props }: ContainerProps) => {
  return (
    <main data-testid="container" className={`py-12 max-w-screen-xl px-6 md:px-8 m-auto text-sm text-gray-200 ${className}`} {...props} />
  );
}
