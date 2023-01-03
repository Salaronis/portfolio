import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import MailIcon from '@mui/icons-material/Mail';
const SocialBar = () => {
    const links = [
      {
        id: 1,
        child: (
          <>
            LinkedIn <LinkedInIcon size={30} />
          </>
        ),
        href: "https://www.linkedin.com/in/michael-xie-00664a195/",
        style: "rounded-tr-md",
      },
      {
        id: 2,
        child: (
          <>
            GitHub <GitHubIcon size={30} />
          </>
        ),
        href: "https://github.com/Salaronis",
      },
      {
        id: 3,
        child: (
          <>
            Mail <MailIcon size={30} />
          </>
        ),
        href: "mailto:mxie0114@gmail.com",
      },
      {
        id: 4,
        child: (
          <>
            Resume <ArticleIcon size={30} />
          </>
        ),
        href: "/resume.pdf",
        style: "rounded-br-md",
        download: true,
      },
    ];
return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 cursor-pointer" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialBar;