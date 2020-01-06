import React from 'react';
import Link from 'react-router-dom';
import cream from '../../../images/cream.jpeg';
export default (props) =>{
    return (<>
        {props.results.map((e,i)=>{
                return(<React.Fragment key={i}>
                            <div className="item-3"></div>
                            <div className="item-2">
                                <img src={cream}  width="100%"></img>
                            </div>
                            <div className="item-4">
                                    <h1 className="item-12">{e.title}</h1>
                                    <div className="item-12">
                                        <span>1k Views</span> * <span>3 hours ago</span>
                                        <span>Skin type: Dry</span>
                                        <span>Like</span>
                                        <span>Products used:</span>
                                    </div>
                                    <div className="row-search">
                                        <img className="item-2" src={cream} width="50%"></img>
                                        <img className="item-2" src={cream} width="50%" width="50%"></img>
                                        <img className="item-2" src={cream} width="50%" width="50%"></img>
                                    </div>
                            </div>
                            <div className="item-3"></div>
                    </React.Fragment>)
            })}
    </>)
}