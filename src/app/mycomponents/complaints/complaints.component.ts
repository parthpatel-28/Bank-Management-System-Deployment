import { Component, OnInit } from '@angular/core';

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
  priorityList : any[];
  priority :any;
  supportTeam : any;
  supportTeamList : any[];
  constructor() { 

    this.supportTeamList = [
      { name: 'Support Team A', code: 'Support Team A' },
      { name: 'Support Team B', code: 'Support Team B' },
      { name: 'Support Team C', code: 'Support Team C' },
      { name: 'Support Team D', code: 'Support Team D' },
    ]
    this.priorityList = [
      { name: 'High', code: 'High' },
      { name: 'Low', code: 'Low' },
      { name: 'Medium', code: 'Medium' },
    ]


      this.complaintsData = [
        {
          complaintId: 'CPL001',
          customerName: 'John Doe',
          complaintType: 'Billing',
          complaintDescription: 'Incorrect billing for last month\'s transaction.',
          complaintDate: '2023-04-10',
          complaintStatus: 'Resolved',
          resolutionDetails: 'Refund processed to the customer.',
          resolutionDate: '2023-04-12',
          assignedTo: 'Support Team A',
          priority: 'High',
          followUpDate: '2023-04-15'
        },
        {
          complaintId: 'CPL002',
          customerName: 'Sarah Lee',
          complaintType: 'Technical Issue',
          complaintDescription: 'Unable to access my online account after password reset.',
          complaintDate: '2023-04-14',
          complaintStatus: 'Pending',
          resolutionDetails: null,
          resolutionDate: null,
          assignedTo: 'Support Team B',
          priority: 'Medium',
          followUpDate: '2023-04-16'
        },
        {
          complaintId: 'CPL003',
          customerName: 'Michael Brown',
          complaintType: 'Card Issue',
          complaintDescription: 'Card not working at ATM, blocked card.',
          complaintDate: '2023-04-15',
          complaintStatus: 'Resolved',
          resolutionDetails: 'Card blocked, new card issued.',
          resolutionDate: '2023-04-16',
          assignedTo: 'Support Team C',
          priority: 'Low',
          followUpDate: '2023-04-18'
        },
        {
          complaintId: 'CPL004',
          customerName: 'Emily Clark',
          complaintType: 'Fraud Alert',
          complaintDescription: 'Unauthorized transaction detected on my credit card.',
          complaintDate: '2023-04-16',
          complaintStatus: 'Under Investigation',
          resolutionDetails: null,
          resolutionDate: null,
          assignedTo: 'Security Team A',
          priority: 'High',
          followUpDate: '2023-04-18'
        },
        {
          complaintId: 'CPL005',
          customerName: 'David Smith',
          complaintType: 'General Inquiry',
          complaintDescription: 'Clarification on transaction limits for international usage.',
          complaintDate: '2023-04-17',
          complaintStatus: 'Resolved',
          resolutionDetails: 'Customer provided with transaction limits for international usage.',
          resolutionDate: '2023-04-17',
          assignedTo: 'Support Team D',
          priority: 'Low',
          followUpDate: '2023-04-20'
        },
        {
          complaintId: 'CPL006',
          customerName: 'Olivia Johnson',
          complaintType: 'Account Access',
          complaintDescription: 'Unable to reset account password.',
          complaintDate: '2023-04-17',
          complaintStatus: 'Pending',
          resolutionDetails: null,
          resolutionDate: null,
          assignedTo: 'Support Team B',
          priority: 'Medium',
          followUpDate: '2023-04-19'
        },
        {
          complaintId: 'CPL007',
          customerName: 'Robert Harris',
          complaintType: 'Card Issue',
          complaintDescription: 'Card blocked due to multiple failed login attempts.',
          complaintDate: '2023-04-18',
          complaintStatus: 'Resolved',
          resolutionDetails: 'Card unblocked and new PIN issued.',
          resolutionDate: '2023-04-19',
          assignedTo: 'Support Team C',
          priority: 'Medium',
          followUpDate: '2023-04-22'
        },
        {
          complaintId: 'CPL008',
          customerName: 'Sophia Williams',
          complaintType: 'Billing',
          complaintDescription: 'Wrong charges applied to the account for international transactions.',
          complaintDate: '2023-04-19',
          complaintStatus: 'Resolved',
          resolutionDetails: 'Charges corrected and refunded.',
          resolutionDate: '2023-04-21',
          assignedTo: 'Support Team A',
          priority: 'High',
          followUpDate: '2023-04-23'
        },
        {
          complaintId: 'CPL009',
          customerName: 'James Wilson',
          complaintType: 'Fraud Alert',
          complaintDescription: 'Fraudulent activity detected on the credit card.',
          complaintDate: '2023-04-20',
          complaintStatus: 'Under Investigation',
          resolutionDetails: null,
          resolutionDate: null,
          assignedTo: 'Security Team B',
          priority: 'High',
          followUpDate: '2023-04-22'
        },
        {
          complaintId: 'CPL010',
          customerName: 'Isabella Moore',
          complaintType: 'Technical Issue',
          complaintDescription: 'App crashes when accessing my bank statements.',
          complaintDate: '2023-04-21',
          complaintStatus: 'Pending',
          resolutionDetails: null,
          resolutionDate: null,
          assignedTo: 'Support Team C',
          priority: 'Medium',
          followUpDate: '2023-04-23'
        },
        {
          complaintId: 'CPL011',
          customerName: 'William Taylor',
          complaintType: 'Card Issue',
          complaintDescription: 'Card not working on online transactions.',
          complaintDate: '2023-04-22',
          complaintStatus: 'Resolved',
          resolutionDetails: 'Card reactivated for online transactions.',
          resolutionDate: '2023-04-23',
          assignedTo: 'Support Team A',
          priority: 'Low',
          followUpDate: '2023-04-25'
        },
        {
          complaintId: 'CPL012',
          customerName: 'Charlotte Martinez',
          complaintType: 'Account Access',
          complaintDescription: 'Unable to access my account after password reset.',
          complaintDate: '2023-04-23',
          complaintStatus: 'Resolved',
          resolutionDetails: 'Password reset successfully.',
          resolutionDate: '2023-04-23',
          assignedTo: 'Support Team B',
          priority: 'High',
          followUpDate: '2023-04-25'
        },
        {
          complaintId: 'CPL013',
          customerName: 'Ava Robinson',
          complaintType: 'General Inquiry',
          complaintDescription: 'Questions about cashback rewards on debit cards.',
          complaintDate: '2023-04-24',
          complaintStatus: 'Resolved',
          resolutionDetails: 'Customer provided with details on cashback rewards.',
          resolutionDate: '2023-04-24',
          assignedTo: 'Support Team C',
          priority: 'Low',
          followUpDate: '2023-04-26'
        },
        {
          complaintId: 'CPL014',
          customerName: 'Liam Davis',
          complaintType: 'Billing',
          complaintDescription: 'Discrepancy in the billing amount for the recent payment.',
          complaintDate: '2023-04-24',
          complaintStatus: 'Under Investigation',
          resolutionDetails: null,
          resolutionDate: null,
          assignedTo: 'Support Team D',
          priority: 'Medium',
          followUpDate: '2023-04-26'
        },
        {
          complaintId: 'CPL015',
          customerName: 'Mason Anderson',
          complaintType: 'Fraud Alert',
          complaintDescription: 'Unusual transaction detected in the account.',
          complaintDate: '2023-04-25',
          complaintStatus: 'Under Investigation',
          resolutionDetails: null,
          resolutionDate: null,
          assignedTo: 'Security Team A',
          priority: 'High',
          followUpDate: '2023-04-27'
        },
        {
          complaintId: 'CPL016',
          customerName: 'Ella Thomas',
          complaintType: 'Technical Issue',
          complaintDescription: 'Unable to link my external bank account to the app.',
          complaintDate: '2023-04-26',
          complaintStatus: 'Pending',
          resolutionDetails: null,
          resolutionDate: null,
          assignedTo: 'Support Team B',
          priority: 'Medium',
          followUpDate: '2023-04-28'
        },
        {
          complaintId: 'CPL017',
          customerName: 'Ethan Jackson',
          complaintType: 'Card Issue',
          complaintDescription: 'Card not working at POS terminals.',
          complaintDate: '2023-04-26',
          complaintStatus: 'Resolved',
          resolutionDetails: 'Card reactivated for POS usage.',
          resolutionDate: '2023-04-27',
          assignedTo: 'Support Team C',
          priority: 'Low',
          followUpDate: '2023-04-29'
        },
        {
          complaintId: 'CPL018',
          customerName: 'James White',
          complaintType: 'Account Access',
          complaintDescription: 'Cannot reset my account password.',
          complaintDate: '2023-04-27',
          complaintStatus: 'Resolved',
          resolutionDetails: 'Password reset successfully.',
          resolutionDate: '2023-04-27',
          assignedTo: 'Support Team A',
          priority: 'High',
          followUpDate: '2023-04-29'
        },
        {
          complaintId: 'CPL019',
          customerName: 'Benjamin Harris',
          complaintType: 'General Inquiry',
          complaintDescription: 'Questions regarding monthly service charges.',
          complaintDate: '2023-04-28',
          complaintStatus: 'Resolved',
          resolutionDetails: 'Customer clarified on monthly service charges.',
          resolutionDate: '2023-04-28',
          assignedTo: 'Support Team B',
          priority: 'Low',
          followUpDate: '2023-04-30'
        },
        {
          complaintId: 'CPL020',
          customerName: 'Sophie Clark',
          complaintType: 'Billing',
          complaintDescription: 'Discrepancy in the bill after a recent transaction.',
          complaintDate: '2023-04-28',
          complaintStatus: 'Pending',
          resolutionDetails: null,
          resolutionDate: null,
          assignedTo: 'Support Team D',
          priority: 'Medium',
          followUpDate: '2023-05-01'
        }
      ];



  }


  
  ngOnInit(): void {
  

  }

}
