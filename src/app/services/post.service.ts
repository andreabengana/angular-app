import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/Post';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class PostService {
  //postsUrl:string = 'https://jsonplaceholder.typicode.com/posts';
  postsUrl:string = 'http://localhost:4000/';
  postsGet = 'posts';
  postsSave = 'save';
  postsEdit = 'update';

  post!:Post;

  private postSource = new BehaviorSubject('def');
  currentPost = this.postSource.asObservable();

  constructor(private http:HttpClient) { }

  getPosts():Observable<Post[]> {
    return this.http.get<Post[]>(`${this.postsUrl}${this.postsGet}`);
    //return this.http.get<Post[]>(`${this.postsUrl}`);
  }

  addPost(post:Post):Observable<Post> {
    return this.http.post<Post>(`${this.postsUrl}${this.postsSave}`, post);
  }

  transferPost(post:Post) {
    this.postSource.next(post.title);
  }

  editPost(post:Post):Observable<Post> {
    //unsure if it will return post.id on Post model
    return this.http.post<Post>(`${this.postsUrl}${this.postsEdit}`, post);
  }
}
