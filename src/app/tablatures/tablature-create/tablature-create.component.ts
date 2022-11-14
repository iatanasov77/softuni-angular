import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ITablature } from '../../interfaces/tablature';

@Component({
  selector: 'app-tablature-create',
  templateUrl: './tablature-create.component.html',
  styleUrls: ['./tablature-create.component.scss']
})
export class TablatureCreateComponent implements OnInit {

  tablatures: ITablature[] | null = null;
  errorFetcingData = false;

  constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        
    }
}
