import { Controller, Get, Query, Post, Body, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';
import {CatService} from "./cat.service";
import {Cat} from "./interfaces/cat.interface";

@Controller('cats')
export class CatController {
  constructor(private readonly catService: CatService) {
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    "?;.åΩ¸Å l.;/≥'"
  }

  @Get()
  async findAll(@Query() query: ListAllEntities): Promise<Cat[]> {
    return this.catService.findAll()
  }


  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.catService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}