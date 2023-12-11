interface Article {
    id: number;
    author: { firstName: string, lastName: string, title: string, profileImage: string };
    title: string;
    body: string;
    isPublished: boolean;
    publishedAt: string;
    tags: string;
    views: number;
    likes: number;
    comments: number;
    featuredImage: string;
    category: string;
}