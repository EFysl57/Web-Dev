import {Component, input} from '@angular/core';

// @Component({
//   selector: 'app-user',
//   template: ` <p>The user's name is {{name()}}</p> 
//     <p>the user's occupation is {{occupation()}}</p>`,
// })
// export class User {
//   occupation = input<string>();
//   readonly name = input<string>();
// }




//Optimizing images
// import {NgOptimizedImage} from '@angular/common';

// @Component({
//   selector: 'app-user',
//   template: `
//     <p>Username: {{ username }}</p>
//     <p>Preferred Framework:</p>
//     <ul>
//       <li>
//         Static Image:
//         <img ngSrc="/logo.svg" alt="Angular logo" width="32" height="32" />
//       </li>
//       <li>
//         Dynamic Image:
//         <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
//       </li>
//     </ul>
//   `,
//   imports: [NgOptimizedImage],
// })
// export class User {
//   logoUrl = '/logo.svg';
//   logoAlt = 'Angular logo';
//   username = 'youngTech';
// }




//Define a route
// @Component({
//   selector: 'app-user',
//   template: ` <div>Username: {{ username }}</div> `,
// })
// export class User {
//   username = 'youngTech';
// }


//Forms
// import {FormsModule} from '@angular/forms';

// @Component({
//   selector: 'app-user',
//   template: `
//     <p>Username: {{ username }}</p>
//     <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
//     <label for="framework">
//       Favorite Framework:
//       <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
//     </label>
//   `,
//   imports: [FormsModule],
// })
// export class User {
//   favoriteFramework = '';
//   username = 'youngTech';
// }


//Getting form control values
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Framework: {{favoriteFramework}}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
    <button (click)="showFramework()">Show Framework</button>
  `,
  imports: [FormsModule],
})
export class User {
  favoriteFramework = '';
  username = 'youngTech';

  showFramework() {
    alert(this.favoriteFramework);
  }
}
