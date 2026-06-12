import { useEffect } from 'react';

const SEO = ({ title, description, canonical }) => {
    useEffect(() => {
        document.title = title;

        const setMeta = (name, content, attr = 'name') => {
            let el = document.querySelector(`meta[${attr}="${name}"]`);
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute(attr, name);
                document.head.appendChild(el);
            }
            el.setAttribute('content', content);
        };

        setMeta('description', description);
        setMeta('og:title', title, 'property');
        setMeta('og:description', description, 'property');
        setMeta('twitter:title', title);
        setMeta('twitter:description', description);

        if (canonical) {
            let link = document.querySelector('link[rel="canonical"]');
            if (!link) {
                link = document.createElement('link');
                link.setAttribute('rel', 'canonical');
                document.head.appendChild(link);
            }
            link.setAttribute('href', canonical);
        }
    }, [title, description, canonical]);

    return null;
};

export default SEO;
