export type Blog = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    body: string;
    content: string;
    eye_catch: {
      url: string;
      height: number;
      width: number;
    }
    tag: string;
    toc_visible: string;
    tag_icon: {
      url: string;
      height: number;
      width: number;
    }
  }