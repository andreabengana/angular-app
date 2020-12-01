import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from 'src/app/models/Post'

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  @Output() editPost: EventEmitter<any> = new EventEmitter();
  post!: Post;
  message!:string;
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.currentPost.subscribe(message => this.message = message)
  }

  onEditSubmit(){
    const post = {
      id: this.post.id,
      title: this.post.title,

    }

    this.editPost.emit(post);
    
    window.location.reload();
  }

}
