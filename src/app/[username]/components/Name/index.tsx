export type NameProps = {
  name: string;
};

export const Name = ({ name }: NameProps) => {
  return (
    <h1 className="text-2xl font-semibold">{name}</h1>
  );
};
