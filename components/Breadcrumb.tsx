// /components/Breadcrumb.tsx
'use client'

// /components/Breadcrumb.tsx
import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
  project?: string;
};

const Breadcrumb = ({
  homeElement,
  separator,
  listClasses,
  activeClasses,
  capitalizeLinks,
  project='',
}: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  return (
    <main className="container-fluid bg-surfacelight-tertiary dark:bg-surfacedark-secondary max-sm:hidden">
      <section className="max-container h-full flex-wrap">
        <nav className="flex justify-between py-2 px-2" aria-label="Breadcrumb">
          <ol className={`inline-flex items-center mb-3 sm:mb-0 gap-2 text-surfacedark-secondary dark:text-surfacelight-secondary`}>
            <li className={listClasses}>
              <Link href={'/'}>{homeElement}Home</Link>
            </li>
           {project=='' ? null : 
            <li className={listClasses}>
              <Link href={'/ourprojects'}>/ {project}</Link>
            </li>
            }
            {pathNames.map((link, index) => {
              const href = `/${pathNames.slice(0, index + 1).join('/')}`;
              const itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses;
              const itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link;
              return (
                <React.Fragment key={index}>
                  <li className={`capitalize ${activeClasses}`}>
                    <Link href={href}>/ {itemLink}</Link>
                  </li>
                  {pathNames.length !== index + 1 && <span className="text-surfacedark-secondary dark:bg-surfacelight-secondary">{separator}</span>}
                </React.Fragment>
              );
            })}
          </ol>
        </nav>
      </section>
    </main>
  );
};

export default Breadcrumb;