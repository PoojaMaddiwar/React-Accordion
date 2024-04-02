import { useState } from "react";
import data from "./data"
const Comp1 = ()=>{
    const [selected, setSelected] = useState(null);
    const singleSelection = (getCurrentId)=>{
            console.log(getCurrentId);
            setSelected(getCurrentId)
    }

    return(
        <>
        <div className="wrapper">
            <div className="accordion">
                {
                    data && data.length > 0 ? (
                        data.map((element,index)=>{
                            return(
                                <div className="item">
                                    <div onClick={()=>singleSelection(element.id)} className="title">
                                        <h3>{element.question}</h3>
                                        <span>+</span>
                                    </div>
                                    {
                                        selected === element.id ? (
                                            <div className="content">
                                                <p>{element.answer}</p>
                                            </div>
                                        ) : null
                                    }
                                </div>
                            )
                        })
                    ) 
                    : (<div>no data found</div>)
                }
            </div>
        </div>
        </>
    )
}

export default Comp1