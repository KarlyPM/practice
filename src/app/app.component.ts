import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FavoriteComponent } from './favorite/favorite.component';
import { ProfileEditorComponent } from './dynamic-forms/dynamic-forms.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FavoriteComponent,ProfileEditorComponent,UserProfileComponent,FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Karla';
  age = 18;
  imageUrl = 'https://th.bing.com/th/id/R.8f8b7d05a67df89f136fedefde9d6f0a?rik=Nbocdilm9hLbYQ&riu=http%3a%2f%2fwww.dog-learn.com%2fdog-breeds%2fjack-russell-terrier%2fimages%2fjack-russell-terrier-u7.jpg&ehk=a%2bP1rwDn1%2fQgGIxpYIdlyUc2jIe9MGn1RPhYIjhHI7I%3d&risl=&pid=ImgRaw&r=0';
  isButtonDisable = true;

  person={
    name: 'Pamela',
    age: 18,
    isButtonDisable: false,
    imageUrl:'https://th.bing.com/th/id/R.8f8b7d05a67df89f136fedefde9d6f0a?rik=Nbocdilm9hLbYQ&riu=http%3a%2f%2fwww.dog-learn.com%2fdog-breeds%2fjack-russell-terrier%2fimages%2fjack-russell-terrier-u7.jpg&ehk=a%2bP1rwDn1%2fQgGIxpYIdlyUc2jIe9MGn1RPhYIjhHI7I%3d&risl=&pid=ImgRaw&r=0'
  }

  onButtonClick(){
    this.isButtonDisable = !this.isButtonDisable;
  }

  increaseAge(){
    this.person.age++;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  
  changeName(event: Event){
    const element = event.target as HTMLInputElement;

    this.person.name = element.value;
  }
}
