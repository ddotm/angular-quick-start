import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Config} from '../common/config';
import {FooterVm} from './footer-vm';

@Component({
  selector: 'aqs-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  private vm: FooterVm = new FooterVm();
  private subject = new BehaviorSubject<FooterVm>(this.vm);
  public vm$: Observable<FooterVm> = this.subject.asObservable();

  constructor() {
  }

  ngOnInit(): void {
    this.vm.appName = Config.props.appName;
    this.subject.next(this.vm);
  }

  public displayFullInfo(): void {
    this.vm.envName = Config.props.envName;
    this.subject.next(this.vm);
  }
}
