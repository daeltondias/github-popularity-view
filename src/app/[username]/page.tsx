import { Avatar, Bio, Follower, Following, Name, UserName, PopularRepositories } from "./components";
import { PeopleIcon, DotFillIcon } from '@primer/octicons-react';
import { GithubUserType, RepositoryType } from '@/types';
import { Container, SearchBar } from "@/components";

type UserProps = {
  params: {
    username: string;
  }
}

export default async function User({ params: { username } }: UserProps) {
  const requestConfig = { headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } };
  const repoResponse = await fetch(`https://api.github.com/users/${username}/repos`, requestConfig);
  const userResponse = await fetch(`https://api.github.com/users/${username}`, requestConfig);
  const repos: RepositoryType[] = await repoResponse.json();
  const user: GithubUserType = await userResponse.json();

  const userFound = user.name && repos.length >= 0;

  return (
    <Container>
      <SearchBar />
      {userFound ? (
        <div className="mt-10 md:flex gap-7">
          <div className="min-w-[18.5rem]">
            <Avatar url={user.avatar_url} />
            <Name name={user.name} />
            <UserName username={user.login} />
            <Bio bio={user.bio} />
            <div className="flex items-center gap-1 text-xs">
              <PeopleIcon size={16} className='text-gray-400' />
              <Follower link={`${user.html_url}?tab=followers`} number={user.followers} />
              <DotFillIcon size={4} />
              <Following link={`${user.html_url}?tab=following`} number={user.following} />
            </div>
          </div>
          <div className="flex-grow pt-12">
            <PopularRepositories repos={repos} />
          </div>
        </div>
      ) : (
        <p className="my-12 px-2 text-base">Nenhum usuário encontrado</p>
      )}
    </Container>
  );
}

