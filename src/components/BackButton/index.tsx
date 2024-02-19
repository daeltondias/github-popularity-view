import { ArrowLeftIcon } from "@primer/octicons-react";
import Link, { LinkProps } from "next/link";

export type BackButtonProps = LinkProps;

export const BackButton = ({ ...props }: BackButtonProps) => {
  return (
    <Link className="w-12 h-12 flex items-center justify-center p-2 rounded-full hover:bg-gray-700 transition-colors" {...props}>
      <ArrowLeftIcon size={24} />
    </Link>
  );
}
