import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces',
  pure: true // This is the default
})
export class ConvertToSpacesPipe implements PipeTransform {

  transform(value: any, args?: string): string {
    return value.replace(args, ' ');
  }

}
