# The Model-Adapter Pattern with Angular

API Data -> Adapter -> Model > App

### JSON API data:
- https://jsonplaceholder.typicode.com

```
[
  {
    "userId": 1,
    "id": 1,
    "title": "quidem molestiae enim"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "sunt qui excepturi placeat culpa"
  }
]
```

### Adapter
```typescript
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

```

### Model

```typescript
export class Album {
  constructor(
    public userId: number,
    public id: number,
    public title: string,
  ) {}

  static adapt(item: any): Album {
    return new Album(
      item.id,
      item.userId,
      item.title,
    );
  }
}
```
### Setup 

```
npm install  @angular/cli
ng server
```
- Access localhost:4200

### References: 
- https://dev.to/florimondmanca/consuming-apis-in-angular--the-model-adapter-pattern-3fk5
- https://guides.emberjs.com/release/models/
- https://angular.io/guide/dependency-injection
- http://json2ts.com/
