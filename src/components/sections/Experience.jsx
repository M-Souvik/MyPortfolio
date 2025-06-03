import React from 'react'
import { ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';


const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'BlackStone Game Development LLP' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: 'Codexlab LLP' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const Experience = () => {
  return (
    <>
    <div className='w-full h-full grid  lg:grid-cols-2'>

        <div className='flex items-center justify-center'>Experience</div>
    <div className='flex w-[100dvw] sm:w-[45vw] h-[100dvh]'>
        <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>
    </div>
    </>
  )
}

export default Experience