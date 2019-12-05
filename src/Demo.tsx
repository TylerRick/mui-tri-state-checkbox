/* eslint-disable @typescript-eslint/camelcase */

import React, { useState, useRef } from 'react'
import {
  MuiTriStateCheckbox,
  MuiTriStateCheckbox_Hidden,
  MuiTriStateCheckbox_MappedValues_Hidden,
  MuiTriStateCheckbox_MappedValues,
} from './Demo/MuiTriStateCheckbox'
import { StateWrapper_ } from 'react-value-adapter'

const childToParentValues = new Map([
  [false, 'never'],
  [null,  'sometimes'],
  [true,  'always'],
])

export default function Demo() {
  const [  tri_checked,   tri_setChecked] = useState<boolean | null>(null)
  const [  wh_checked,    wh_setChecked ] = useState<boolean | null>(null)
  const [  map_checked,   map_setChecked] = useState<boolean | null>(null)
  const [  hmv_checked,   hmv_setChecked] = useState<boolean | null>(null)
  const [uc_ml_checked, uc_ml_setChecked] = useState<boolean | null>(null)
  const [ml_checked,       ml_setChecked] = useState<boolean | null>(null)
  const [  map_parentValue,   map_setParentValue] = useState('always')
  const [  hmv_parentValue,   hmv_setParentValue] = useState('always')
  const [   ml_parentValue,    ml_setParentValue] = useState('never')
  const [uc_ml_parentValue, uc_ml_setParentValue] = useState('always')

  const map_ref = useRef<HTMLInputElement>(null)
  const submitRef = useRef<HTMLButtonElement>(null)

  return (
    <form method="get">

      <h1>MuiTriStateCheckbox</h1>
      <p>Basic tri-state checkbox</p>
      <h2>Uncontrolled</h2>
      <div>
        <MuiTriStateCheckbox name="tri_0" value="value" defaultChecked />
      </div>
      <h2>Controlled (checked: {JSON.stringify(tri_checked)})</h2>
      <div>
        <MuiTriStateCheckbox
          value="value"
          checked={tri_checked}
          onChange={(e, checked) => tri_setChecked(checked)}
        />
      </div>


      <h1>MuiTriStateCheckbox_Hidden</h1>
      <p>With hidden input, allowing unchecked value to be submitted via regular form submit</p>
      <h2>Uncontrolled</h2>
      <div>
        <MuiTriStateCheckbox_Hidden name="wh" value="value" defaultChecked />
      </div>

      <h2>Controlled (checked: {JSON.stringify(wh_checked)})</h2>
      <div>
        <MuiTriStateCheckbox_Hidden
          name="wh"
          value="value"
          checked={wh_checked}
          onChange={(e, checked) => wh_setChecked(checked)}
        />
      </div>

      <hr/>
      <h1>Mapped values</h1>

      <h1>MuiTriStateCheckbox_MappedValues</h1>
      <p>Mapping {'{'}false: 'never', null: 'sometimes', true: 'always'}</p>
      <h2>Controlled (parentValue: {JSON.stringify(map_parentValue)}, checked: {JSON.stringify(map_checked)})</h2>
      <div>
        <MuiTriStateCheckbox_MappedValues
          name="map_b"
          // childProps={{value: "value"}}
          childToParentValues={childToParentValues}
          value={map_parentValue}
          onChange={(parentValue, checked) => { map_setParentValue(parentValue); map_setChecked(checked) } }
          ref={map_ref}
        />
        <button type="button" onClick={() => map_ref.current.focus() }>Focus</button>
      </div>


      <h1>MuiTriStateCheckbox_MappedValues_Hidden</h1>
      <h2>Uncontrolled</h2>
      <div>
        <StateWrapper_ defaultValue='always'>
        <MuiTriStateCheckbox_MappedValues_Hidden
          name="hmv_a"
          childToParentValues={childToParentValues}
          childValueProp='defaultChecked'
        />
        </StateWrapper_>
      </div>

      <h2>Controlled (parentValue: {JSON.stringify(hmv_parentValue)}, checked: {JSON.stringify(hmv_checked)})</h2>
      <div>
        <MuiTriStateCheckbox_MappedValues_Hidden
          name="hmv_b"
          childToParentValues={childToParentValues}
          value={hmv_parentValue}
          onChange={(parentValue, checked) => {
            hmv_setChecked(checked); hmv_setParentValue(parentValue)
            // To test that it won't trigger this until *after* it re-renders the hidden with the updated value:
            // submitRef.current.click()
          } }
        />
      </div>

      <div>
        <button type="submit" ref={submitRef}>Submit</button>
      </div>
    </form>
  )
}
