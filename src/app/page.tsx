import { MarkGithubIcon } from '@primer/octicons-react';
import { Container, SearchBar } from "@/components";

export default async function Home() {
  return (
    <Container className='h-screen'>
      <div className="flex flex-col h-full">
        <SearchBar />
        <div className="flex-grow flex items-center justify-center">
          <MarkGithubIcon size={58} />
        </div>
      </div>
    </Container>
  );
}

