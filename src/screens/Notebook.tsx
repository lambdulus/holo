// This component needs to be able to specify which Boxes are allowed inside
// It will also have other settings - maybe something like lock - if it's locked, you can not modify it
// Exam mode will feature the build of the Frontend which will not import any of the Evaluation Boxes


import React, { PureComponent } from 'react'
import { CreateBox } from '../components/CreateBox'
import { BoxType, NotebookState, GlobalSettings, BoxState } from '../Types'

import { onMarkDownBlur, NoteState } from '../markdown-integration/AppTypes'
import { BoxContainer } from '../components/BoxContainer'

interface Props {
  state : NotebookState
  settings : GlobalSettings

  updateNotebook (notebook : NotebookState) : void
}

export default class Notebook extends PureComponent<Props> {
  constructor (props : Props) {
    super(props)

    this.insertBefore = this.insertBefore.bind(this)
    this.removeBox = this.removeBox.bind(this)
    this.updateBoxState = this.updateBoxState.bind(this)
    this.makeActive = this.makeActive.bind(this)
    this.onBlur = this.onBlur.bind(this)
  }

  render () {
    const { state, settings } = this.props
    const { activeBoxIndex, boxList, allowedBoxes } = state

    return (
      <div className="mainSpace">
        {/* TODO: This will be refactore out to standalone component. */}
        <ul className="boxList UL">
          { boxList.map(
            (box : BoxState, i : number) =>
            <li className="LI" key={ box.__key }>
              
              <CreateBox
                addNew={ (box : BoxState) => this.insertBefore(i, box) }
                whiteList={ allowedBoxes }
                settings={ settings }
                />
              
              <BoxContainer
                box={ box}
                isActiveBox={ activeBoxIndex === i}
                insertBefore={ (box : BoxState) => this.insertBefore(i, box) }
                makeActive={ () => this.makeActive(i) }
                removeBox={ () => this.removeBox(i) }
                updateBoxState={ (box : BoxState) => this.updateBoxState(i, box) }
                onBlur={ () => this.onBlur(i) }
              />          
            </li>
          ) }
  
          <CreateBox
            addNew={ (box : BoxState) => this.insertBefore(state.boxList.length, box) }
            whiteList={ allowedBoxes }
            settings={ settings }
          />
  
        </ul>
      </div>
    )
  }

  insertBefore (index : number, box : BoxState) : void {
    const { boxList } = this.props.state

    console.log("adding - so now current index is? ", index)
    
    boxList.splice(index, 0, box)
    this.props.updateNotebook({ ...this.props.state, boxList : boxList, activeBoxIndex : index })
  }

  removeBox (index : number) : void {
    // this allows to remove last Box and not correctly changing activeBoxIndex
    // TODO: fix the bug
    const { boxList, activeBoxIndex } = this.props.state
    
    const nearestValidIndex = (i : number) => {
      if (i < activeBoxIndex) return activeBoxIndex - 1
      if (i > activeBoxIndex) return activeBoxIndex
      if (boxList.length === 1) return NaN
      if (i === 0) return i
      return i - 1
    }

    const newIndex : number = nearestValidIndex(index)

    boxList.splice(index, 1)
    this.props.updateNotebook({ ...this.props.state, boxList : boxList, activeBoxIndex : newIndex })
  }

  /**
   * This function is patching; not overriding
   * @param index 
   * @param box 
   */
  updateBoxState (index : number, box : BoxState) : void {
    const { boxList } = this.props.state
    boxList[index] = box

    this.props.updateNotebook({ ...this.props.state, boxList })
  }

  makeActive (index : number) : void {
    const { activeBoxIndex, boxList } = this.props.state

    const currentType : BoxType = boxList[activeBoxIndex].type

    switch (currentType) {
      case BoxType.UNTYPED_LAMBDA:
        // boxList[activeBoxIndex] = onUntypedLambdaBlur(boxList[activeBoxIndex])
        break
      
      case BoxType.MARKDOWN:
        boxList[activeBoxIndex] = onMarkDownBlur(boxList[activeBoxIndex] as NoteState)
        break

      default:
        break
    }

    if (index !== activeBoxIndex)
      this.props.updateNotebook({ ...this.props.state, activeBoxIndex : index, boxList })
  }

  onBlur (index : number) : void {
    const { boxList, activeBoxIndex } = this.props.state

    if (activeBoxIndex !== index) {
      return
    }

    const currentType : BoxType = boxList[index].type

    switch (currentType) {
      case BoxType.UNTYPED_LAMBDA:
        // boxList[activeBoxIndex] = onUntypedLambdaBlur(boxList[activeBoxIndex])
        break
      
      case BoxType.MARKDOWN:
        console.log('bluring ', index)
        boxList[index] = onMarkDownBlur(boxList[index] as NoteState)
        break

      default:
        break
    }

    this.props.updateNotebook({ ...this.props.state, boxList })
  }
}