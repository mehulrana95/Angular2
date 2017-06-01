import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  newServer = false;
  serverStatusProfile = "Server was not created";
  newChangedServer = "TestServer";

  constructor() {
    setTimeout(() => {
      this.newServer = true;
    },1000);
  }

  ngOnInit() {
  }

  onServerChange(){
    this.serverStatusProfile = "Server Created !";
  }

  onUpdateServerName(event: Event){
    this.newChangedServer = (<HTMLInputElement>event.target).value;
  }

}
