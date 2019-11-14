import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-files',
  templateUrl: './admin-files.component.html',
  styleUrls: ['./admin-files.component.css']
})
export class AdminFilesComponent implements OnInit {
  headerLogo = "assets/images/header-logo.svg"
  tab22acticeID = 'tab1'
  tab1acticeID = 'tab1'
  username = 'XXX'
  menu = [{
    title: '通用设置',
    children: [
      {title: '子内容1(禁用)', disabled: true},
      {title: '子内容1(禁用)', disabled: true},
    ]
  }, {
    title: '项目管理',
    open: true,
    children: [
      {title: '项目设置模版'},
      {title: '设置项目创建者'},
      {title: '项目和成员管理', active: true},
    ]
  }, {
    title: '编译构建',
    children: [
      {title: '子内容1(禁用)', disabled: true},
      {title: '子内容1(禁用)', disabled: true},
    ]
  }, {
    title: '私有依赖库' 
  }];
  constructor() { }

  ngOnInit() {
  }

}
