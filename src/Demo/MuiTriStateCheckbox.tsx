// This is currently only used for the demo (*not* exported), though we could consider exporting it as well if it seems useful to others

/* eslint-disable @typescript-eslint/camelcase */
import * as React from 'react'
import { useCallback, forwardRef } from 'react'
import { createStyles, emphasize, makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import { withHiddenInput } from 'react-value-adapter'
import { withAdaptValue, withHiddenMappedValues } from 'react-value-adapter'
import {
  MuiTriStateCheckbox as UpstreamMuiTriStateCheckbox,
  MuiTriStateCheckboxProps as UpstreamMuiTriStateCheckboxProps,
} from '../components/mui-tri-state-checkbox/MuiTriStateCheckbox'
import { withValueToTitle } from './withValueToTitle'

export interface MuiTriStateCheckboxProps extends UpstreamMuiTriStateCheckboxProps {
  padding?: 'compact'
}

const useStyles = makeStyles<Theme, any>((theme: Theme) => {
  return createStyles({
    root: ({padding}) => (
      (padding == 'compact') ? {
        padding: '3px'
      } : {
        // No override (9px)
      }
    )
  })
})

const MuiTriStateCheckbox_1: React.FunctionComponent<MuiTriStateCheckboxProps> = forwardRef(function MuiTriStateCheckbox({
  padding,
  ...rest
}, ref) {
  const classes = useStyles({padding})

  return (
    <UpstreamMuiTriStateCheckbox
      classes={classes}
      {...rest}
      ref={ref}
    />
  )
})

export const MuiTriStateCheckbox = withValueToTitle(MuiTriStateCheckbox_1, {
  valueProp: 'checked',
})

export const onChangeAdapter = (onChangeFromParent, childToParentValues) => (
  (event, checked) => {
    if (!onChangeFromParent) return
    const parentValue = childToParentValues.get(checked)
    // console.log(checked, '=>', parentValue)
    onChangeFromParent(parentValue, checked)
  }
)

export const MuiTriStateCheckbox_MappedValues = withAdaptValue(MuiTriStateCheckbox, {
    onChangeAdapter,
    onChangeProp: 'onChange',
    parentValueProp: 'value',
    childValueProp: 'checked',
  }
)
export const MuiTriStateCheckbox_Hidden              = withHiddenInput(MuiTriStateCheckbox,              {valueForHidden: ''})
export const MuiTriStateCheckbox_MappedValues_Hidden = withHiddenInput(MuiTriStateCheckbox_MappedValues, {hiddenOrder: 'after'})
