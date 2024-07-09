import '../style/About.css'
import CardsView from '../components/CardsView';
import { NavLink } from 'react-router-dom';

export function About(){
    
    return (
        <div className="about-page">
            <section className="section-1">
                <div className="section-1-wrapper">
                    <div className="section-1-content">
                        <h2 className="side-text">
                            RecordRR's Story
                        </h2>
                        <i>
                            “They say Solving the problem is the root of all inventions,
                            thats how Recordrr was born.”
                        </i>
                        <p>
                            It’s all started with the problems we faced at 
                            <NavLink className="areksoft" to={"https://www.areksoft.com"}>
                                Areksoft.
                            </NavLink>
                            We had struggled to answer the customers queries on time 
                            with adequate answers and solving their problems.
                            It was very difficult for us to assign tasks to the team and keep customer in that loop.
                        </p>

                        <p>
                            There were many other challenges during the tele-calling,
                            preparing quotations, and onboarding the clients.
                            Invoicing and maintaining the records of clients transactions,
                            requirements has become more challenging.
                        </p>

                        <p>
                            Recordrr was born amid all these challenges.
                        </p>

                        <p>
                            Firstly we want to solve the problem of abroad 
                            educational consultancies across the globe.
                            Then we thought to expand our solutions to other industries 
                            (from milk-man to corporates).
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-2-wrapper">
                <div className="section-2">
                    <img 
                        className="img-1" 
                        src="https://recordrr.com/wp-content/uploads/2021/10/about-1-img.jpg" 
                        alt="about-1-img"
                    />
                    <img 
                        className="img-2" 
                        src="https://recordrr.com/wp-content/uploads/2021/10/about-2-img.jpg" 
                        alt="about-2-img"/>
                </div>
            </section>

            <section className="section-3-wrapper">
                <div>
                    <h2>
                        Core challenges we are addressing
                    </h2>
                    <p>
                        Automating the Pre-sale and after-sale-service is our primary agenda to solve.
                        Here's what and how we are solving them.
                    </p>
                </div>
            </section>
            <section className="section-4-wrapper">
                <div className="left-section">
                    <CardsView
                    img={"cs-idea"}
                    heading={"Business Operations"}
                    info={"Our excellent permissions module will definitely helps you to manage your business virtually. Give your employees permissions, sit back and relax."}
                    />
                    <CardsView
                    img={"cs-idea"}
                    heading={"Student/Agent Onboarding"}
                    info={"You can onboard your Student/Agent in simple 3 steps. Associate Manager role would help you to bring more Agents onboard."}
                    />
                    <CardsView
                    img={"cs-idea"}
                    heading={"Invoicing and Pricing"}
                    info={"You can request registration fee and other multiple payments to the student. Student will receive PDF invoice to this email after the payment done. Partial payments would also get PDF invoice."}
                    />
                </div>
                <div className="right-section">
                    <CardsView
                    img={"cs-idea"}
                    heading={"Automated Ticketing System"}
                    info={"Be ahead to answer students/agents tickets. Bring more confidence and support in your students/agents."}
                    />
                    <CardsView
                    img={"cs-idea"}
                    heading={"After-sale service"}
                    info={"Our excellent permissions module will definitely helps you to manage your business virtually. Give your employees permissions, sit back and relax."}
                    />
                </div>
            </section>

            <section className="section-5-wrapper">
                <hr/>
                <div className="section-5">
                    <div className="section-5-element">
                        <h2 className="animated-text-1">
                            500k+
                        </h2>
                        <span>
                            Leads Processed
                        </span>
                    </div>
                    <div className="section-5-element">
                        <h2 className="animated-text-2">
                            95%
                        </h2>
                        <span>
                            Customer Satisfaction
                        </span>
                    </div>
                    <div className="section-5-element">
                        <h2 className="animated-text-3">
                            3k+
                        </h2>
                        <span>
                            End Users
                        </span>
                    </div>
                </div>
                <hr/>
            </section>

        </div>
    );
}
