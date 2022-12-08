import { List } from 'antd'
import { useState } from 'react';

export default function ({task}) {  //my function with a param (task)
    const [toggle, setToggle] = useState(false)
    const [toggledClass, setToggledClass] = useState(false) 

    function crossThrough() {
        let newtoggle = !toggle // this function creates a action that goes back and forth on each task
        if (newtoggle) {
            setToggledClass(['list-cross']) 

            //tap into database checked

        } else (
            setToggledClass([])
            // tap into database unchecked

        )
        setToggle(newtoggle)

    }
   


    return (
        <>  
        <List.Item id="to-do-item" className={toggledClass}> 
            <button onClick={crossThrough}>✓</button> 
            {task.task} {task.dueDate}
        </List.Item>
        </>
    )
} // this list all my items with the two categories (task & dueDate) in my list
  // and I created a button with a property(onClick) with an object 