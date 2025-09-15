import React from 'react';

interface SeoProps {
  title: string;
  description: string;
}

const Seo: React.FC<SeoProps> = ({ title, description }) => {
  document.title = title;

  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute('content', description);
  } else {
    const newDescriptionMeta = document.createElement('meta');
    newDescriptionMeta.name = 'description';
    newDescriptionMeta.content = description;
    document.head.appendChild(newDescriptionMeta);
  }

  return null;
};

export default Seo;
