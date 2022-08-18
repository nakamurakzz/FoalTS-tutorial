import { Context, Delete, Get, HttpResponseBadRequest, HttpResponseNoContent, HttpResponseOK } from '@foal/core';
import { Todo } from '../entities';

export class ApiController {

  @Get('/todos')
  async getTodo(): Promise<HttpResponseOK> {
    const todos = await Todo.find();
    return new HttpResponseOK(todos);
  }

  @Delete("/todos/:id")
  async deleteTodo(ctx: Context): Promise<HttpResponseNoContent| HttpResponseBadRequest> {
    const todo = await Todo.findOne(ctx.request.params.id)
    if( todo == null ) return new HttpResponseBadRequest('Todo not found');
    await todo.remove();
    return new HttpResponseNoContent();
  }
}
