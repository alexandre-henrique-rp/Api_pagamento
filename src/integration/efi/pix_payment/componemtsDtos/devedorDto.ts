import { IsString } from 'class-validator';
import { MandatoryParameterDecorator } from 'src/core/Decorators/dtoProperty/madatory-parameter.decorator';

/**
 * A description of the entire function.
 *
 * @param nome - nome do devedor
 * @param cnpj - CNPJ do devedor
 * @return {any} {nome, cnpj}
 */
export class DevedorDto {
  @MandatoryParameterDecorator({
    description: 'Nome do devedor',
    type: String,
    example: 'Joaão da Silva',
  })
  @IsString()
  nome: string;

  @MandatoryParameterDecorator({
    description: 'CNPJ do devedor',
    type: String,
    example: '12345678901234',
  })
  @IsString()
  cnpj: string;
}
