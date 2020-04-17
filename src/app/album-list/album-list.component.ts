import { Component, OnInit } from '@angular/core';
import { Album } from "../core/album.model";
import { AlbumService } from "../core/album.service";

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albums: Album[];

  constructor(private albumService: AlbumService){
    this.albums = [];
  }

  ngOnInit(): void {
    this.albumService.list().subscribe((albums: Album[]) => {
      this.albums = albums;
    });
  }
}
