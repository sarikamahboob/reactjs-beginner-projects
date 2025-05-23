import React from 'react'
import { accordionData } from './Content'
import Accordion from './Accordion'

const MainAccordion = () => {
  return (
    <div className='accordion'>
      {
        accordionData?.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))
      }
    </div>
  )
}

export default MainAccordion