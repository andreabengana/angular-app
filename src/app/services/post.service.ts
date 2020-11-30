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
  postsUrl:string = 'http://localhost:4000/posts';
  postsLimit = '?_limit=6';
  post!:Post;
  private postSource = new BehaviorSubject('def');
  currentPost = this.postSource.asObservable();
  constructor(private http:HttpClient) { }

  getPosts():Observable<Post[]> {
    //return this.http.get<Post[]>(`${this.postsUrl}${this.postsLimit}`);
    return this.http.get<Post[]>(`${this.postsUrl}`);
  }

  addPost(post:Post):Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpOptions);
  }

  transferPost(post:Post) {
    this.postSource.next(post.title);
  }
}
