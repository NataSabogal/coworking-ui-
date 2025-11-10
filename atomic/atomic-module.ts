import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from './atoms/button/button';
import { Input } from './atoms/input/input';
import { Label } from './atoms/label/label';
import { FormField } from './molecules/form-field/form-field';
import { InputGroup } from './molecules/input-group/input-group';
import { LoginForm } from './organisms/login-form/login-form';
import { RegisterForm } from './organisms/register-form/register-form';
import { AuthTemplate } from './templates/auth-template/auth-template';
import { MainTemplate } from './templates/main-template/main-template';
import { DesignShowcase } from './pages/design-showcase/design-showcase';



@NgModule({
  declarations: [
    Button,
    Input,
    Label,
    FormField,
    InputGroup,
    LoginForm,
    RegisterForm,
    AuthTemplate,
    MainTemplate,
    DesignShowcase
  ],
  imports: [
    CommonModule
  ]
})
export class AtomicModule { }
