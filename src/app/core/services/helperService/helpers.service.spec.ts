import { MatSnackBar } from "@angular/material/snack-bar";
import { TestBed } from "@angular/core/testing";
import { HelpersService } from "./helpers.service";
import { CustomSnackbarComponent } from '@modules/shared/components/customsnackbar/customsnackbar.component';
import { MaterialModule } from '@modules/shared/material/material.module';

describe("HelpersService", () => {
  let service: HelpersService;
  let a;
  let b;
  let c;
  const snackMock = {
    open: () => {}
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomSnackbarComponent],
      imports: [MaterialModule],
      providers: [{
        provide: MatSnackBar,
        useValue: snackMock
      },
]
    }).compileComponents();
    a = "Test";
    b = "X";
    c = "suc";
    service = TestBed.inject(HelpersService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should not validateEmail", () => {
    service.validateEmail("random string");
    expect(service.validateEmail("random string")).toBeFalsy();
  });

  it("should validateEmail", () => {
    expect(service.validateEmail("taufeek.khan@primussoft.com")).toBeTruthy();
  });

  it('should copy text in clipboard', () => {
    spyOn(service, 'copiedToClipboard').and.callThrough();
    service.copiedToClipboard('Text Copied!');
    expect(service.copiedToClipboard).toHaveBeenCalled();
  });
});
