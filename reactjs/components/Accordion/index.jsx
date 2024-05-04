import React, { useState } from 'react'
import { data } from './data'
import './style.css'

const Accordion = () => {
  const [selected, setSelected] = useState(null)
  const [toggle, setToggle] = useState(false)
  const [multiSelect, setMultiSelect] = useState([])

  function handleSingleSelection(getId) {
    setSelected(selected === getId ? null : getId)
  }

  function handleMultiSelection(getId) {
    let copy = [...multiSelect]
    const find = copy.indexOf(getId)
    if (find !== -1) {
      copy.splice(find, 1)
    } else {
      copy.push(getId)
    }

    setMultiSelect([...copy])
  }

  return (
    <div className="accordion">
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? <>Handle Single Selection</> : <>Handle Multi Selection</>}
      </button>

      <div>
        {data && data.length > 0 ? (
          <div>
            {data.map((dataItem) => {
              return (
                <div
                  key={dataItem.id}
                  onClick={
                    toggle
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                >
                  <div className="item">
                    <h1>{dataItem.question}</h1>
                    <span>+</span>
                  </div>
                  {toggle ? (
                    multiSelect.indexOf(dataItem.id) !== -1 && (
                      <div className="item1">
                        <h4>{dataItem.answer}</h4>
                      </div>
                    )
                  ) : selected === dataItem.id ? (
                    <div className="item1">
                      <h4>{dataItem.answer}</h4>
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>
        ) : (
          <h2>No Data Was Found !!!</h2>
        )}
      </div>
    </div>
  )
}

export default Accordion
