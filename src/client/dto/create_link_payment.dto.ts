import { IsDate, IsString } from 'class-validator';
import { OptionalParameterDecorator } from 'src/core/Decorators/dtoProperty/optional-parameter.decorator';

/**
 * Description placeholder
 * @date 23/02/2024 - 14:02:03
 *
 * @export
 * @class Create_link_payment
 * @Param Date_int - Data de inicio do link de pagamento
 * @Param Status_pg - status do pagamento
 */
export class Create_link_payment {
  @OptionalParameterDecorator({
    description: 'Data de inicio do link de pagamento',
    type: Date,
  })
  @IsDate()
  Date_int: Date;

  @OptionalParameterDecorator({
    description: 'status do pagamento',
    type: String,
  })
  @IsString()
  Status_pg: string;
}
