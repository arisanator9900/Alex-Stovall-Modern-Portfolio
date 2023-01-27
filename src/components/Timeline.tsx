import React from 'react'
import '../css/Timeline.css'
import Button from '../UI/Button';
import timelineData from "../data/timelineData.js"



const Timeline = () => {
    //education vs work toggle
    //create a button component. have 2 buttons, if work button is pushed, call setIsWork to true in state
    //then toggle work button css to active and the education button to inactive. 
    //in this component feed the education data or the work data into the flow based on what is here 

    //h1 isWork ? "Work Experience" : "Education and Certifications"
    const [clicked, setClicked] = React.useState(Boolean)
    return (
        <div
            className='timeline-body'
        >
            <section className="intro">
                <div className="container">
                    <h1 className='timeline-title'>Experience</h1>
                </div>
                <div className="btn-container">
                    <div onClick={() => setClicked(true)}>
                        <Button id={clicked ? "btn-active" : "btn-background"} text="Work" />
                    </div>
                    <div onClick={() => setClicked(false)}>
                        <Button id={clicked ? "btn-background" : "btn-active"} text="Education" />
                    </div>
                </div>
            </section>

            <section className="timeline">
                <div className={clicked ? "" : "invisible-timeline"}>
                <ul>
                    <li>
                        <div>
                            <time>{timelineData.work[0].years}</time>  WORK
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>{timelineData.work[1].years}</time> Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi. Suspendisse finibus mauris et bibendum molestie. Aenean ex augue, varius et pulvinar in, pretium non nisi.
                        </div>
                    </li>
                </ul>
                </div>
                <div className={clicked ? "invisible-timeline" : ""}>
                <ul className='timeline'>
                    <li>
                        <div>
                            <time>{timelineData.education[0].years}</time> Proin iaculis, nibh eget efficitur varius, libero tellus porta dolor, at pulvinar tortor ex eget ligula. Integer eu dapibus arcu, sit amet sollicitudin eros.
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>{timelineData.education[1].years}</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
                        </div>
                    </li>
                </ul>
                </div>
            </section>
        </div>
    )
}

export default Timeline