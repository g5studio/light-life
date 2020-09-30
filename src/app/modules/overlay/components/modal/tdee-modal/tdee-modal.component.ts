import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OverlayService } from '@services/overlay.service';

@Component({
  selector: 'app-tdee-modal',
  templateUrl: './tdee-modal.component.html',
  styleUrls: ['./tdee-modal.component.scss']
})
export class TdeeModalComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    public $overlay: OverlayService
  ) { }

  ngOnInit(): void {
    this.inital();
  }

  public form: FormGroup;

  private inital() {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
        confirm: ['', [Validators.required]],
      }
    )
  }

}
