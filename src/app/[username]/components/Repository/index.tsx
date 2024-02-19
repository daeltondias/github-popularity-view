import { StarIcon } from "@primer/octicons-react";
import { RepositoryType } from "@/types";
import { Language } from "../Language";
import Link from 'next/link';

export type RepositoryProps = {
  data: RepositoryType;
};

export const Repository = ({ data }: RepositoryProps) => {
  return (
    <div className="border border-gray-700 rounded-md p-4 flex flex-col gap-3">
      <Link href={`/${data.full_name}`} className="text-blue-500 text-sm hover:underline truncate">{data.name}</Link>
      <p className="text-xs text-gray-300 line-clamp-2">{data.description}</p>
      {data.language && (<Language language={data.language} />)}
      <div className="flex items-center text-xs gap-1 ml-1">
        <StarIcon size={10} /> <small>{data.stargazers_count}</small>
      </div>
    </div>
  );
};