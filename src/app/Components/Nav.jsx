'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/fontawesome-svg-core';

export default function Nav() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((prevState) => !prevState);
  }

  return (
    <nav>
      <div className="nav_logo">
        <Image
          src="/img/sm-logo-no-bg.png"
          height={35}
          width={65}
          alt="logo"
        />
        <span className="nav_brand">
          teduhan
          {/* use font awesome registered symbol here to scale */}
        </span>
        <span
          className="nav_icon"
          onClick={handleClick}>
          --- <FontAwesomeIcon icon="fa-solid fa-bars" />
        </span>
      </div>

      <div className={isActive ? 'nav_ul' : 'nav_ul navbar_active'}>
        <ul>
          <li>buying</li>
          <li>renting</li>
          <li>selling</li>
          <li>agents</li>
          <li>developments</li>
          <Button>register</Button>
        </ul>
      </div>
    </nav>
  );
}

function Button({ children }) {
  return <button>{children}</button>;
}
