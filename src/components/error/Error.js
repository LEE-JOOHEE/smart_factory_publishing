import React from 'react';
import { useHistory } from 'react-router-dom';

function Error(props) {
    const history = useHistory();
    console.log("Error [history] : ", history);
    
    const errormessage = props.errormessage || "알 수 없는 에러가 발생했습니다.";

    const goBack = () => {
        history.goBack();
    }

    return (
        <div>
            <h1>Error</h1><p/>
            {errormessage}<p/>
            <button onClick={goBack}>이전페이지</button>    
        </div>
    );
}

export default Error;