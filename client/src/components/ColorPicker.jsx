import React from 'react'
import {SketchPicker} from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
      color={snap.color}
      disableAlpha
      onChange={(color) => state.color = color.hex}
      
      />
       <div>
        Hex: <input style={{borderRadius: '7px', backgroundColor: '#f4f4f4', color: "black", padding: '8px'}}
          type="text"
          value={state.color}
          onChange={(e) => {
            state.color = e.target.value;
          }}
        />
      </div>
    </div>
  )
}

export default ColorPicker