import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePostDTO, UpdatePostDTO } from '../dto/post.dto';
import { Post } from '../post.inteface';

@Injectable()
export class PostService {
  private lastPostId: 0;
  private posts: Post[] = [];

  getAllPosts(): Post[] {
    return this.posts;
  }

  getPostById(id: number): Post {
    const post = this.posts.find((p) => p.id === id);
    if (post) return post;
    throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
  }

  createPost(body: CreatePostDTO) {
    return body;
  }

  updatePost(id: number, body: UpdatePostDTO) {
    return { id: id, body: body };
  }
}
