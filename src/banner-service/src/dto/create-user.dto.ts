import { IsEmail, IsNotEmpty, IsOptional, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Length(1, 100)
  name: string;

  @IsNotEmpty()
  @Length(1, 100)
  document: string;

  @IsNotEmpty()
  @Length(1, 100)
  company: string;

  @IsNotEmpty()
  @Length(1, 100)
  charge: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @Length(7, 20)
  phone?: string;
  accept_personal_data_use: boolean;
  receive_certificate: boolean;
}
