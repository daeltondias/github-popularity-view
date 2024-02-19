export type BioProps = {
  bio: string;
}

export const Bio = ({ bio }: BioProps) => {
  return (
    <p className="my-4 font-light">{bio}</p>
  );
};