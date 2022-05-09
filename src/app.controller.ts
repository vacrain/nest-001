/*
 * @Author: vacrain
 * @Date: 2022-05-10 05:23:45
 * @LastEditors: vacrain
 * @LastEditTime: 2022-05-10 05:50:39
 * @FilePath: /nest-001/src/app.controller.ts
 * @Description:
 *
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/app1')
  getApp(): string {
    return 'app1 ~';
  }
}
