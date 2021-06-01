import React from 'react';

function Footer() {
    return (
        <div className="container Footer">
            <div className="row mt-4">
                <div className="col-md-3">
                    <a href="https://github.com/AndrewBurke87" target="blank">Github</a>
                </div>
                <div className="col-md-3">
                    <a href="https://www.linkedin.com/in/andrewburke87" target="blank">LinkedIn</a>
                </div>
                <div className="col-md-3">
                    {/* Email */}
                    <a href="mailto:drewburke39@gmail.com" target="blank">Email</a>
                </div>
                <div className="col-md-3">

                    <a href="https://www.canva.com/design/DAEegba-hJI/Z7PblD1w_ajIlt3h27X-Tw/view?utm_content=DAEegba-hJI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">Resume</a>

                </div>
            </div>
        </div>
    )
}
export default Footer; 