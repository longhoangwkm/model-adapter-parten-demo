import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Album } from "./album.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AlbumService {
  private baseUrl = "https://jsonplaceholder.typicode.com/albums";
  constructor(private http: HttpClient) {}

  list(): Observable<Album[]> {
    const url = this.baseUrl;
    return this.http.get<any[]>(url).pipe(
      map(data => data.map(Album.adapt))
    );
  }
}
