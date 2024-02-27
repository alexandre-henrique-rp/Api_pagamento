import { IsNumber, IsObject, IsString } from 'class-validator';
import { calendarioDto } from './componemtsDtos/calendarioDto';
import { MandatoryParameterDecorator } from 'src/core/Decorators/dtoProperty/madatory-parameter.decorator';
import { LocDto } from './componemtsDtos/locDto';
import { DevedorDto } from './componemtsDtos/devedorDto';
import { ValorDto } from './componemtsDtos/valorDto';

/**
 * A description of the entire function.
 *
 * @param calendario - {criação, expiração}
 * @param txid
 * @param revisao
 * @param loc - {id, location, tipoCob}
 * @param location - location id de localização de cobrança
 * @param status
 * @param valor - {original}
 * @param devedor - {nome, cnpj}
 * @param valor - {original}
 * @param chave
 * @param solicitacaoPagador
 * @param pixCopiaECola
 * @return {any} {calendario, txid, revisao, loc, location, status, valor, devedor, valor, chave, solicitacaoPagador, pixCopiaECola}
 */
export class Pix_GenerateDto {
  @MandatoryParameterDecorator({
    description: 'calendario - {criação, expiração}',
    type: (): any => {
      calendarioDto;
    },
  })
  @IsObject()
  calendario: calendarioDto;

  @MandatoryParameterDecorator({
    description: 'txid',
    type: String,
  })
  @IsString()
  txid: string;

  @MandatoryParameterDecorator({
    description: 'revisao',
    type: Number,
  })
  @IsNumber()
  revisao: number;

  @MandatoryParameterDecorator({
    description: 'loc - {id, location, tipoCob}',
    type: (): any => {
      LocDto;
    },
  })
  @IsObject()
  loc: LocDto;

  @MandatoryParameterDecorator({
    description: 'location id de localização de cobrança',
    type: String,
  })
  @IsString()
  location: string;

  @MandatoryParameterDecorator({
    description: 'status',
    type: String,
  })
  @IsString()
  status: string;

  @MandatoryParameterDecorator({
    description: 'Devedor - {cpf, nome}',
    type: (): any => {
      DevedorDto;
    },
  })
  @IsObject()
  Devedor: DevedorDto;

  @MandatoryParameterDecorator({
    description: 'Valor - {original}',
    type: (): any => {
      ValorDto;
    },
  })
  @IsObject()
  valor: ValorDto;

  @MandatoryParameterDecorator({
    description: 'chave',
    type: String,
  })
  @IsString()
  chave: string;

  @MandatoryParameterDecorator({
    description: 'solicitacaoPagador',
    type: String,
  })
  @IsString()
  solicitacaoPagador: string;

  @MandatoryParameterDecorator({
    description: 'pixCopiaECola',
    type: String,
  })
  @IsString()
  pixCopiaECola: string;
}
