import { LinkIcon, BookIcon, PulseIcon, NoteIcon, StarIcon, EyeIcon, RepoForkedIcon, MarkGithubIcon } from "@primer/octicons-react";
import { Display, LinkExternal } from "./components";
import { BackButton, Container } from "@/components";
import { redirect } from 'next/navigation';
import { RepositoryType } from "@/types";

type RepositoryProps = {
  params: {
    username: string;
    repository_name: string[];
  }
}

export default async function Repository({ params }: RepositoryProps) {
  const { username, repository_name } = params;
  const full_name = [username, ...repository_name].join('/');
  const requestConfig = { headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } }; 
  const repoResponse = await fetch(`${process.env.GITHUB_API}/repos/${full_name}`, requestConfig);
  const repo: RepositoryType = await repoResponse.json();

  if (!repo.name) redirect('/');

  return (
    <Container>
      <div className="flex items-center gap-4">
        <BackButton href={`/${repo.owner.login}`} />
        <h1 className="text-2xl">Repository details</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-12 font-light mt-6">
        <div className="flex flex-col gap-4 border border-gray-700 rounded-lg p-6 pb-8">
          <Display header="Name" text={repo.name} />
          {repo.description && (<Display header="Description" text={repo.description} />)}
          {repo.language && (<Display header="Language" text={repo.language} />)}
        </div>

        <div className="flex flex-col gap-3 font-thin py-6">
          <p>
            <a href={repo.html_url} target="_blank" className="flex items-center gap-2 font-normal">
              <MarkGithubIcon />
              <span className="text-blue-500 hover:underline">
                {repo.html_url}
              </span>
            </a>
          </p>
          {repo.homepage && (
            <p>
              <a href={repo.homepage} target="_blank" className="flex items-center gap-2 font-normal">
                <LinkIcon />
                <span className="text-blue-500 hover:underline">
                  {repo.homepage}
                </span>
              </a>
            </p>
          )}
          <p><LinkExternal href={`${repo.html_url}/?tab=readme-ov-file#readme`}><BookIcon className="mr-1" /> Readme</LinkExternal></p>
          <p><LinkExternal href={`${repo.html_url}/activity`}><PulseIcon className="mr-1" /> Activity</LinkExternal></p>
          <p><LinkExternal href={`${repo.html_url}/custom-properties`}><NoteIcon className="mr-1" /> Custom properties</LinkExternal></p>
          <p><LinkExternal href={`${repo.html_url}/stargazers`}><StarIcon className="mr-1" /> {repo.stargazers_count} stars</LinkExternal></p>
          <p><LinkExternal href={`${repo.html_url}/watchers`}><EyeIcon className="mr-1" /> {repo.watchers_count} watching</LinkExternal></p>
          <p><LinkExternal href={`${repo.html_url}/forks`}><RepoForkedIcon className="mr-1" /> {repo.forks_count} forks</LinkExternal></p>
        </div>
      </div>
    </Container>
  );
}
