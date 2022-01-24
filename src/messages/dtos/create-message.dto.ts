import { IsString, IsNumber } from 'class-validator'

export class createMessageDto {
    @IsString()
    content: string;
}