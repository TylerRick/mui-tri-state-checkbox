import * as React from 'react';
import { forwardRef } from 'react';
import { ValueProp } from './ValueProp';

/**
 * Looks up a value for title prop using value as key into valuesToTitles Map.
 */
export function withValueToTitle(
  Child: React.ComponentType,
  {
    valueProp = 'value',
    valuesToTitlesStatic = undefined,
  }: {
    valueProp: ValueProp,
    valuesToTitlesStatic?: Map<any, any>,
  }
) {
  return forwardRef<any, any>(function withValueToTitle({
    valuesToTitles = undefined,
    ...props
  }, ref) {

    // Allow to be specified at either level — where the new component was
    // created (returned by this HOC), or where the new component is used
    // ("local") — with local taking precedence.
    if (typeof valuesToTitles === 'undefined') {
      valuesToTitles = valuesToTitlesStatic
    }
    const value = props[valueProp]
    // console.log(props, value, valuesToTitles)

    return (<>
      <Child
        {...props}
        title={valuesToTitles && valuesToTitles.get(value)}
        ref={ref}
      />
    </>)
  })
}

/*
// Could we do this with just withAdaptValue?
export const Something = withAdaptValue(Child, {
    parentToChildValue: (parentValue) = valuesToTitles.get(parentValue),
    childValueProp: 'title',
  }
*/
