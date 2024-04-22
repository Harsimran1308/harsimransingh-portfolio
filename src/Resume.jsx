import './Resume.css';

export default function Resume() {
    return(
        <div className="resume-section">
            <p className="resume-header-text">
                Resume
            </p>
            <div className='resume-details-text'>
                <div className='resume-education-section'>
                    Education
                </div>
                <div className='eduction-details' style={{paddingTop:'40px'}}>
                    <div className='education-logo'><img src='/windsor-logo.png' className='education-logo-image'></img></div>
                    <div className='education-detail-left'>
                        <div className='education-heading education-uni-name'>University of Windsor</div>
                        <div className='education-heading education-degree'>Master of Applied Computing</div>
                    </div>
                    <div className='education-detail-right'>
                        <div className='education-heading education-date'>Sept 2022 - April 2024</div>
                        <div className='education-heading education-uni-location'>Windsor, Canada</div>
                    </div>
                    <div className='education-course'>
                        <div className='course-title'>
                            Relevant Coursework:
                        </div>
                        <div className='course-names-list'>
                        <ul className='course-list'>
                            <li className='course-name'>Advanced Software Engineering</li>
                            <li className='course-name'>Advanced Computing Concepts</li>
                            <li className='course-name'>Advanced Systems Programming</li>
                            <li className='course-name'>Advanced Database techniques</li> 
                            <li className='course-name'>Internet Applications and Distributed Systems</li>
                            <li className='course-name'>Networking and Data Security</li>
                            <li className='course-name'>Emerging Paradigms in Computing Technologies</li>
                            <li className='course-name'>Managing Employees</li>
                        </ul>
                        </div>
                    </div>
                    <div className='course-skills'>
                        <span className='skill'>Software Engineering Principles</span>
                        <span className='skill'>Data Structures</span>
                        <span className='skill'>System Architecture</span>
                        <span className='skill'>Database Optimization</span>
                        <span className='skill'>Systems Programming</span>
                        <span className='skill'>Networking Concept</span>
                        <span className='skill'>Data Security</span>
                    </div>
                </div>
                <div className='eduction-details'>
                    <div className='education-logo'><img src='/chitkara-logo.png' className='education2-logo-image'></img></div>
                    <div className='education-detail-left'>
                        <div className='education-heading education-uni-name'>Chitkara University</div>
                        <div className='education-heading education-degree'>B.Tech Computer Science</div>
                    </div>
                    <div className='education-detail-right'>
                        <div className='education-heading education-date'>Aug 2015 - June 2019</div>
                        <div className='education-heading education-uni-location'>Chandigarh, India</div>
                    </div>
                    <div className='education-course'>
                        <div className='course-title'>
                            Relevant Coursework:
                        </div>
                        <div className='course-names-list'>
                        <ul className='course-list'>
                            <li className='course-name'>Problem Solving Technique using C/C++</li>
                            <li className='course-name'>Object Oriented Programming</li>
                            <li className='course-name'>Client Side Technologies</li>
                            <li className='course-name'>Database Management System</li> 
                            <li className='course-name'>Cyber Security and Forensics</li>
                            <li className='course-name'>Design and Analysis of Algorithm</li>
                            <li className='course-name'>Computer System Architecture</li>
                            <li className='course-name'>Designing Frontend Using Javascript</li>
                            <li className='course-name'>Theory of Computation</li>
                            <li className='course-name'>Malware and Reverse Engineering</li>
                        </ul>
                        </div>
                    </div>
                    <div className='course-skills'>
                        <span className='skill'>C/C++</span>
                        <span className='skill'>Java</span>
                        <span className='skill'>Python</span>
                        <span className='skill'>SQL</span>
                        <span className='skill'>Cyber Security</span>
                        <span className='skill'>Javascript</span>
                        <span className='skill'>System Design</span>
                        <span className='skill'>OOPS Concept</span>
                        <span className='skill'>Web Developement</span>
                        <span className='skill'>Algorythm Analysis</span>
                    </div>
                </div>
                <div className='resume-education-section' style={{paddingTop:'40px'}}>
                    Work Experience
                </div>
                <div className='eduction-details' style={{paddingTop:'40px'}}>
                    <div className='education-logo'><img src='/cgi-logo.png' className='education3-logo-image'></img></div>
                    <div className='education-detail-left'>
                        <div className='education-heading education-uni-name'>CGI</div>
                        <div className='education-heading education-degree'>Software Developer Co-op</div>
                    </div>
                    <div className='education-detail-right'>
                        <div className='education-heading education-date'>Sept 2023 - April 2024</div>
                        <div className='education-heading education-uni-location'>Toronto, Canada</div>
                    </div>
                    <div className='education-course'>
                        <div className='course-names-list'>
                        <ul className='course-list'>
                            <li className='course-name'>Worked on a project to establish a secure and scalable cloud infrastructure on Google Cloud Platform(GCP) for a banking application.</li>
                            <li className='course-name'>Implemented Infrastructure as Code using tools such as Terraform to automate the provisioning and management of cloud resources, ensuring consistency and efficiency.</li>
                            <li className='course-name'>Integrated monitoring and alerting systems to ensure proactive identification and resolution of potential issues, optimizing the overall system reliability.</li>
                            <li className='course-name'>Managed the deployment and configuration of Kubernetes clusters on Google Kubernetes Engine (GKE), while also overseeing the containerization of applications and orchestrating their deployment, scaling, and management processes.</li> 
                            <li className='course-name'>Designed and implemented CI/CD pipelines using tools such as Jenkins to automate the build, test, and deployment processes, resulting in significant time savings and increased deployment frequency.</li>
                        </ul>
                        </div>
                    </div>
                    <div className='course-skills'>
                        <span className='skill'>Google Cloud Platform</span>
                        <span className='skill'>Kubernetes</span>
                        <span className='skill'>Docker</span>
                        <span className='skill'>Jenkins</span>
                        <span className='skill'>Terraform</span>
                        <span className='skill'>Mongo DB</span>
                        <span className='skill'>Monitoring</span>
                        <span className='skill'>Helm</span>
                        <span className='skill'>Python</span>
                    </div>
                </div>
                <div className='eduction-details' style={{paddingTop:'40px'}}>
                    <div className='education-logo'><img src='/247-logo.png' className='education3-logo-image'></img></div>
                    <div className='education-detail-left'>
                        <div className='education-heading education-uni-name'>247 Software</div>
                        <div className='education-heading education-degree'>Full Stack Software Developer</div>
                    </div>
                    <div className='education-detail-right'>
                        <div className='education-heading education-date'>Sept 2019 - June 2022</div>
                        <div className='education-heading education-uni-location'>Pune, India</div>
                    </div>
                    <div className='education-course'>
                        <div className='course-names-list'>
                        <ul className='course-list'>
                            <li className='course-name'>Proficiently developed a SaaS-based web platform by leveraging expertise in ReactJS, MongoDB, NodeJS, PHP, and Java. .</li>
                            <li className='course-name'>Applied software development best practices to design and implement a scalable and reliable system that delivers a range of functionality.</li>
                            <li className='course-name'>Demonstrated ability to bring a unique perspective to development work, with a diverse skill set that enables me to create innovative solutions that meet user needs.</li>
                            <li className='course-name'>Designed and developed a range of features, including cross-platform notification services, working schedule calendar layouts, PDF report generation, and export Excel services, using ReactJS and NodeJS.</li> 
                            <li className='course-name'>Demonstrated ability to collaborate effectively with team members, maintain high code quality, and deliver projects on time and within budget.</li>
                        </ul>
                        </div>
                    </div>
                    <div className='course-skills'>
                        <span className='skill'>React js</span>
                        <span className='skill'>Node js</span>
                        <span className='skill'>Java spring boot</span>
                        <span className='skill'>php lumen</span>
                        <span className='skill'>mongo db</span>
                        <span className='skill'>mysql</span>
                        <span className='skill'>git</span>
                        <span className='skill'>Rest API</span>
                        <span className='skill'>travis ci/cd</span>
                        <span className='skill'>aws</span>
                        <span className='skill'>Agile</span>
                    </div>
                </div>         
            </div>
        </div>
    
)}