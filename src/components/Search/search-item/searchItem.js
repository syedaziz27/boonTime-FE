import React from 'react';
import cream from '../../../images/cream.jpeg';
export default (props) =>{
    return (<>
        {props.results.map((e,i)=>{
                return(<React.Fragment key={i}>
                            <div className="item-3"></div>
                            <div className="item-2">
                                <img src={cream}></img>
                            </div>
                            <div className="item-4">
                                <div className="row-search">
                                    <h1 className="item-12">{e.title}</h1>
                                    <span>1k Views</span> * <span>3 hours ago</span>
                                    <span>Skin type: Dry</span>
                                    <span>Like</span>
                                    <span>Products used:</span>
                                </div>
                            </div>
                            <div className="item-3"></div>
                    </React.Fragment>)
            })}
    </>)
}