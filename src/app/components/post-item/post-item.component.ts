import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from 'src/app/models/Post'
@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input()
  post: Post = new Post;
  id!:number;
  message!:string;
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.currentPost.subscribe(message => this.message = this.post.title)
    this.postService.currentIDPost.subscribe(id => this.id = this.post.id)
  }

  editMessage() {
    this.postService.transferPost(this.post);
  }
}
