import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Files } from '../../../../shaired/files.model';
import { ActivatedRoute} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PayhereService} from '../../../../services/payhere.service';

declare var payhere: any;

declare var M: any;

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
  course: string ;
  amount: number ; 
  payments : any;
 
  user = JSON.parse(localStorage.getItem("user")); 

  constructor(public alertController: AlertController, private PayService: PayhereService,private http: HttpClient, private route: ActivatedRoute ) { 
    let sstring = this.route.snapshot.paramMap.get('pay_course');
      this.course = sstring;
      console.log(sstring); 
      this. getrecord();
  }
   
  ngOnInit() {

    payhere.onCompleted=async (orderId)=>{
     
      const alert = await this.alertController.create({
        header: 'Alert',
        
        message: 'Payment Success.',
        buttons: ['ok']
      });
  
      await alert.present();

      console.log(this.course);
      console.log(this.amount);
      this.sendrecord();
      this.amount = null;
     this. getrecord();
  }

  payhere.onDismissed = async function onDismissed() {
    const alert = await this.alertController.create({
      header: 'Alert',
      
      message: 'Payment dismissed.',
      buttons: ['Cancel']
    });

    await alert.present();
    
  };

  payhere.onError = async function onError(error) {
    const alert = await this.alertController.create({
      header: 'Alert',
      
      message: 'Payment dismissed.',
      buttons: ['Cancel']
    });

    await alert.present();
  };

}


  async payNow(){

  const payment = {
    sandbox: true,
    merchant_id: '1213116',       // Replace your payhere Merchant ID /*Goto payhere account -> settings-> copy merchantId and replace */
    return_url: 'http://sample.com/return',
    cancel_url: 'http://sample.com/cancel',
    notify_url: 'http://sample.com/notify/',
    order_id: this.course+' 01', //replace value of this field as your requirement
    items: 'xxxxxx' ,
    amount: this.amount,
    currency: 'USD',
     adOwnerId: "xxxx", 
    first_name: "sunil",
    last_name: 'Perera',
    email: "sample_user@gmail.com",
    phone: '0771234567',
    address: 'No.1, Galle Road',
    city: 'Colombo',
    country: 'Sri Lanka',
    delivery_address: 'No. 46, Galle road, Kalutara South',
    delivery_city: 'Kalutara',
    delivery_country: 'Sri Lanka',

/**
* Above fields of payment are compulsory.
*/


  };

if(this.amount==null){

  const alert = await this.alertController.create({
    header: 'Alert',
    message: 'insert a value.',
    buttons: ['Cancel']
  });

  await alert.present();

}else if(this.amount%100 != 0){
  const alert = await this.alertController.create({
    header: 'Alert',
    
    message: 'insert value of multiply of 500',
    buttons: ['Cancel']
  });

  await alert.present();
}
else{
  payhere.startPayment(payment);
}
   




}

sendrecord(){

  this.PayService.postrecord({course:this.course, amount:this.amount, username:this.user.username}).then((result)=>{
    console.log('success');
  },(err)=>{
    console.log(err);
  });
  
  
  }

  getrecord(){
    this.PayService.getPaymentsByUsernameandcourse(this.user.username,this.course).then((result)=>{
      this.payments = result;
      console.log(this.payments);
    },(err)=>{
      console.log(err);
    });
  }


}