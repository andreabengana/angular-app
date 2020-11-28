import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  postsUrl:string = 'https://jsonplaceholder.typicode.com/posts';
  postsLimit = '?_limit=5';
  constructor(private http:HttpClient) { }

  getPosts():Observable<Post[]> {
    return this.http.get<Post[]>(`${this.postsUrl}${this.postsLimit}`);
  }

  addPost(post:Post):Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpOptions);
  }
}
