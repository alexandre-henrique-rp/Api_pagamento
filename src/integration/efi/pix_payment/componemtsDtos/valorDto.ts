import { IsString } from 'class-validator';
import { MandatoryParameterDecorator } from 'src/core/Decorators/dtoProperty/madatory-parameter.decorator';

export class ValorDto {
  @MandatoryParameterDecorator({
    description: 'Valor da transação',
    type: String,
    example: '567.89',
  })
  @IsString()
  original: string;
}
