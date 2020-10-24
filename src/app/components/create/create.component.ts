import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { User } from 'src/app/_models';
import { AccountService } from 'src/app/_services';
import { NgForm } from '@angular/forms';
import { Users } from '../../Users.model';
import { ImagesService } from '../../shared/images.service';
import { UserService } from '../../shared/user.service';
import { TemplateService } from '../../shared/template.service';
import { SocialService } from '../../shared/social.service';
import { from } from 'rxjs';
import { Templates } from 'src/app/templates.model';
import { Social } from 'src/app/social.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  @Input() userDetails = {
    name: 'Matthew Murphy',
    company: '',
    position: '',
    department: '',
    phone: '',
    mobile: '',
    website: '',
    skype: '',
    email: '',
    address: '',
  };
  @Input() socialDetails = {
    facebookLink: '',
    instagramLink: '',
    twitterLink: '',
    linkedinLink: '',
  };
  @Input() templateDetails = {
    //To be added
  };
  @Input() imageDetails = {
    imageUrl:
      'https://img.mysignature.io/p/6/5/9/65978094-291c-58bb-953f-3bac04d6fd46.png?time=1592495530',
    bannerUrl: '',
  };
  @ViewChild('form') generalForm: NgForm;
  @ViewChild('formSocialMedia') socialForm: NgForm;
  @ViewChild('formImage') formImage: NgForm;

  users: any = [];
  templates: any = [];
  social: any = [];
  images: any = [];
  submitted = false;
  user: User;
  template: Templates;
  socials: Social;

  name: any = 'Matthew Murphy';
  company: any = '';
  position: any = '';
  department: any = '';
  phone: any = '';
  mobile: any = '';
  website: any = '';
  skype: any = '';
  email: any = '';
  address: any = '';
  imageUrl: any =
    'https://img.mysignature.io/p/6/5/9/65978094-291c-58bb-953f-3bac04d6fd46.png?time=1592495530';
  bannerUrl: any = '';
  facebookLink: any = '';
  instagramLink: any = '';
  twitterLink: any = '';
  linkedinLink: any = '';
  value: any = '';

  constructor(
    private accountService: AccountService,
    private userService: UserService,
    private templateService: TemplateService,
    private socialService: SocialService,
    private imagesService: ImagesService,
    public router: Router
  ) {
    // this.user = this.accountService.userValue;
    this.accountService.user.subscribe((x) => (this.user = x));
  }

  logout() {
    this.accountService.logout();
  }

  ngOnInit() {
    this.onfetchPosts();

    this.onfetchSocial();

    this.onfetchTemplate();

    this.onfetchImages();
  }
  onSubmit(userData) {
    this.userService.createUsers(this.userDetails).subscribe((data: {}) => {
      this.router.navigate(['/create']);
    });
    //console.log(this.generalForm);
    this.generalForm.reset();
  }

  onfetchPosts() {
    return this.userService.getUsers().subscribe((data: {}) => {
      this.users = data;
    });
  }

  onClearUsers(id) {
    if (window.confirm('Are you sure, you want to delete this User?')) {
      this.userService.deleteUsers(id).subscribe((data) => {
        this.onfetchPosts();
      });
    }
  }

  onSubmitSocial(socialData) {
    this.socialService
      .createSocial(this.socialDetails)
      .subscribe((data: {}) => {
        this.router.navigate(['/create']);
      });
    console.log(this.socialForm);
    this.socialForm.reset();
  }

  onfetchSocial() {
    return this.socialService.getSocials().subscribe((data: {}) => {
      this.social = data;
    });
  }

  onClearSocial(id) {
    if (window.confirm('Are you sure, you want to delete ?')) {
      this.socialService.deleteSocial(id).subscribe((data) => {
        this.onfetchSocial();
      });
    }
  }

  onSubmitTemplate(templateData) {
    this.templateService
      .createTemplates(this.templateDetails)
      .subscribe((data: {}) => {
        this.router.navigate(['/create']);
      });
    //console.log(this.generalForm);
    this.socialForm.reset();
  }

  onfetchTemplate() {
    return this.templateService.getTemplates().subscribe((data: {}) => {
      this.templates = data;
    });
  }

  onClearTemplate(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.templateService.deleteTemplates(id).subscribe((data) => {
        this.onfetchTemplate();
      });
    }
  }
  onSubmitImages(imageData) {
    this.imagesService.createImages(this.imageDetails).subscribe((data: {}) => {
      this.router.navigate(['/create']);
    });
    console.log(this.socialForm);
    this.socialForm.reset();
  }

  onfetchImages() {
    return this.imagesService.getImages().subscribe((data: {}) => {
      this.images = data;
    });
  }

  onClearImages(id) {
    if (window.confirm('Are you sure, you want to delete ?')) {
      this.socialService.deleteSocial(id).subscribe((data) => {
        this.onfetchSocial();
      });
    }
  }

  reviewFunction() {
    if (document.getElementById('review')) {
      document.getElementById('name').innerHTML = this.name.value;
      document.getElementById('company').innerHTML = this.company.value;
      document.getElementById('position').innerHTML = this.position.value;
      document.getElementById('department').innerHTML = this.department.value;
      document.getElementById('phone').innerHTML = this.phone.value;
      document.getElementById('mobile').innerHTML = this.mobile.value;
      document.getElementById('website').innerHTML = this.website.value;
      document.getElementById('skype').innerHTML = this.skype.value;
      document.getElementById('email').innerHTML = this.email.value;
      document.getElementById('address').innerHTML = this.address.value;
      document.getElementById('imageUrl').innerHTML = this.imageUrl.value;
      document.getElementById('bannerUrl').innerHTML = this.bannerUrl.value;
      document.getElementById(
        'facebookLink'
      ).innerHTML = this.facebookLink.value;
      document.getElementById(
        'instagramLink'
      ).innerHTML = this.instagramLink.value;
      document.getElementById('twitterLink').innerHTML = this.twitterLink.value;
      document.getElementById(
        'linkedinLink'
      ).innerHTML = this.linkedinLink.value;
    }
  }

  getFunction() {
    if (document.getElementById('get')) {
      let e = document.getElementById('htmlcode');
      let content = e.innerHTML;
      alert(content);
      this.value = content;
    }
  }
  copyCode() {
    if (document.getElementById('get')) {
      let e = document.getElementById('htmlcode');
      let content = e.innerHTML;

      this.value = content;
    }
  }
  getFunction1() {
    if (document.getElementById('get1')) {
      let e = document.getElementById('htmlcode1');
      let content = e.innerHTML;
      alert(content);
      this.value = content;
    }
  }
  copyCode1() {
    if (document.getElementById('get1')) {
      let e = document.getElementById('htmlcode1');
      let content = e.innerHTML;

      this.value = content;
    }
  }
  getFunction2() {
    if (document.getElementById('get2')) {
      let e = document.getElementById('htmlcode2');
      let content = e.innerHTML;
      alert(content);
      this.value = content;
    }
  }
  copyCode2() {
    if (document.getElementById('get2')) {
      let e = document.getElementById('htmlcode2');
      let content = e.innerHTML;

      this.value = content;
    }
  }
  getFunction3() {
    if (document.getElementById('get3')) {
      let e = document.getElementById('htmlcode3');
      let content = e.innerHTML;
      alert(content);
      this.value = content;
    }
  }
  copyCode3() {
    if (document.getElementById('get3')) {
      let e = document.getElementById('htmlcode3');
      let content = e.innerHTML;

      this.value = content;
    }
  }
  getFunction4() {
    if (document.getElementById('get4')) {
      let e = document.getElementById('htmlcode4');
      let content = e.innerHTML;
      alert(content);
      this.value = content;
    }
  }
  copyCode4() {
    if (document.getElementById('get4')) {
      let e = document.getElementById('htmlcode4');
      let content = e.innerHTML;

      this.value = content;
    }
  }

  getFunction5() {
    if (document.getElementById('get5')) {
      let e = document.getElementById('htmlcode5');
      let content = e.innerHTML;
      alert(content);
      this.value = content;
    }
  }
  copyCode5() {
    if (document.getElementById('get5')) {
      let e = document.getElementById('htmlcode5');
      let content = e.innerHTML;

      this.value = content;
    }
  }
  getFunction6() {
    if (document.getElementById('get6')) {
      let e = document.getElementById('htmlcode6');
      let content = e.innerHTML;
      alert(content);
      this.value = content;
    }
  }
  copyCode6() {
    if (document.getElementById('get6')) {
      let e = document.getElementById('htmlcode6');
      let content = e.innerHTML;

      this.value = content;
    }
  }
  getFunction7() {
    if (document.getElementById('get7')) {
      let e = document.getElementById('htmlcode7');
      let content = e.innerHTML;
      alert(content);
      this.value = content;
    }
  }
  copyCode7() {
    if (document.getElementById('get7')) {
      let e = document.getElementById('htmlcode7');
      let content = e.innerHTML;

      this.value = content;
    }
  }
  getFunction8() {
    if (document.getElementById('get8')) {
      let e = document.getElementById('htmlcode8');
      let content = e.innerHTML;
      alert(content);
      this.value = content;
    }
  }
  copyCode8() {
    if (document.getElementById('get8')) {
      let e = document.getElementById('htmlcode8');
      let content = e.innerHTML;

      this.value = content;
    }
  }
  getFunction9() {
    if (document.getElementById('get9')) {
      let e = document.getElementById('htmlcode9');
      let content = e.innerHTML;
      alert(content);
      this.value = content;
    }
  }
  copyCode9() {
    if (document.getElementById('get9')) {
      let e = document.getElementById('htmlcode9');
      let content = e.innerHTML;

      this.value = content;
    }
  }
  getFunction10() {
    if (document.getElementById('get10')) {
      let e = document.getElementById('htmlcode10');
      let content = e.innerHTML;
      alert(content);
      this.value = content;
    }
  }
  copyCode10() {
    if (document.getElementById('get10')) {
      let e = document.getElementById('htmlcode10');
      let content = e.innerHTML;

      this.value = content;
    }
  }
}
