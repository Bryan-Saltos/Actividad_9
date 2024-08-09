import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  usuarios!:any[];
  constructor(private service: ApiService){}
  ngOnInit(){
    
    this.service.getData().subscribe({
      next: apirest=>{
        this.usuarios=apirest;
        console.log(apirest);
        
      }
    })

  }
}

