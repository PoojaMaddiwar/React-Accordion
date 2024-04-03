import "./style.css"
import data from "./data"
import { useState } from "react"
const Comp1 = ()=>{
    const [selection,setSelection] = useState(null);
    const [enableMultiSlection,setEnableMultiSelection] = useState(false);
    const [multiple,setMultiple] = useState([])
    const singleSelection = (getCurrentId)=>{
            console.log(getCurrentId)
            setSelection(getCurrentId === selection ? null : getCurrentId) 
    }
    const multiSelection = (getCurrentId)=>{
        let cpyMultiple = [...multiple];
        let findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)
        console.log(findIndexOfCurrentId);
        if(findIndexOfCurrentId === -1){
            cpyMultiple.push(getCurrentId)
        }else{
            cpyMultiple.splice(findIndexOfCurrentId, 1)
        }
        setMultiple(cpyMultiple)

        console.log(getCurrentId, cpyMultiple)
    }
    return(
        <>
        <div className="wrapper">
            <button onClick={()=>setEnableMultiSelection(!enableMultiSlection)}>Enable Multi Selection</button>
            <div className="accordion">
                {
                    data && data.length > 0 ? (
                        data.map((element,index)=>{
                            return(
                                <div className="item">
                                    <div className="title" onClick={ enableMultiSlection ? ()=> multiSelection(element.id) : ()=>singleSelection(element.id)} >
                                        <h3>{element.question}</h3>
                                        <span>+</span>

                                    </div>

                                    {
                                        enableMultiSlection ?
                                        multiple.indexOf(element.id) !== -1 && 
                                        <div className="content" >
                                        <p>{element.answer}</p>
                                        </div> 
                                        :
                                        selection === element.id && 
                                        <div className="content" >
                                        <p>{element.answer}</p>
                                        </div> 
                                    }
                                    
                                    {/* {
                                        selection === element.id ? 
                                        <div className="content" >
                                        <p>{element.answer}</p>
                                        </div> 
                                        : null
                                    } */}

                                </div>
                            )
                        })
                    ) : (<div>data npt found</div>)
                }
            </div>
        </div>
        </>
    )
}

export default Comp1;