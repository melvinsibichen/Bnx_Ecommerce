import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bnx-dashboard',
  templateUrl: './bnx-dashboard.component.html',
  styleUrls: ['./bnx-dashboard.component.scss']
})
export class BnxDashboardComponent {
  showLoginAlert() {
    Swal.fire({
      title: 'Please Login',
      icon: 'warning',
      confirmButtonText: 'ok',

    }).then((result) => {

    });
  }
}
