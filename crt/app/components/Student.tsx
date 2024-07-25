import React from 'react';
interface Props {
    name: string;
    isStudent: boolean;
}
function Student(props: Props) {
    return (
        <div className='Student'>Student

            <p>name:{props.name}</p>
            <p>Student:{props.isStudent ? "yes" : "no"}</p>
        </div>
    )
}

export default Student