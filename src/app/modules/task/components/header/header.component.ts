import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TestCourseService } from '@shared/services/test-course.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  menu: Array<{name:string, router:any}> = [
    {
      name: 'Link',
      router: []
    },
    {
      name: 'Requests',
      router: []
    },
    {
      name: 'Shipments',
      router: []
    },
    {
      name: 'Invoices',
      router: []
    },
    {
      name: 'Employees',
      router: []
    },
    {
      name: 'Settings',
      router: []
    }
  ]

  constructor(
    public testCourseService:TestCourseService){

  }
  ngOnInit(): void {
  }

}
