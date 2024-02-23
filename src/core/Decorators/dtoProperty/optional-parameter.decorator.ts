import { Type, applyDecorators } from '@nestjs/common';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

type OptionalParameterOptions = {
  description: string;
  type: string | Type<unknown> | [Type] | any;
  example?: any;
  enum?: any[] | Record<string, any>;
  enumName?: string;
};

/**
 * Description placeholder
 * @date 2/23/2024 - 2:01:11 PM
 *
 * @export
 * @param {OptionalParameterOptions} options - {description, type, example?, enum?, enumName? }
 * @Options description: string - descrição do parametro
 * @Options type: string | Type<unknown> | [Type] | any - parametro tipo
 * @Options example?: any - parametro exemplo
 * @Options enum?: any[] | Record<string, any>
 * @Options enumName?: string
 * @returns {*}
 */
export function OptionalParameterDecorator(
  options: OptionalParameterOptions,
): any {
  return applyDecorators(
    ApiPropertyOptional({
      description: options.description,
      type: options.type,
      example: options.example,
      enum: options.enum,
      enumName: options.enumName,
    }),
    IsOptional(),
  );
}
