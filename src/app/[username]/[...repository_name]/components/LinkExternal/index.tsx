export type LinkExternalProps = JSX.IntrinsicElements['a'];

export const LinkExternal = ({ ...props }: LinkExternalProps) => {
  return <a className="hover:text-blue-500" target="_blank" {...props} />;
}
