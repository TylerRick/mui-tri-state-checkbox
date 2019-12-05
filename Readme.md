# mui-tri-state-checkbox

[![npm version](https://badge.fury.io/js/mui-tri-state-checkbox.svg)](https://badge.fury.io/js/mui-tri-state-checkbox)

A tri-state checkbox component (false, null, or true) built on [material-ui](https://material-ui.com/)'s [Checkbox](https://material-ui.com/api/checkbox/)

The `null` state represents an indeterminate state. It's like a "partially checked" state in between `false` and `true`.

Useful for indicating that it is not yet known whether the value is `true` or `false` (such as when the user has never selected a value yet).

# Usage

Example ([Codesandbox](https://codesandbox.io/s/material-demo-1bzfj)):

```js
import React, { useState } from 'react'
import { MuiTriStateCheckbox } from 'mui-tri-state-checkbox'

export default function Demo() {
  const [checked, setChecked] = useState<boolean | null>(null)

  return (
    <>
      <h2>Controlled (checked: {JSON.stringify(checked)})</h2>
      <div>
        <MuiTriStateCheckbox
          value="value"
          checked={checked}
          onChange={(e, checked) => setChecked(checked)}
        />
      </div>
    </>
  )
}
```

# Demo

Start the demo with `yarn start`. (To do: publish it to GitHub pages.)

# Contributing

Pull requests welcome!

# License

This project is free software, licensed under the terms of the [MIT license](/License).

