import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models';
import { AccountService } from 'src/app/_services';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {
  user: User;

  constructor(private accountService: AccountService) {
      // this.user = this.accountService.userValue;
      this.accountService.user.subscribe(x => this.user = x);
  }

  

  logout() {
      this.accountService.logout();
  }
  
   name: any='Matthew Murphy';
   company: any ='';
   position: any='';
   department: any='';
   phone:any='';
   mobile: any='';
   website:any='';
   skype: any='';
   email:any='';
   address:any='';
   imageUrl:any='https://img.mysignature.io/p/6/5/9/65978094-291c-58bb-953f-3bac04d6fd46.png?time=1592495530';
   bannerUrl:any='';
   facebookLink: any='';
   instagramLink: any='';
   twitterLink: any='';
   linkedinLink: any='';
   value:any='';
   
  
 
   ngOnInit(): void {
   }
   reviewFunction(){
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
       document.getElementById('facebookLink').innerHTML = this.facebookLink.value;
       document.getElementById('instagramLink').innerHTML = this.instagramLink.value;
       document.getElementById('twitterLink').innerHTML = this.twitterLink.value;
       document.getElementById('linkedinLink').innerHTML = this.linkedinLink.value;
       }
 }
 

getFunction(){
	if (document.getElementById('get')) { 
		var e=document.getElementById("htmlcode");
      var content=e.innerHTML;
      alert(content);
       this.value=content
 		}
 	
    }
copyCode(){
  if (document.getElementById('get')) { 
		var e=document.getElementById("htmlcode");
      var content=e.innerHTML;
      
       this.value=content
 		}
 
}
getFunction1(){
	if (document.getElementById('get1')) { 
		var e=document.getElementById("htmlcode1");
      var content=e.innerHTML;
      alert(content);
       this.value=content
 		}
 	
    }
copyCode1(){
  if (document.getElementById('get1')) { 
		var e=document.getElementById("htmlcode1");
      var content=e.innerHTML;
      
       this.value=content
 		}
 
}
getFunction2(){
	if (document.getElementById('get2')) { 
		var e=document.getElementById("htmlcode2");
      var content=e.innerHTML;
      alert(content);
       this.value=content
 		}
 	
    }
copyCode2(){
  if (document.getElementById('get2')) { 
		var e=document.getElementById("htmlcode2");
      var content=e.innerHTML;
      
       this.value=content
 		}
 
}
getFunction3(){
	if (document.getElementById('get3')) { 
		let e=document.getElementById("htmlcode3");
      let content=e.innerHTML;
      alert(content);
       this.value=content
 		}
 	
    }
copyCode3(){
  if (document.getElementById('get3')) { 
		let e=document.getElementById("htmlcode3");
      let content=e.innerHTML;
      
       this.value=content
 		}
 
}
getFunction4(){
	if (document.getElementById('get4')) { 
		let e=document.getElementById("htmlcode4");
      let content=e.innerHTML;
      alert(content);
       this.value=content
 		}
 	
    }
copyCode4(){
  if (document.getElementById('get4')) { 
		let e=document.getElementById("htmlcode4");
      let content=e.innerHTML;
      
       this.value=content
 		}
 
}

getFunction5(){
	if (document.getElementById('get5')) { 
		let e=document.getElementById("htmlcode5");
      let content=e.innerHTML;
      alert(content);
       this.value=content
 		}
 	
    }
copyCode5(){
  if (document.getElementById('get5')) { 
		let e=document.getElementById("htmlcode5");
      let content=e.innerHTML;
      
       this.value=content
 		}
 
}
getFunction6(){
	if (document.getElementById('get6')) { 
		let e=document.getElementById("htmlcode6");
      let content=e.innerHTML;
      alert(content);
       this.value=content
 		}
 	
    }
copyCode6(){
  if (document.getElementById('get6')) { 
		let e=document.getElementById("htmlcode6");
      let content=e.innerHTML;
      
       this.value=content
 		}
 
}
getFunction7(){
	if (document.getElementById('get7')) { 
		let e=document.getElementById("htmlcode7");
      let content=e.innerHTML;
      alert(content);
       this.value=content
 		}
 	
    }
copyCode7(){
  if (document.getElementById('get7')) { 
		let e=document.getElementById("htmlcode7");
      let content=e.innerHTML;
      
       this.value=content
 		}
 
}
getFunction8(){
	if (document.getElementById('get8')) { 
		let e=document.getElementById("htmlcode8");
      let content=e.innerHTML;
      alert(content);
       this.value=content
 		}
 	
    }
copyCode8(){
  if (document.getElementById('get8')) { 
		let e=document.getElementById("htmlcode8");
      let content=e.innerHTML;
      
       this.value=content
 		}
 
}
getFunction9(){
	if (document.getElementById('get9')) { 
		let e=document.getElementById("htmlcode9");
      let content=e.innerHTML;
      alert(content);
       this.value=content
 		}
 	
    }
copyCode9(){
  if (document.getElementById('get9')) { 
		let e=document.getElementById("htmlcode9");
      let content=e.innerHTML;
      
       this.value=content
 		}
 
}
getFunction10(){
	if (document.getElementById('get10')) { 
		let e=document.getElementById("htmlcode10");
      let content=e.innerHTML;
      alert(content);
       this.value=content
 		}
 	
    }
copyCode10(){
  if (document.getElementById('get10')) { 
		let e=document.getElementById("htmlcode10");
      let content=e.innerHTML;
      
       this.value=content
 		}
 
}

}
