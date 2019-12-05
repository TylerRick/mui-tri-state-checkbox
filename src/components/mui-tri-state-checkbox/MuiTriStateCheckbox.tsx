// Partly based on https://pastebin.com/0NLGNdCq / https://codesandbox.io/s/material-demo-dwxed
// TODO: Add a prop to control the cycle order

/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react';

import { useState, useMemo, forwardRef } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { CheckboxProps as MuiCheckboxProps } from '@material-ui/core/Checkbox';


// TODO: Why doesn't it cause an error if we try to pass one of the excluded props?
// <MuiTriStateCheckbox indeterminate />
export type MuiTriStateCheckboxProps = Exclude<MuiCheckboxProps, 'indeterminate' | 'indeterminateIcon'>

/**
 * Tri-state checkbox built on material-ui Checkbox
 * @prop {boolean | null} checked - the state of the checkbox
 *   - `false`: means unchecked
 *   - `null`: (or undefined) means indeterminate
 *   - `true`: means checked
 * @prop {boolean | null} defaultChecked - the initial state of the checkbox
 *   (if you want to use this as an uncontrolled component)
 * @prop {(event, checked: boolean | null) => void} onChange
 *   Called whenever the state of the checkbox changes. Use the `checked`
 *   argument, since `event.target.checked` cannot be relied on as it can with
 *   a regular Checkbox.
 *
 * This component also passes all other props to the underlying Checkbox
 * *except* for `indeterminate`.
 */
export const MuiTriStateCheckbox: React.FunctionComponent<MuiTriStateCheckboxProps> = forwardRef(function MuiTriStateCheckbox({
  defaultChecked = null,
  checked: checkedProp = undefined,
  onChange = (event, checked) => {},
  ...rest
}, ref) {
  const [checked, setChecked] = useState<boolean | null>(defaultChecked)
  const indeterminate = useMemo(() => {
    // deliberate ==; both undefined and null are considered indeterminate values
    return (checked == null)
  }, [checked])

  // Allow component's checked state to be controlled. (This is supposed to work like getDerivedStateFromProps.)
  // Is there any better way to do this? (While still giving the option to use this as uncontrolled. Which means we still need to store state, but basically only if uncontrolled.)
  if (checkedProp !== undefined && checked !== checkedProp) {
    setChecked(checkedProp)
    return null // As recommended by https://stackoverflow.com/questions/55066440/react-hooks-faq-implementation-of-getderivedstatefromprops-leads-to-rendering-w#comment96885658_55068572
  }

  // console.log('MuiTriStateCheckbox', {defaultChecked, checkedProp}, '=>', {indeterminate, checked})

  const handleChange = event => {
    setChecked(checked => {
      // Checked state cycles from: false -> null -> true -> ...
      let nextChecked
      if (checked === false) {
        nextChecked = null
      } else if (checked === true) {
        nextChecked = false
      } else {
        nextChecked = true
      }

      // Since state isn't updated immediately, we pass the next (future) value for
      // the state rather than the current value.
      // console.log(JSON.stringify(checked), JSON.stringify(nextChecked))
      onChange(event, nextChecked)
      return nextChecked
    })
  }

  return (
    <Checkbox
      {...rest}
      checked={checked || false}
      indeterminate={indeterminate}
      onChange={handleChange}
      inputRef={ref}
    />
  )
})
