import { Type } from 'class-transfomer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
    @Type(() => Number)
    @IsOptional()
    @IsPositive()
    limit: number;
  
    @Type(() => Number)
    @IsOptional()
    @IsPositive()
    offset: number;
  }