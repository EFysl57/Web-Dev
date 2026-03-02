import { CommonModule} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album';
import { AlbumService } from '../../services/album.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums implements OnInit{
  albums: Album[] = [];
  loading = false;
  error = '';

  constructor(private albumService: AlbumService, private router: Router, private cdr: ChangeDetectorRef) {

  }


  ngOnInit(): void {
    this.fetch();
  }


  fetch() {
    this.loading = true;
    this.albumService.getAlbums().subscribe({
      next: (data) => {this.albums = data; this.loading = false; this.cdr.detectChanges();},
      error: () => {this.error = 'Failed to load albums'; this.loading = false; this.cdr.detectChanges()}
    });

  }


  open(album: Album) {
    this.router.navigate(['/albums', album.id]);
  }

  delete(album: Album) {
    if (!confirm(`Delete album ${album.id}?`)) {
      return;
    }

    this.albumService.deleteAlbum(album.id).subscribe({
      next: () => {this.albums = this.albums.filter(a => a.id !== album.id);
        console.log(`Album ${album.id} deleted locally`)
      },
      error: () => alert('Delete failed')
    })

  }



}
