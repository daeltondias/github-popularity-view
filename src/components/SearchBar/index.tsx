"use client"

import { FormEventHandler, useState } from "react";
import { useRouter } from 'next/navigation';
import { Oval } from "react-loader-spinner";
import { Router } from 'next/router';

export const SearchBar = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const router = useRouter();
  
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setLoading(true);
    router.push(`/${username}`);
    Router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  };

  return (
    <form className="w-full flex gap-6 font-mono" onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={event => setUsername(event.target.value)}
        className="py-4 px-6 w-full rounded-xl border border-neutral-800 bg-zinc-800/30 truncate"
        placeholder="Usuário do github"
      />
      {loading ? (
        <div className="py-3 rounded-xl w-28 bg-green-600 font-medium flex items-center justify-center">
          <Oval
            width="25"
            height="25"
            visible={true}
            color="#fff"
            ariaLabel="oval-loading"
          />
        </div>
      ) : (
        <input
          type="submit"
          value="Buscar"
          className="py-4 rounded-xl w-28 bg-green-600 hover:bg-green-500 font-medium cursor-pointer"
        />
      )}
    </form>
  )
};