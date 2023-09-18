"use client";

import { useRouter } from "next/navigation";
import Image from "@/node_modules/next/image";
import { FaPlay } from "react-icons/fa";

interface ListItemsProps {
  image: string;
  name: string;
  href: string;
}

const ListItems: React.FC<ListItemsProps> = ({ image, name, href }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(href);
  };
  return (
    <button
      onClick={() => {}}
      className=" relative 
    group 
    flex 
    items-center 
    rounded-md 
    overflow-hidden 
    gap-x-4 
    bg-neutral-100/10 
    cursor-pointer 
    hover:bg-neutral-100/20 
    transition 
    pr-4"
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image className="object-cover" src={image} fill alt="Image" />
      </div>
      <p className="font-medium truncate py-5">{name}</p>
      <div className="absolute transition opacity-0 rounded-full flex items-center justify-center bg-green-400 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110 ">
        <FaPlay className="text-black" />
      </div>
    </button>
  );
};

export default ListItems;