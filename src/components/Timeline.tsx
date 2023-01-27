import React from 'react'
import '../css/Timeline.css'
// import timelineData from '../data/timelineData.js'



const Timeline = () => {
        let items = document.querySelectorAll(".timeline");
        console.log(items)
        const handleScroll = () => {
            for (let i = 0; i < items.length; i++) {
                console.log(items)
                    items[i].classList.add("in-view");
            }
        }

        

    //education vs work toggle
    //create a button component. have 2 buttons, if work button is pushed, call setIsWork to true in state
    //then toggle work button css to active and the education button to inactive. 
    //in this component feed the education data or the work data into the flow based on what is here 

    //h1 isWork ? "Work Experience" : "Education and Certifications"
    return (
        <div 
        className='timeline-body'
        onLoad={handleScroll}
        >
            <section className="intro">
                <div className="container">
                    <h1 className='timeline-title'>Work Experience</h1> 
                </div>
            </section>

            <section className="timeline">
                <ul>
                    <li>
                        <div>
                            <time>1934</time> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>1937</time> Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi. Suspendisse finibus mauris et bibendum molestie. Aenean ex augue, varius et pulvinar in, pretium non nisi.
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>1940</time> Proin iaculis, nibh eget efficitur varius, libero tellus porta dolor, at pulvinar tortor ex eget ligula. Integer eu dapibus arcu, sit amet sollicitudin eros.
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>1943</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Timeline