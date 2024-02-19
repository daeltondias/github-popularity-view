import Link from "next/link";

export type FollowingProps = {
  link: string;
  number: number;
}

export const Following = ({ link, number }: FollowingProps) => {
  return (
    <Link href={link} target="_blank" className='group'>
      <span className='group-hover:text-blue-500 font-bold'>{number}</span>{' '}
      <span className="group-hover:text-blue-500 text-sm font-light text-gray-400">following</span>
    </Link>
  );
};
