import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';

@Injectable()
export class TagsService {
	constructor(@Inject(REQUEST) request: unknown) {
		console.log(request);
	}
}
