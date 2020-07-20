import React from 'react';
import './Newitem.css'



function ListItems(props)
{
    const items = props.items;
    const listItems = items.map(item =>
   {
       return  <div className="newList" key={item.key}>
            <p>
                <input type="text" id={item.key} value={item.text} onChange={(e)=>{props.setUpdate(e.target.value,item.key)}}/>
                <span>
                <button className="btn" onClick={() => {props.deleteItem(item.key)}}  >Delete</button>
                </span>
            </p>
     
           </div>
    })

        return <div>{listItems}</div>;
}

  export default ListItems