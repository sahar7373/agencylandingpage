import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://yourtradepartner.com.au';

const Breadcrumbs = ({ items, currentLabel, currentPath, className = '' }) => {
    const breadcrumbItems = [...items, { label: currentLabel, href: currentPath }];

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbItems.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.label,
            item: `${SITE_URL}${item.href}`
        }))
    };

    return (
        <>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            </Helmet>

            <nav aria-label="Breadcrumb" className={className}>
                <ol className="flex flex-wrap items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                    {items.map((item) => (
                        <React.Fragment key={item.href}>
                            <li>
                                <a href={item.href} className="transition-colors hover:text-white">
                                    {item.label}
                                </a>
                            </li>
                            <li aria-hidden="true" className="text-white/25">/</li>
                        </React.Fragment>
                    ))}
                    <li className="text-safety-orange">{currentLabel}</li>
                </ol>
            </nav>
        </>
    );
};

export default Breadcrumbs;
