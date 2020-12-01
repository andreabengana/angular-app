import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  @Output() editPost: EventEmitter<any> = new EventEmitter();
  id!:number
  message!:string;
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.currentPost.subscribe(message => this.message = message)
    this.postService.currentIDPost.subscribe(id => this.id = id)
  }

  onEditSubmit(){
    const post = {
      "id" : 4,
      "title" : this.message
    }
    console.log(post);
    this.editPost.emit(post);
    console.log(post);
    //window.location.reload();
  }

  

}
