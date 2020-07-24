import {Component, OnInit} from '@angular/core';
import {Config} from '../common/config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public envName: string = null;

  constructor() {
  }

  ngOnInit(): void {
    this.envName = Config.props.envName;
  }
}
