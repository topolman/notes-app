import { Component, Input, OnInit } from '@angular/core';
import { Note } from './../notes/note';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})

export class NoteDetailComponent implements OnInit {

  @Input() note?: Note;
  
  constructor() { }

  ngOnInit(): void {
  }

}
