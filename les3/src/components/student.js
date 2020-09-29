import React from 'react';

import StudentApi from '../apis/student_api';

const Student = (props) => {


    //if (!student) {
    //    return <div>Id does not exist</div>
    //}
    return (
        <div>
            <h2>Student</h2>
            <p>
                Name: /* student.name */
                <br />
                Id: /* student.id */
                <br />
                Grade: /* student.grade */
            </p>
        </div>
    )
}

export default Student;
