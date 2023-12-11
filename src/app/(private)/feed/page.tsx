"use client";
import { FeedContainer } from "./page.style";
import { useEffect, useState } from "react";
import { FeedArticle } from "./FeedArticle";
import { PenIcon } from "../../../assets/icons";
import Link from "next/link";
import NavLink from "@/components/NavLink/NavLink";

export default function Feed() {
  // create state to hold articles
  const [articles, setArticles] = useState<Article[] | null>(null);
  // sort articles by publishedAt

  const [currentArticle, setCurrentArticle] = useState<any | null>(null);

  useEffect(() => {
    let data = require("../../../mock/article.json");
    // filter data by is_published
    data = data.filter((article: any) => article.is_published === true);
    data = data.sort((a: any, b: any) => {
      return (
        new Date(b.publish_at).getTime() - new Date(a.publish_at).getTime()
      );
    });

    // change data keys
    data = data.map((article: any) => {
      return {
        id: article.id,
        author: {
          firstName: article.author.first_name,
          lastName: article.author.last_name,
          title: article.author.title,
          profileImage: article.author.profile_pic,
        },
        title: article.title,
        body: article.content,
        isPublished: article.is_published,
        publishedAt: article.publish_at,
        tags: article.tags,
        views: article.views,
        likes: article.likes,
        comments: article.comments,
        featuredImage: article.featured_image,
        category: article.category,
      } as Article;
    }) as Article[];

    if (data) {
      setArticles(data.slice(0, 10));
    }
  }, []);

  return (
    <FeedContainer>
      <div className="heading">
        <div>
          <h2>FEED</h2>
          <p>Explore different content you’d love</p>
        </div>
        <Link href="/createArticle" className="styled-button">
          <PenIcon />
          <span>Post a content</span>
        </Link>
      </div>
      <div className="feeds">
        <div className="feed-tabs">
          <NavLink href="/feed" end>
            For you
          </NavLink>
          <NavLink href="/feed/featured" end>
            Featured
          </NavLink>
          <NavLink href="/feed/recent" end>
            Recent
          </NavLink>
        </div>
        <div className="feeds-container">
          {/* <Outlet /> */}

          {articles
            ? articles.map((article: any) => {
                return <FeedArticle article={article} key={article.id} />;
              })
            : null}
        </div>
      </div>
    </FeedContainer>
  );
}
