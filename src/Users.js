import React from 'react'
import "./Category.scss" 

const arr1 =["orange","banana","strwberry", "orange","banana","strwberry", "orange","banana","strwberry", "orange","banana","strwberry", "orange","banana","strwberry", "orange","banana","strwberry", "orange","banana","strwberry", "orange","banana","strwberry",]

export default function Users(){
    return (
        <div>
            {arr1.map(item=><div>{item}
            </div>)}
            <h1>Users Component</h1>
        </div>
    )
}