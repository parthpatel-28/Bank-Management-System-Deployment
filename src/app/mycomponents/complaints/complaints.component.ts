import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss'],
  providers: [MessageService] 
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
    private messageService: MessageService,
    private DataService: DataService,
  ) { 

    this.supportTeamList = DataService.complaints.supportTeamList;
    this.priorityList =  DataService.complaints.priorityList;
 

      this.complaintsData =  DataService.complaints.complaintsData;
      this.complaintsDataMain = this.complaintsData;


  }


  
  ngOnInit(): void {
  

  }

  showSuccess(value : string) {
    this.messageService.add({
      key: 'success',
      severity: 'success',
      summary: 'Done!',
      detail: value,
      life: 3000, 
    });
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
    this.showSuccess("Complaint moved to " +status + " Section")
  }
  console.log(this.complaintsData)
  }

  getColor(value: any) {
    switch (value) {
    case 'High':        // Rejected
      return { color: '#FF4D4F', backgroundColor: '#FFF1F0' };
    case 'Low':       // Approved
      return { color: '#28C76F', backgroundColor: '#F2FBF5' };
    case 'Medium': // In Review
     return { color: '#E5A800', backgroundColor: '#FFFBE6' };
    default:
      return { color: '#6C757D', backgroundColor: '#F8F9FA' }; // N/A / Unknown
  }
  }
}
