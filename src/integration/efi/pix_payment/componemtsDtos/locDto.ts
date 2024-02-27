import { IsNumber, IsString } from 'class-validator';
import { MandatoryParameterDecorator } from 'src/core/Decorators/dtoProperty/madatory-parameter.decorator';

/**
 * A description of the entire function.
 *
 * @param id - id da localização
 * @param location - string de localização pg
 * @param tipoCob - tipo de cobrança
 * @return {any} {id, location, tipoCob}
 */
export class LocDto {
  @MandatoryParameterDecorator({
    description: 'id',
    type: Number,
  })
  @IsNumber()
  id: number;

  @MandatoryParameterDecorator({
    description: 'location',
    type: String,
  })
  @IsString()
  location: string;

  @MandatoryParameterDecorator({
    description: 'tipoCob',
    type: String,
  })
  @IsString()
  tipoCob: string;
}
