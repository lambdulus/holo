import React, { useContext, ReactNode } from 'react'

// import Evaluator from './ExpressionBox'
// import MacroDefinition from './MacroDefinition'
// import Note from './Note'
// import { MacroTableContext } from './EvaluatorSpace'
// import { SetBoxContext } from './BoxSpace'
import { BoxState, BoxType, MacroDefinitionState, NoteState } from '../AppTypes'

import { UntypedLambdaState } from '../untyped-lambda-integration/AppTypes'

import EvaluatorIntegration from '../untyped-lambda-integration/ExpressionBox'

// import { BoxState } from '../AppTypes'

interface BoxProperties {
  state : BoxState
  isActive : boolean

  updateBoxState (box : BoxState) : void
  addBox (box : BoxState) : void
}

export default function Box (props : BoxProperties) : JSX.Element {
  const { state, isActive, updateBoxState, addBox } : BoxProperties = props
  const { type } = state

  // const macroTable = useContext(MacroTableContext)
  // const setBoxState = useContext(SetBoxContext)


  if (type === BoxType.UNTYPED_LAMBDA) {
    return (
      <EvaluatorIntegration
        state={ state as UntypedLambdaState }
        isActive={ isActive }
        // macroTable={ macroTable }
        
        setBoxState={ updateBoxState }
        addBox={ addBox }
      />
    )
  }
  else {
    return (
      <div>
        Uknown BOX
      </div>
    )
  }

  // if (type === BoxType.MACRO) {
  //   return (
  //     <div className=''>
  //       <MacroDefinition
  //         state={ state as MacroDefinitionState }
  //         setBoxState={ setBoxState }

  //         // addBox={ addBox }
  //       />
  //     </div>
  //   )
  // }

  // if (type === BoxType.MARKDOWN) {
  //   return (
  //     <div className=''>
  //       <Note
  //         state={ state as NoteState }
  //         isActive={ isActive }

  //         // addBox={ addBox }
  //       />
  //     </div>
  //   )
  // }

  // return null as any // never happens
}