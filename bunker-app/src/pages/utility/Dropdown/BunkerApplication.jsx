import React from 'react';
import { Link } from 'react-router-dom';

const BunkerApplication = () => {
  const Links = [
    {
      id: 1,
      title: 'Bunker Drive',

      link: '/',
    },
    {
      id: 2,
      title: 'Bunker Cleander',

      link: '/bunker-application',
    },
    {
      id: 3,
      title: 'Bunker Vpn',

      link: '/bunker-vpn',
    },
    {
      id: 4,
      title: 'Bunker Mail',

      link: '/bunker-mail',
    },
  ];

  return (
    <div
      id="dropdownDelay"
      class="z-10 absolute drop-shadow-2xl bg-white hover:bg-slate-100 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-100"
    >
      <ul class=" text-left text-base text-slate-800 ">
        {Links?.map((link) => (
          <li key={link.id} className="border-b py-3  border-skin-muted">
            <Link
              title={link.title}
              to={link.link}
              class="block px-4 2 text-slate-900"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BunkerApplication;
