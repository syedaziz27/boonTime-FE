import React from 'react';
import Link from 'react-router-dom';
import cream from '../../../images/cream.jpeg';
export default (props) => {
    return (<>
        {props.results.map((e, i) => {
            return (<React.Fragment key={i}>
                {/* <div className="item-3"></div> */}
                <div className="item-3 bottom_line">
                    <img src={cream} width="100%"></img>
                </div>
                <div className="item-7 bottom_line">
                    <h1 className="item-12">{e.title}</h1>
                    <div className="row-search">
                        <span className='item-3'>1k Views * 3 hours ago</span>

                    </div>
                    <div className="row-search used-products">
                        <span className='item-3 '>Skin Type: Sensitive</span>
                        <span className='item-3 used-products'>Products used:</span>
                    </div>





                    <div className="row-search">
                        <img className="item-1" src={cream} width="100%" alt='#' />
                        <img className="item-1" src={cream} width="100%" alt='#' />
                        <img className="item-1" src={cream} width="100%" alt='#' />
                        <p className="more-items item-2 pointer">More...</p>
                        <div className='profile_picture'>
                            <img
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                key="user_picture"
                                alt="avatar"

                            />
                        </div>
                        <div className="row-search item-6 used-products back">
                            <span className="user-metadata-name item-6 user_name ">Greenskin001</span>
                            <span className=" user-metadata-sub-count item-5">Subscriber count</span>
                        </div>
                    </div>
                </div>
                {/* <div className="item-3"></div> */}
            </React.Fragment>)
        })}
    </>)
}