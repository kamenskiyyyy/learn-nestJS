import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateArticleDto {
  @IsOptional()
  @IsNotEmpty()
  readonly title: string;

  @IsOptional()
  @IsNotEmpty()
  readonly description: string;

  @IsOptional()
  @IsNotEmpty()
  readonly body: string;

  @IsOptional()
  readonly tagList?: string[];
}
