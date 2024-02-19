export type UserNameProps = {
  username: string;
};

export const UserName = ({ username }: UserNameProps) => {
  return (
    <h1 className="text-xl font-thin text-gray-300">{username}</h1>
  );
};