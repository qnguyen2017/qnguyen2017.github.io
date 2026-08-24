import { useEffect } from "react";

export function useSiteMeta(site) {
  useEffect(() => {
    document.title = site.title;

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute("content", site.description);

    let authorTag = document.querySelector('meta[name="author"]');
    if (!authorTag) {
      authorTag = document.createElement("meta");
      authorTag.setAttribute("name", "author");
      document.head.appendChild(authorTag);
    }
    authorTag.setAttribute("content", site.author);
  }, [site]);
}
