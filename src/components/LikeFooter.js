import React, { Component } from 'react';

class LikeFooter extends Component {
    state = {}
    render() { 
        return ( 
            <div className="like-footer">
                <button className="round-button like"></button>
                <button className="round-button small undo"></button>
                <button className="round-button dislike"></button>
            </div>
         )
    }
}
 
export default LikeFooter;