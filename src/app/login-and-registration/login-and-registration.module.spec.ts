import { LoginAndRegistrationModule } from './login-and-registration.module';

describe('LoginAndRegistrationModule', () => {
  let loginAndRegistrationModule: LoginAndRegistrationModule;

  beforeEach(() => {
    loginAndRegistrationModule = new LoginAndRegistrationModule();
  });

  it('should create an instance', () => {
    expect(loginAndRegistrationModule).toBeTruthy();
  });
});
