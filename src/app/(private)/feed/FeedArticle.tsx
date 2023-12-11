import Link from "next/link";
import {
  AnalyticsIcon,
  CommentsIcon,
  FavoriteIcon,
  OpenBookIcon,
} from "../../../assets/icons";
import { FeedArticleContainer } from "./FeedArticle.style";
import Image from "next/image";

interface FeedArticleProps {
  article: Article;
}

export function FeedArticle({ article }: FeedArticleProps) // {
//     id,
//     author,
//     title,
//     body,
//     isPublished,
//     publishedAt,
//     tags,
//     views,
//     likes,
//     comments,
//     featuredImage,
//     category
// }: FeedArticleProps
{
  // set publishedAt to month day, year
  article.publishedAt = new Date(article.publishedAt).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );
  const readTime = Math.ceil(article.body.split(" ").length / 200);
  const displayText = article.body.split("/n/n")[0].slice(0, 200);

  return (
    <FeedArticleContainer>
      <Link href={`/blog/${article.id}`}>
        <div className="feed-article-header">
          <div className="feed-article-author">
            <Image src={article.author.profileImage} alt="author" />
            <div className="feed-article-author-info">
              <h3>
                {article.author.firstName} {article.author.lastName}
              </h3>
              <p>{article.author.title}</p>
            </div>
          </div>
          <div className="feed-article-date">
            <p>{article.publishedAt}</p>
          </div>
        </div>
        <div className="feed-article-title">
          <h2>{article.title}</h2>
          <div className="feed-article-read-time">
            <OpenBookIcon />
            <span>
              {readTime} min{readTime > 1 ? "s" : null} read
            </span>
          </div>
        </div>
        <div className="feed-article-short-text">{displayText}</div>
        <div className="feed-article-featured-image">
          <Image src={article.featuredImage} alt="featured" />
        </div>
        <div className="feed-article-footer">
          <div className="feed-article-comments">
            <CommentsIcon />
            <span>{article.comments} comments</span>
          </div>
          <div className="feed-article-likes">
            <FavoriteIcon />
            <span>{article.likes} likes</span>
          </div>
          <div className="feed-article-views">
            <AnalyticsIcon />
            <span>{article.views} views</span>
          </div>
        </div>
      </Link>
    </FeedArticleContainer>
  );
}
