import Image from "next/image";

export type AvatarProps = {
  url: string;
}

export const Avatar = ({ url }: AvatarProps) => {
  return (
    <div className="flex max-md:justify-center mb-4">
      <Image
        className="rounded-full border border-neutral-700 max-md:w-1/2 max-md:min-w-56"
        alt="Profile Picture"
        objectFit="cover"
        height={296}
        width={296}
        src={url}
      />
    </div>
  );
};