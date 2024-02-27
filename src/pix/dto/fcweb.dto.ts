import { IsDate, IsNumber, IsString } from 'class-validator';
import { MandatoryParameterDecorator } from 'src/core/Decorators/dtoProperty/madatory-parameter.decorator';
import { OptionalParameterDecorator } from 'src/core/Decorators/dtoProperty/optional-parameter.decorator';

export class FcwebDto {
  @MandatoryParameterDecorator({
    description: 'id',
    type: Number,
  })
  @IsNumber()
  id: number;

  @OptionalParameterDecorator({
    description: 's_alerta',
    type: String,
  })
  @IsString()
  s_alerta: string;

  @OptionalParameterDecorator({
    description: 'referencia',
    type: String,
  })
  @IsString()
  referencia: string;

  @OptionalParameterDecorator({
    description: 'id_boleto',
    type: String,
  })
  @IsString()
  id_boleto: string;

  @OptionalParameterDecorator({
    description: 'id_cancelar_bol_rem',
    type: String,
  })
  @IsString()
  id_cancelar_bol_rem: string;

  @OptionalParameterDecorator({
    description: 'unidade',
    type: String,
  })
  @IsString()
  unidade: string;

  @OptionalParameterDecorator({
    description: 'responsavel',
    type: String,
  })
  @IsString()
  responsavel: string;

  @OptionalParameterDecorator({
    description: 'criou_fc',
    type: String,
  })
  @IsString()
  criou_fc: string;

  @OptionalParameterDecorator({
    description: 'andamento',
    type: String,
  })
  @IsString()
  andamento: string;

  @OptionalParameterDecorator({
    description: 'prioridade',
    type: String,
  })
  @IsString()
  prioridade: string;

  @OptionalParameterDecorator({
    description: 'solicitacao',
    type: String,
  })
  @IsString()
  solicitacao: string;

  @OptionalParameterDecorator({
    description: 'venda',
    type: String,
  })
  @IsString()
  venda: string;

  @OptionalParameterDecorator({
    description: 'cpf',
    type: String,
  })
  @IsString()
  cpf: string;

  @OptionalParameterDecorator({
    description: 'cnpj',
    type: String,
  })
  @IsString()
  cnpj: string;

  @OptionalParameterDecorator({
    description: 'nome',
    type: String,
  })
  @IsString()
  nome: string;

  @OptionalParameterDecorator({
    description: 'razaosocial',
    type: String,
  })
  @IsString()
  razaosocial: string;

  @OptionalParameterDecorator({
    description: 'vectoboleto',
    type: Date,
  })
  @IsDate()
  vectoboleto: Date;

  @OptionalParameterDecorator({
    description: 'unico',
    type: String,
  })
  @IsString()
  unico: string;

  @OptionalParameterDecorator({
    description: 'contador',
    type: String,
  })
  @IsString()
  contador: string;

  @OptionalParameterDecorator({
    description: 'obscont',
    type: String,
  })
  @IsString()
  obscont: string;

  @OptionalParameterDecorator({
    description: 'comissaoparceiro',
    type: Number,
  })
  @IsNumber()
  comissaoparceiro: number;

  @OptionalParameterDecorator({
    description: 'scp',
    type: String,
  })
  @IsString()
  scp: string;

  @OptionalParameterDecorator({
    description: 'tipocd',
    type: String,
  })
  @IsString()
  tipocd: string;

  @OptionalParameterDecorator({
    description: 'valorcd',
    type: String,
  })
  @IsString()
  valorcd: string;

  @OptionalParameterDecorator({
    description: 'custocd',
    type: String,
  })
  @IsString()
  custocd: string;

  @OptionalParameterDecorator({
    description: 'custoCdpar',
    type: String,
  })
  @IsString()
  custoCdpar: string;

  @OptionalParameterDecorator({
    description: 'estatos_pgto',
    type: String,
  })
  @IsString()
  estatos_pgto: string;

  @OptionalParameterDecorator({
    description: 'pgto_efi',
    type: String,
  })
  @IsString()
  pgto_efi: string;

  @OptionalParameterDecorator({
    description: 'formapgto',
    type: String,
  })
  @IsString()
  formapgto: string;

  @OptionalParameterDecorator({
    description: 'vouchersoluti',
    type: String,
  })
  @IsString()
  vouchersoluti: string;

  @OptionalParameterDecorator({
    description: 'ct_parcela',
    type: String,
  })
  @IsString()
  ct_parcela: string;

  @OptionalParameterDecorator({
    description: 'telefone',
    type: String,
  })
  @IsString()
  telefone: string;

  @OptionalParameterDecorator({
    description: 'telefone2',
    type: String,
  })
  @IsString()
  telefone2: string;

  @OptionalParameterDecorator({
    description: 'email',
    type: String,
  })
  @IsString()
  email: string;

  @OptionalParameterDecorator({
    description: 'dtnascimento',
    type: String,
  })
  @IsString()
  dtnascimento: string;

  @OptionalParameterDecorator({
    description: 'rg',
    type: String,
  })
  @IsString()
  rg: string;

  @OptionalParameterDecorator({
    description: 'cei',
    type: String,
  })
  @IsString()
  cei: string;

  @OptionalParameterDecorator({
    description: 'endereco',
    type: String,
  })
  @IsString()
  endereco: string;

  @OptionalParameterDecorator({
    description: 'nrua',
    type: String,
  })
  @IsString()
  nrua: string;

  @OptionalParameterDecorator({
    description: 'bairro',
    type: String,
  })
  @IsString()
  bairro: string;

  @OptionalParameterDecorator({
    description: 'complemento',
    type: String,
  })
  @IsString()
  complemento: string;

  @OptionalParameterDecorator({
    description: 'cep',
    type: String,
  })
  @IsString()
  cep: string;

  @OptionalParameterDecorator({
    description: 'uf',
    type: String,
  })
  @IsString()
  uf: string;

  @OptionalParameterDecorator({
    description: 'im',
    type: Number,
  })
  @IsNumber()
  im: number;

  @OptionalParameterDecorator({
    description: 'cidade',
    type: String,
  })
  @IsString()
  cidade: string;

  @OptionalParameterDecorator({
    description: 'observacao',
    type: String,
  })
  @IsString()
  observacao: string;

  @OptionalParameterDecorator({
    description: 'vctoCD',
    type: Date,
  })
  vctoCD: Date;

  @OptionalParameterDecorator({
    description: 'historico',
    type: String,
  })
  @IsString()
  historico: string;

  @OptionalParameterDecorator({
    description: 'arquivo',
    type: String,
  })
  @IsString()
  arquivo: string;

  @OptionalParameterDecorator({
    description: 'nomearquivo',
    type: String,
  })
  @IsString()
  nomearquivo: string;

  @OptionalParameterDecorator({
    description: 'obsrenovacao',
    type: String,
  })
  @IsString()
  obsrenovacao: string;

  @OptionalParameterDecorator({
    description: 'dt_aprovacao',
    type: Date,
  })
  dt_aprovacao: Date;

  @OptionalParameterDecorator({
    description: 'comicao',
    type: Number,
  })
  @IsNumber()
  comicao: number;

  @OptionalParameterDecorator({
    description: 'validacao',
    type: String,
  })
  @IsString()
  validacao: string;

  @OptionalParameterDecorator({
    description: 'nfe',
    type: String,
  })
  @IsString()
  nfe: string;

  @OptionalParameterDecorator({
    description: 'urlnota',
    type: String,
  })
  @IsString()
  urlnota: string;

  @OptionalParameterDecorator({
    description: 'id_fcw_soluti',
    type: String,
  })
  @IsString()
  id_fcw_soluti: string;

  @OptionalParameterDecorator({
    description: 'dt_agenda',
    type: Date,
  })
  dt_agenda: Date;

  @OptionalParameterDecorator({
    description: 'hr_agenda',
    type: Date,
  })
  hr_agenda: Date;

  @OptionalParameterDecorator({
    description: 'obs_agenda',
    type: String,
  })
  @IsString()
  obs_agenda: string;

  @OptionalParameterDecorator({
    description: 'reg_cnh',
    type: String,
  })
  @IsString()
  reg_cnh: string;

  @OptionalParameterDecorator({
    description: 'createdAt',
    type: Date,
  })
  createdAt: Date;

  @OptionalParameterDecorator({
    description: 'updatedAt',
    type: Date,
  })
  updatedAt: Date;
}
