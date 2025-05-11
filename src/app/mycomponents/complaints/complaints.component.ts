import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss']
})
export class ComplaintsComponent implements OnInit {

  selectedCity: any;
  selectedCities: any[] = [];
  data: any[] =[];
  pieChartData :any;
  lineChartData : any;
  complaintsData : any[];
  complaintsDataMain : any[];
  priorityList : any[];
  priority :any = 1;
  supportTeam : any = 1;
  supportTeamList : any[];
  display : any;
  selectedComplaint : any;
  selectedComplaintStatus : any;
  constructor(
    private DataService: DataService,
  ) { 

    this.supportTeamList = DataService.complaints.supportTeamList;
    this.priorityList =  DataService.complaints.priorityList;
 

      this.complaintsData =  DataService.complaints.complaintsData;
      this.complaintsDataMain = this.complaintsData;


  }


  
  ngOnInit(): void {
  

  }

  Click_Search(value : any){
    this.complaintsData = this.complaintsDataMain;

    console.log(this.priority);
  
    if(this.priority.value != "All" && this.priority != 1){
      this.complaintsData  = this.complaintsData.filter(account => account.priority === this.priority.value);
   
    }

    if(this.supportTeam.value != "All" && this.supportTeam != 1){
      this.complaintsData  = this.complaintsData.filter(account => account.assignedTo === this.supportTeam.value);
   
    }


    
  
  }

  Click_Reset(){
    this.complaintsData = this.complaintsDataMain;
    this.priority = 1;
    this.supportTeam = 1;
  }

  displayInfo(value :any){
    this.display = true
    const complain = this.complaintsData.filter(account => account.complaintId == value);
    console.log(complain[0]);
    this.selectedComplaint = complain[0];
    this.selectedComplaintStatus = this.selectedComplaint.complaintStatus
  }

  statusChange(status: any,complaintId: any){
  console.log(status,complaintId);

  const complaint = this.complaintsData.find(c => c.complaintId === complaintId);
  this.selectedComplaintStatus = status;
  if (complaint) {
    complaint.complaintStatus = status;
  }
  console.log(this.complaintsData)
  }

}
