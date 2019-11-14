import { Component, OnInit } from '@angular/core';
import { SourceType, originSource } from './mock-data.js';
import { Member } from '../member';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-admin-files-chart',
  templateUrl: './admin-files-chart.component.html',
  styleUrls: ['./admin-files-chart.component.scss']
})
export class AdminFilesChartComponent implements OnInit {
  members;
  member: Member = {
    id: 0,
    userName: '',
    nickName: '',
    userTag:'',
    businessUser:'',
    projectRole:'',
    accountSystem:'',
    isDisable:true,
    
    dob: new Date(),
    gender: 'Male',
  }
  showMemberEditor = false
  // basicDataSource: Array<SourceType> = JSON.parse(JSON.stringify(originSource.slice(0, 6)));
  dataTableOptions = {
    columns: [
        {
            field: 'userName',
            header: '用户名称',
            fieldType: 'text'
        },
        {
            field: 'nickName',
            header: '昵称',
            fieldType: 'text'
        },
        {
            field: 'userTag',
            header: '用户标签',
            fieldType: 'text'
        },
        {
            field: 'businessUser',
            header: '企业用户',
            fieldType: 'text'
        },
        {
            field: 'userTag',
            header: '用户标签',
            fieldType: 'text'
        },
        {
            field: 'userTag',
            header: '项目角色',
            fieldType: 'text'
        },
        {
            field: 'accountSystem',
            header: '账户体系',
            fieldType: 'text'
        },
        {
            field: 'isDisable',
            header: '是否禁用',
            fieldType: 'text'
        }
    ]
  };
  pager1 = {
    total: 100,
    pageIndex: 1,
    pageSize: 10
  };

  constructor(
    private contactService: ContactService
  ) {
    this.members = this.contactService.getMembers();
  }

  getBasicDataSource() {
    return JSON.parse(JSON.stringify(this.members));
  }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    originSource.slice(0, 6).map(member => {
      this.contactService.addToContact(member)
    })
  }
  
  onSearch(term) {
    console.log(term);
  }

  setTotal(number) {
    this.pager1.total = number;
  }

  setIndex(number: number) {
    this.pager1.pageIndex = number;
    console.log(this.pager1.pageIndex);
  }

  addMember() {
    this.clearMember()
    this.showMemberEditor = true
  }

  onMemberSubmit() {
    this.hideMemberEditor()
  }

  onMemberCancel() {
    this.hideMemberEditor()
  }

  hideMemberEditor() {
    this.showMemberEditor = false
  }

  clearMember() {
    this.member = {
      id: 0,
      userName: '',
      nickName: '',
      userTag:'',
      businessUser:'',
      projectRole:'',
      accountSystem:'',
      isDisable:true,
      
      dob: new Date(),
      gender: 'Male',
    }
  }

  editItem(rowIndex, rowItem) {
    this.member = this.members[rowIndex]
    this.showMemberEditor = true
  }

  deleteItem(rowIndex, rowItem) {
    this.member = this.members[rowIndex]
    this.contactService.deleteMemberById(this.member.id)
  }
}
