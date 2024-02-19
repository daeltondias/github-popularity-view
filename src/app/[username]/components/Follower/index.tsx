import Link from "next/link";

export type FollowerProps = {
  link: string;
  number: number;
}

export const Follower = ({ link, number }: FollowerProps) => {
  return (
    <Link href={link} target="_blank" className='group'>
      <span className='group-hover:text-blue-500 font-bold'>{number}</span>{' '}
      <span className="group-hover:text-blue-500 text-sm font-light text-gray-400">follower</span>
    </Link>
  );
};
