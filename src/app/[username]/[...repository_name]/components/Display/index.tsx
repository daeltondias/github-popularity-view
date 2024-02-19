export type DisplayProps = {
  header: string;
  text: string;
};

export const Display = ({ header, text }: DisplayProps) => {
  return (
    <h1 className="text-lg">
      <small className="text-gray-400"># {header}</small>
      <br />{text}
    </h1>
  );
}
