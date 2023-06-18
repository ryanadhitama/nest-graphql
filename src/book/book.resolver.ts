import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Book } from '../models/book.model';

@Resolver()
export class BookResolver {
  @Query(() => [Book])
  getBooks() {
    // Logic to fetch books from a data source
    return [{ id: '1', name: 'Harry Potter', description: 'magic' }];
  }

  @Mutation(() => Book)
  createBook(
    @Args('name') name: string,
    @Args('description') description: string,
  ) {
    // Logic to create a new book in the data source
    return { id: '2', name, description };
  }
}
