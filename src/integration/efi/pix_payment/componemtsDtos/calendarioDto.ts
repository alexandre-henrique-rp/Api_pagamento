import { IsNumber, IsString } from 'class-validator';
import { MandatoryParameterDecorator } from 'src/core/Decorators/dtoProperty/madatory-parameter.decorator';

/**
 * A description of the entire function.
 *
 * @param criacao - data de criação
 * @param expiracao - expiração em segundos
 * @return {any} {criação, expiração}
 */
export class calendarioDto {
  @MandatoryParameterDecorator({
    description: 'data de criação',
    type: String,
  })
  @IsString()
  criacao: string;

  @MandatoryParameterDecorator({
    description: 'expiração em segundos',
    type: Number,
  })
  @IsNumber()
  expiracao: number;
}
