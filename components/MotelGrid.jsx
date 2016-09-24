import React from 'react';
import Reflux from 'reflux';
import MotelStore from '../stores/MotelStore';

var MotelGrid = React.createClass({
    mixins: [Reflux.connect(MotelStore, 'motelStore')],
    render: function(){
        if(this.state.motelStore)
        {
            return <div>
            {
                this.state.motelStore.map(function(motel){
                    return <div classname="image">
                        <h4>{motel.name}</h4>
                        <a href={motel.URL_WebPage}>
                            <img src = {motel.logo} />
                        </a>
                        <p>{image.descriptuion}</p>
                    </div>
                })
            }
                    
                </div>
            
        } else {
            return(
                <p>
                    There is no information to show
                </p>);
        }
    }
});

export default MotelGrid;