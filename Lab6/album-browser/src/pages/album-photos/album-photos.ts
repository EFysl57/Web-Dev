import { Component, OnInit } from '@angular/core';
import { Photo } from '../../models/photo';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { CommonModule} from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-album-photos',
  imports: [CommonModule],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotos implements OnInit {
  albumId = 0;
  photos: Photo[] = [];
  loading = false;
  error = '';

  constructor(private route: ActivatedRoute, private router: Router, private albumService: AlbumService, private cdr: ChangeDetectorRef) {

  }


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(!id) {
      return;
    }

    this.albumId = id;
    this.load(id);
  }

  load(id: number) {
    this.loading = true;
    this.albumService.getAlbumsPhotos(id).subscribe({
      next: (p) => {this.photos = p; this.loading = false;this.cdr.detectChanges();},
      error: () => {this.error = 'Failed to load photos'; this.loading = false;}
    });
  }

  back() {
    this.router.navigate(['/albums', this.albumId]);
  }

}
