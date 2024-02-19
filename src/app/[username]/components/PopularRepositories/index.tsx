'use client';

import { useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";
import { Repository } from "../Repository";
import { RepositoryType } from "@/types";
import { OrderButton } from "../";

export type PopularRepositoriesProps = {
  repos: RepositoryType[];
};

export const PopularRepositories = ({ repos }: PopularRepositoriesProps) => {
  const order = useAppSelector((state) => state.orderReducer.value);
  const [repositories, setRepositories] = useState(repos);

  useEffect(() => {
    setRepositories(old => {
      const hasStargazes = old.some(repo => repo.stargazers_count > 0);
      if (hasStargazes) {
        return [...old].sort((a, b) => {
          return (
            order === 'desc' ?
            b.stargazers_count - a.stargazers_count :
            a.stargazers_count - b.stargazers_count
          );
        });
      } else {
        return [...old].sort((a, b) => {
          return (
            order === 'desc' ?
            b.name.localeCompare(a.name) :
            a.name.localeCompare(b.name)
          );
        });
      }
    });
  }, [order]);

  return (
    <>
      <div className="flex items-center justify-between">
        <h2>Popular repositories</h2>
        <OrderButton />
      </div>
      <div className="grid lg:grid-cols-2 gap-4 mt-2.5">
        {repositories.map((repo, index) => (
          <Repository key={index} data={repo} />
        ))}
      </div>
    </>
  );
};
