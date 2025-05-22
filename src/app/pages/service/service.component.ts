import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';



@Component({
  selector: 'app-service',
  imports: [CarouselModule, ButtonModule, TagModule, CheckboxModule, CommonModule,
    FormsModule,        // ✅ Required for [(ngModel)]
  ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
  checkboxes: { key: string; label: string; value: boolean | null }[] = [
    { key: 'item1', label: 'المحتوى غير ذي صلة', value: false },
    { key: 'item2', label: 'المحتوى غير دقيق', value: false },
    { key: 'item3', label: 'المحتوى طويل جدًا', value: false },
    { key: 'item4', label: 'شيء آخر', value: false }
  ];

  cycleState(index: number) {
    const current = this.checkboxes[index].value;
    this.checkboxes[index].value =
      current === false ? null : current === null ? true : false;
  }

  rating = undefined;

  products = [
    { name: 'عنوان البطاقة', desc: "نص إضافي لمحتوى البطاقة", tag1: "وسم", tag2: "وسم", tag3: "وسم" },
    { name: 'عنوان البطاقة', desc: "نص إضافي لمحتوى البطاقة", tag1: "وسم", tag2: "وسم", tag3: "وسم" },
    { name: 'عنوان البطاقة', desc: "نص إضافي لمحتوى البطاقة", tag1: "وسم", tag2: "وسم", tag3: "وسم" },
    { name: 'عنوان البطاقة', desc: "نص إضافي لمحتوى البطاقة", tag1: "وسم", tag2: "وسم", tag3: "وسم" },
    { name: 'عنوان البطاقة', desc: "نص إضافي لمحتوى البطاقة", tag1: "وسم", tag2: "وسم", tag3: "وسم" },
    { name: 'عنوان البطاقة', desc: "نص إضافي لمحتوى البطاقة", tag1: "وسم", tag2: "وسم", tag3: "وسم" },
    { name: 'عنوان البطاقة', desc: "نص إضافي لمحتوى البطاقة", tag1: "وسم", tag2: "وسم", tag3: "وسم" },
    { name: 'عنوان البطاقة', desc: "نص إضافي لمحتوى البطاقة", tag1: "وسم", tag2: "وسم", tag3: "وسم" },
    { name: 'عنوان البطاقة', desc: "نص إضافي لمحتوى البطاقة", tag1: "وسم", tag2: "وسم", tag3: "وسم" },
    { name: 'عنوان البطاقة', desc: "نص إضافي لمحتوى البطاقة", tag1: "وسم", tag2: "وسم", tag3: "وسم" },
    { name: 'عنوان البطاقة', desc: "نص إضافي لمحتوى البطاقة", tag1: "وسم", tag2: "وسم", tag3: "وسم" },
    { name: 'عنوان البطاقة', desc: "نص إضافي لمحتوى البطاقة", tag1: "وسم", tag2: "وسم", tag3: "وسم" }
  ];

  responsiveOptions = [
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
      numVisible: 1,
      numScroll: 1
    }
  ];

  feedbackSubmittedSection = false;
  pageHelpfulForm = false;
  /**
   * Sir also I'll suggest to break these big components to smaller components and
      reuse them. that would make your life easier as well.
      also, a quick feedback: maybe you can import tailwind in it so the css is not super tightly coupled 
      with the html templates and more lean. if time permits
   */


  public submitFeedback(): void {
    // Handle the feedback submission logic here
    this.feedbackSubmittedSection = true;
    console.log('Feedback submitted:', this.checkboxes);
  }

  public submitPageHelpfulForm(): void {
    // Handle the page helpfulness submission logic here
    this.pageHelpfulForm = true;
    console.log('Page helpfulness submitted:', this.rating);
  }

  /**
   * Helper function
   */
  private esetFeedback(): void {
    // Reset the checkboxes and feedback submission status
    this.checkboxes.forEach(checkbox => checkbox.value = false);
    this.feedbackSubmittedSection = false;
  }

  public isCheckboxChecked(index: number): boolean {
    return this.checkboxes[index].value === true;
  }
}