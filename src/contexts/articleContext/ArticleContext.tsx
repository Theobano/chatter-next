import { createContext, useState, useContext } from "react";

const ArticleContext = createContext<any | null>(null);

function ArticleProvider({ children }: { children: React.ReactNode }) {
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);

  const initialState = {
    currentArticle,
    setCurrentArticle,
  };
  return (
    <ArticleContext.Provider value={initialState}>
      {children}
    </ArticleContext.Provider>
  );
}

const useArticleContext = () => {
  return useContext(ArticleContext);
};

export { ArticleProvider, useArticleContext };
