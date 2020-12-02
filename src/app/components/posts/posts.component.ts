import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post [] = []


  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  addPost(post:Post) {
    this.postService.addPost(post).subscribe(post => {
      this.posts.push(post);
    });
  }
  
  editPost(post:Post) {
    this.postService.editPost(post).subscribe(post => {
      this.posts.push(post);
    });
  }
}
