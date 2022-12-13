import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  selectedFile! : File;
  imgUrl: any
  message!: string;
  constructor( private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onFileSelected(event:any) {
    if (event.target.files.length > 0) {
      this.selectedFile=<File>event.target.files[0];
      console.log(event);
      var reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = (_event) => {
        this.imgUrl = reader.result;
      }
    }
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.httpClient.put('http://localhost:8080/upload/7', formData
    , { observe: 'response' })
    .subscribe((response) => {
      if (response.status === 200) {
        this.message = 'Image uploaded successfully';
      } else {
        this.message = 'Image not uploaded successfully';
      }
      this.router.navigate(['/home']);

    }
    );
  }
}