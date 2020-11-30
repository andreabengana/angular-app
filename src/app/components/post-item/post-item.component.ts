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

  message!:string;
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.currentPost.subscribe(message => this.message = message)
  }

  newMessage() {
    this.postService.transferPost(this.post);
  }
}
