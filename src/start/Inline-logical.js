
import React from 'react';
import { render } from 'react-dom';


function Kutu(props){
    const kutuKapasite=props.kutuKapasite;
    return (
        <div>
            <h2>Kutu Alarm Durumu</h2>
            {
                kutuKapasite> 4 &&
                <h2> kutu kapasitesi {kutuKapasite-4} aşıld</h2>
            }
        </div>
    );


}

render(<Kutu kutuKapasite={5} />,document.getElementById("app"))