import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/SERVICES/auth.service';
import { Router, RoutesRecognized } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage'
// import { AppRoutingModule } from '../app-routing.module'
import { finalize } from 'rxjs/operators'
import { Product } from './product.model'
import { AdminService } from '../../SERVICES/admin.service'
import { v4 as uuidv4 } from 'uuid'
import { format, compareAsc } from 'date-fns'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  isAuthenticated: any;

  categories: string [] = ['Home Decor', 'Food & Drink', 'Women', 'Beauty & Wellness', 'Jewelry', 'Paper & Novelty', 'Kids & Baby', 'Pets', 'Men']

  backgroundFile: File = {} as File
  products: Product [] = []
  imageUrl: string = ''
  imagePreview: any
  selectedFile = null
  stringState: boolean = true
  currentUser: string = ''
  user: any = firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.user = user.email;
    }
  });

  constructor(private authservice: AuthService, private router: Router, private storage: AngularFireStorage, private adminService: AdminService ) { }


  ngOnInit(): void {
    // this.authservice.getAuthStatus();
    this.authservice.currentAuthStatus.subscribe(authStatus => this.isAuthenticated = authStatus)
    // this.adminService.getProducts().subscribe(res => {
    //   console.log(res);
    //   this.products = res
    // })




  }
  // File handler and image preview
  onFileClicked(event: any, field: string) {
    const reader = new FileReader()
    this.backgroundFile = event.target.files[0]
    console.log(event, 'backgroundFile', this.backgroundFile);

    if (!this.backgroundFile.type.includes('image')) {
      (<HTMLInputElement>document.getElementById('file')).value = ''
      return alert('only images required')
    }
    // Creating the path for our image;
    let filePath = `productImages/${this.backgroundFile.name}`

    // Create the path for our firebase console
    let fireStoragePath = this.storage.ref(filePath)

    // Uploading the image
    console.log("test");

    let uploadObs = this.storage.upload(filePath, this.backgroundFile)
    uploadObs.snapshotChanges().pipe(
      finalize(() => {
        fireStoragePath.getDownloadURL().subscribe(url => {
          this.imageUrl = url
          console.log(this.imageUrl);
        })
      })
    ).subscribe()

    reader.readAsDataURL(this.backgroundFile)
    reader.onload = () => {
      this.imagePreview = reader.result
    }
  }
  // Pushing Form to Firestore after submitting
  onSubmit(form: NgForm) {
    if (this.imageUrl != "") {
      console.log(form.value);
      const value: Product = {
        ...form.value,
        imageUrl: this.imageUrl,
        id: uuidv4(),
        createdAt: format(Date.now(), 'dd/MM/yyyy'),
        createdBy: this.user
      }
      this.adminService.addProduct(value)
      .then((res) => {
        console.log(res);
        alert("Product has been added successfully")
      })
      .catch(err => {})
      form.resetForm()
    } else {
      alert('You forget to add Images')
    }
  }

  signOut(){
    this.authservice.signOut()
  }
  ngOnDestroy(){
  }
  // Sign in form function
  signUserIn(form: NgForm){
    this.authservice.signIn(
      form.value.email,
      form.value.password)
     form.resetForm();

   };
 // Not sure about this function atm
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

  }
  // Function for switching loggin and Forgotten password view
  onClick() {
    this.stringState = !this.stringState;
  }
}

