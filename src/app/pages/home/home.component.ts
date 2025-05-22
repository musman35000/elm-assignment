import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-home',
  imports: [CarouselModule, ButtonModule, TagModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

 products = [
    { name: 'عنوان البطاقة', desc: "نص إضافي لمحتوى البطاقة", tag1: "وسم",tag2: "وسم",tag3: "وسم"},
    { name: 'عنوان البطاقة', desc: "نص إضافي لمحتوى البطاقة", tag1: "وسم",tag2: "وسم",tag3: "وسم"},
    { name: 'عنوان البطاقة', desc: "نص إضافي لمحتوى البطاقة", tag1: "وسم",tag2: "وسم",tag3: "وسم"},
    { name: 'عنوان البطاقة', desc: "نص إضافي لمحتوى البطاقة", tag1: "وسم",tag2: "وسم",tag3: "وسم"},
    { name: 'عنوان البطاقة', desc: "نص إضافي لمحتوى البطاقة", tag1: "وسم",tag2: "وسم",tag3: "وسم"},
    { name: 'عنوان البطاقة', desc: "نص إضافي لمحتوى البطاقة", tag1: "وسم",tag2: "وسم",tag3: "وسم"},
    { name: 'عنوان البطاقة', desc: "نص إضافي لمحتوى البطاقة", tag1: "وسم",tag2: "وسم",tag3: "وسم"},
    { name: 'عنوان البطاقة', desc: "نص إضافي لمحتوى البطاقة", tag1: "وسم",tag2: "وسم",tag3: "وسم"},
    { name: 'عنوان البطاقة', desc: "نص إضافي لمحتوى البطاقة", tag1: "وسم",tag2: "وسم",tag3: "وسم"},
    { name: 'عنوان البطاقة', desc: "نص إضافي لمحتوى البطاقة", tag1: "وسم",tag2: "وسم",tag3: "وسم"},
    { name: 'عنوان البطاقة', desc: "نص إضافي لمحتوى البطاقة", tag1: "وسم",tag2: "وسم",tag3: "وسم"},
    { name: 'عنوان البطاقة', desc: "نص إضافي لمحتوى البطاقة", tag1: "وسم",tag2: "وسم",tag3: "وسم"}
  ];

  responsiveOptions = [
    {
      breakpoint: '1366px',
      numVisible: 5,
      numScroll: 5
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 5
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 3,
      numScroll: 3
    }
  ];

    responsiveOptions1 = [
      {
      breakpoint: '1366px',
      numVisible: 10,
      numScroll: 0
    },
    {
      breakpoint: '1024px',
      numVisible: 4,
      numScroll: 0
    },
    {
      breakpoint: '768px',
      numVisible: 3,
      numScroll: 0
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 0
    }
  ];

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return '';
    }
  }
}
