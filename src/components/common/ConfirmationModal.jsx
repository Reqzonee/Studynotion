import React from 'react'
import IconBttn from './IconBttn'

const ConfirmationModal = ({modalData}) => {
  return (
    <div>
      <div>
        <p>
            {modalData.text1}
        </p>
        <p>
            {modalData.text2}
        </p>
        <div>
            <IconBttn
            onclick={modalData.btn1Handler}
            text={modalData?.btn1Text}/>

            <button onclick={modalData?.btn2Handler}>
                {modalData?.btn2Text}
            </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal
