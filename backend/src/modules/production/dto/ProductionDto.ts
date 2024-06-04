import {ApiProperty} from "@nestjs/swagger";

export class ProductionDto {

    @ApiProperty({
        description: 'Название продакшена',
        example: 'Yana',
    })
    readonly title: string;


    @ApiProperty({
        description: 'Описание продакшена',
        example: 'Крутой продакшен',
    })
    readonly description: string;


    @ApiProperty({
        description: 'Ссылка на аватарку продакшена',
        example: 'http:i.bb.com/krytaya_image',
    })
    readonly image: string;


    @ApiProperty({
        description: 'id владельца продакшена',
        example: '1',
    })
    readonly userId: number;
}