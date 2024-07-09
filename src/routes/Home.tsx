import ListIcons from "../components/ListIcons"

export function Home(){
  return (
    <>
        <div className="content-container">
            <div className="background-gradient center-content" id="first-banner">
                <div className="text-center-content">
                    <div className="side-text">
                        <h2> Exclusive CRM for Abroad Education Consultants </h2>
                        <p>
                            Manage your students applications in&nbsp;
                            <b>
                                Simple 3 Steps
                            </b>
                            .
                            <br/>
                            1. Add Student, 2. Shortlist Universities, 3. Update Status.
                        </p>
                    </div>
                    <div className="side-button">
                        <a href="#GetStarted">
                            Get Started
                        </a>
                    </div>
                </div>
                <div className="img-center-content transition-left-right" >
                    <img src="https://recordrr.com/wp-content/uploads/2024/02/banner.png"/>
                </div>
            </div>

            <div className="background-gradient-2 center-content">
                <div className="img-center-content transition-right-left">
                    <img src="https://recordrr.com/wp-content/uploads/2024/02/business-flow.png"/>
                </div>
                <div className="text-center-content transition-left-right">
                    <div className="side-text">
                        <h6>
                            DYNAMIC STATUS SYSTEM
                        </h6>
                        <h2>
                            Customize the Business Flow
                        </h2>
                        <p>
                            You can create your own business flow. 
                            You can add unlimited statuses based on the country. 
                            One CRM for all countries. 
                            If you are processing for USA application, 
                            your team will get USA related statuses while updating the student status. 
                            You can create statuses like ex: 
                            1. Application Started Filing, 
                            2. Application Sent to University, 
                            3. Conditional Admit, 
                            4. Offer Received, and so on.
                        </p>
                        <ul>
                            <ListIcons text={"Give permissions based on employee role"} />
                            <ListIcons text={"Process multiple countries for one student"} />
                            <ListIcons text={"Request payments based on Country Applied"} />
                            <ListIcons text={"Free registration for UK kind of countries"} />
                            <ListIcons text={"Collect Registration Fee for USA kind of countries"} />
                        </ul>
                    </div>
                </div>
            </div>
            <div className="background-gradient-2 center-content">
                <div className="img-center-content">
                    <img src="https://recordrr.com/wp-content/uploads/2024/02/profile-evaluation.png"/>
                </div>
                <div className="text-center-content">
                    <div className="side-text">
                        <h6>
                            STUDENT'S PROFILE SUMMARY
                        </h6>
                        <h2>
                            Evaluate Student Profile
                        </h2>
                        <p>
                                In assessing a student’s profile, 
                                we begin by examining their backlog history to gauge their academic progression. 
                                We then delve into the highlights of their test scores to understand their academic performance. 
                        </p>
                        <ul>
                            <ListIcons text={"Get student backlog histroy"} />
                            <ListIcons text={"Highlights of Test Scores"} />
                            <ListIcons text={"Find out Experience Gap and History"}/>
                            <ListIcons text={"Find out Education Gap"}/>
                            <ListIcons text={"Check Visa Refusals"}/>
                            <ListIcons text={"Get student profile score"}/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
