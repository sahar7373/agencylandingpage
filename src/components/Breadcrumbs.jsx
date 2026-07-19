import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://yourtradepartner.com.au';

const Breadcrumbs = ({ items, currentLabel, currentPath, className = '', tone = 'dark' }) => {
    const breadcrumbItems = [...items, { label: currentLabel, href: currentPath }];

    const isLight = tone === 'light';
    const baseColor = isLight ? 'text-construction-charcoal/50' : 'text-white/45';
    const hoverColor = isLight ? 'hover:text-construction-charcoal' : 'hover:text-white';
    const sepColor = isLight ? 'text-construction-charcoal/25' : 'text-white/25';

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
                <ol className={`flex flex-wrap items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] ${baseColor}`}>
                    {items.map((item) => (
                        <React.Fragment key={item.href}>
                            <li>
                                <a href={item.href} className={`transition-colors ${hoverColor}`}>
                                    {item.label}
                                </a>
                            </li>
                            <li aria-hidden="true" className={sepColor}>/</li>
                        </React.Fragment>
                    ))}
                    <li className="text-safety-orange">{currentLabel}</li>
                </ol>
            </nav>
        </>
    );
};

export default Breadcrumbs;
