import React from 'react';
import styles from '../../styles/team.module.css';
import Twitter from '../svgs/twitter';
import Github from '../svgs/github';
import Notion from '../svgs/notion';
import Writter from '../svgs/writer';

export interface TeamProfileProps {
  image: string;
  name: string;
  role?: string;
  twitter?: string;
  notion?: string;
  github?: string;
  document?: string;
}

interface AccountProps {
  type: string;
  link: string;
}

const SelectAccount = ({ type }: { type: string }) => {
  switch (type) {
    case 'twitter':
      return <Twitter className={`fill-current transition duration-150 group-hover:text-twitter w-6 h-6`} />;
    case 'github':
      return <Github className={`rounded-full fill-current transition duration-150 group-hover:text-white group-hover:bg-black w-6 h-6`} />;
    case 'notion':
      return <Notion className={`fill-current transition duration-150 group-hover:text-gray-700 w-6 h-6`} />;
    case 'document':
      return <Writter className={`fill-current transition duration-150 group-hover:text-orange-light w-6 h-6`} />;
    default:
      return null;
  }
};

const ProfileAccount = (props: AccountProps) => {
  return (
    <a className="group" href={props.link}>
      <div className="w-10 h-10 rounded-full cursor-pointer flex justify-center items-center transition duration-150 group-hover:shadow-lg">
        <SelectAccount type={props.type} />
      </div>
    </a>
  );
};

export const TeamProfile: React.FC<TeamProfileProps> = ({ children, image, name, role, twitter, notion, github, document }) => {
  return (
    <div className="md:flex">
      <div className="w-full md:w-60 flex-none pb-6 md:pb-0">
        <img className="w-44 m-auto md:m-0" src={image} alt={name} />
      </div>
      <div className="flex-grow">
        <div className="text-center md:text-left">
          <h3 className="text-xl md:text-2xl">{name}</h3>
          <p className="pt-1 text-gray-500">{role}</p>
        </div>
        <div className="pt-6 md:text-lg inline-block leading-7">{children}</div>
        <div className="flex space-x-2 max-w-max mt-4 mx-auto md:mx-0">
          {twitter && <ProfileAccount type="twitter" link={twitter} />}
          {notion && <ProfileAccount type="notion" link={notion} />}
          {github && <ProfileAccount type="github" link={github} />}
          {document && <ProfileAccount type="document" link={document} />}
        </div>
      </div>
    </div>
  );
};
