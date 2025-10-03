export interface BoardPost {
  id: number;
  title: string;
  author: string;
  createdAt: string;
  views: number;
  comments: number;
  likes: number;
  category: '공지' | '정보' | '잡담' | '후기' | '질문';
  tags?: string[];
  isNotice?: boolean;
  isNew?: boolean;
  isHot?: boolean;
  content?: string[];
}
