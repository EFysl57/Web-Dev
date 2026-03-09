import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-album-detail',
  imports: [CommonModule, FormsModule, RouterLink],
  standalone: true,
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetail implements OnInit {
  album: Album | null = null;
  titleEdit = '';
  loading = false;
  saving = false;
  error = '';
  
  constructor(private route: ActivatedRoute, private router: Router, private albumService: AlbumService, private cdr: ChangeDetectorRef) {

  }
  
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(!id) {
      return;
    }
    this.load(id);

  }


  load(id: number) {
    this.loading = true;
    this.albumService.getAlbum(id).subscribe({
      next: (a) => {this.album = a; this.titleEdit = a.title; this.loading = false; this.cdr.detectChanges();}, 
      error: () => {this.error = 'Error. Failed to load album'; this.loading = false; }
    });
  }


  save() {
    if(!this.album) {
      return;
    }

    this.saving = true;

    const updated = {...this.album, title: this.titleEdit};
    this.albumService.updateAlbum(updated).subscribe({
      next: () => {
        this.album = updated;
        this.saving = false;
        alert('Saved!');
      },
      error: () => {alert('Error. Save failed'); this.saving = false;}
    });
  }

  viewPhotos() {
    if (this.album) {
      this.router.navigate(['/albums', this.album.id, 'photos']);
    }
  }

  back() {
    this.router.navigate(['/albums']);
  }

}
